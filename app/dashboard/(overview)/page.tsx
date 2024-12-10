import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchLatestInvoices } from '@/app/lib/data';

import { Suspense } from 'react';
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardSkeleton , CardsSkeleton } from '@/app/ui/skeletons';
import CardWrapper from '@/app/ui/dashboard/cards';

export default async function Page() {


    // const {
    //     numberOfCustomers,
    //     numberOfInvoices,
    //     totalPaidInvoices,
    //     totalPendingInvoices,
    //   }=  await fetchCardData();

  return (
      <main className="flex flex-wrap justify-center items-center gap-9">
          <div className="flex-col">
              <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                  Balloon in Canberra
              </h1>
              <video width="450" height="500" controls autoPlay>
                  <source
                      src="https://firebasestorage.googleapis.com/v0/b/gp-24-s2-g11.appspot.com/o/bbbbbbbbb.mp4?alt=media&token=7f040491-a80c-48a7-a8e9-ce3e7c5882e6"
                      type="video/mp4"/>
              </video>
          </div>

          <div className="flex-col">
              <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                  Seashore in Sydney
              </h1>
              <video width="800" height="100" controls>
                  <source
                      src="https://firebasestorage.googleapis.com/v0/b/gp-24-s2-g11.appspot.com/o/eeeee.mp4?alt=media&token=6411ba21-4053-416b-a651-9a4ebcdff826"
                      type="video/mp4"/>
              </video>
          </div>

      </main>
  );
}
