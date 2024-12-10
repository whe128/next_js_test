import { db } from "@vercel/postgres";
import { neon } from '@neondatabase/serverless';

const client = await db.connect();
const sql = neon(`${process.env.DATABASE_URL}`);

async function listInvoices() {
  // 执行查询
  const data = await sql`
    SELECT *
    FROM invoices
    ;
  `;

  // 返回查询结果
  return data; // 直接返回查询结果
}

export async function GET() {
  // return Response.json({
  //   message:
  //     'Uncomment this file and remove this line. You can delete this file when you are finished.',
  // });
  try {
  	return Response.json(await listInvoices());
  } catch (error) {
  	return Response.json({ error }, { status: 500 });
  }
}
