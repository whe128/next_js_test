
import '@/app/ui/global.css';

import { Inter } from 'next/font/google';
import React from "react";
import {Metadata} from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hello!',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh')
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
          <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
