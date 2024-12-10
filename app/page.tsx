import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from './ui/fonts';
import  Image from 'next/image'

import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default function Page() {
  return (
      <main className="flex min-h-screen flex-col p-6">
          <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
              {<AcmeLogo/>}
          </div>
          <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
              <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
                  <div className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
                      <strong>Powered by He Wang.</strong>
                      <p className={"text-blue-500"}>Next.js</p>
                  </div>
                  <Link
                      href="/dashboard"
                      className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
                  >
                      <span>Welcome!</span> <ArrowRightIcon className="w-5 md:w-6"/>
                  </Link>

              </div>
              <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12 flex-wrap md:flex-nowrap gap-2">
                  {/* Add Hero Images Here */}
                  <Image
                      src="https://firebasestorage.googleapis.com/v0/b/gp-24-s2-g11.appspot.com/o/ddddddd.jpg?alt=media&token=60b0b994-fbea-401b-a2f1-92bd1e79a269"
                      width={600}
                      height={760}

                      alt="Screenshots of the dashboard project showing desktop version"
                  />

                  <Image
                      src="https://firebasestorage.googleapis.com/v0/b/gp-24-s2-g11.appspot.com/o/aaaaaaaaaaaaaaaaaaaaaaaaaa.jpg?alt=media&token=f28cd3c6-a188-48ac-a557-21bb8feec9c8"
                      width = {500}
                      height = {620}
                      alt={"Screenshots of the dashboard project showing desktop version"}

                      />
              </div>
          </div>
      </main>
  );
}
