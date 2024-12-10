'use server';

import { z } from 'zod';
import {sql} from '@vercel/postgres'
import { revalidatePath } from 'next/cache';
import {redirect} from 'next/navigation';
import {signIn} from '@/auth';
import { AuthError } from 'next-auth';

const FormSchema = z.object({
    id: z.string(),
    customerId: z.string(
      {
        invalid_type_error: 'Please select a customer.'
      }
    ),
    amount: z.coerce.number().gt(
      0,
      {
        message: 'Please enter an amount greater than $0'
      }
    ),
    status: z.enum(['pending', 'paid'],
      {
        invalid_type_error: 'Please select an invoice',
      }
    ),
    date: z.string(),
});

const CreateInvoice = FormSchema.omit({id: true, date:true});

// Use Zod to update the expected types
const UpdateInvoice = FormSchema.omit({ id: true, date: true });


export async function authenticate(
  prevState: string | undefined,
  formData: FormData
){
  try{
    await signIn('credentials', formData)
  } catch(error){
    if(error instanceof AuthError){
      switch(error.type){
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

// ...
export async function updateInvoice( id: string, preState: State, formData: FormData) {

  const validatedFields  = CreateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });


  if(!validatedFields.success){
    return{
      error: validatedFields.error?.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Created Invoice.'
    }
  }

  const {customerId, amount, status} = validatedFields.data;

  const amountInCents = amount * 100;

  try{
    await sql`
    UPDATE invoices
    SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
    WHERE id = ${id}
    `;
  } catch(error) {
    return{messsage: 'Database Error: Failed to Update Invoice.'};
  }


  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

//customized hook
export type State = {
  errors?:{
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };

  message?: string|null;
}

export async function createInvoice(prevState: State, formData: FormData){

    const rawFormData = {
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status')
    };

    /*
    validate date type
    additional flag, success
    {
      success: true/false
      data:{
        customerId: "123",
        amount: 50,
        status: "active"
      }
    }
      when we use the data, we need first check the success flag.

      when the validation failed
      the data
      {
        success: false,
        error: zodError
      }

      error.flatten() is the methos of ZodError
    */

    const validatedFields  = CreateInvoice.safeParse(rawFormData);


    //first check the validation
    if(!validatedFields.success){

      return{
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Created Invoice.'
      }
    }

    const {customerId, amount, status } = validatedFields.data;
    const amountIncents = amount * 100;
    const date = new Date().toISOString().split('T')[0];

    const rawFormDataByEntries = Object.fromEntries(formData.entries());

    try{
        await sql`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${customerId}, ${amountIncents}, ${status}, ${date})
        `;
    } catch(error){
        return{
            message: 'Database Error: Failed to Create Invoice'
        }
    }


    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string){

    try{

    } catch (error) {
        return{message: 'Database Error: Failed to Delete Invoice.'}
    }
  await sql`
    DELETE FROM invoices WHERE id = ${id};
  `;

  //on this path, so do not need to redirect, just revalidate
  revalidatePath('/dashboard/invoices');
}

