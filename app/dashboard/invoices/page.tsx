import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchInvoicesPages } from '@/app/lib/data'
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Invoices',
};

export default async function Page(
  props:{
    //props里面的参数，
    //名字叫searchParams
    //数据类型是Promise
    //Promise里面存的类型<generic>   泛型是{query?:string; page?:string}

    //传进来一个参数，这个参数的返回值需要await来获取的，先传进来，然后在await
    //? 这个参数属性可选，也可以没有这个属性
    //需要用const params = await props.searchPrams;
    searchParams?: Promise<
      {
        query ?: string;
        page ?: string;
      }
    >
  }
) {

  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage  =  Number(searchParams?.page) || 1
  const totalPages = await fetchInvoicesPages(query);

  return (
    <div className="w-full">
      {/*<div className="flex w-full items-center justify-between">*/}
      {/*  <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>*/}
      {/*</div>*/}
      {/*<div className="mt-4 flex items-center justify-between gap-2 md:mt-8">*/}
      {/*  <Search placeholder="Search invoices..." />*/}
      {/*  <CreateInvoice />*/}
      {/*</div>*/}
      {/* <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>*/}
      {/*  <Table query={query} currentPage={currentPage} />*/}
      {/*</Suspense>*/}
      {/*<div className="mt-5 flex w-full justify-center">*/}
      {/*  { <Pagination totalPages={totalPages} /> }*/}
      {/*</div>*/}
        return <p>Invoice!</p>;
    </div>
  );
}
