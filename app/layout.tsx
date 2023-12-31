import type { Metadata } from 'next';
import './globals.css';
import { PropsWithChildren } from 'react';

import { getServerSession } from 'next-auth';

import { Header } from '@/components/sheared/Header/index';
import { PageLoading } from '@/components/sheared/PageLoading';
import { Toaster } from '@/components/ui/toaster';
import Providers from '@/context/Providers';

import { authOptions } from './api/auth/[...nextauth]/options';

export const metadata: Metadata = {
  title: 'WINETIME',
  description: 'WINETIME',
};

export default async function RootLayout({ children }: PropsWithChildren<any>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <Providers session={session}>
        <body>
          <Header />
          {children}
          <PageLoading />
          <Toaster />
        </body>
      </Providers>
    </html>
  );
}
