import { AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { getServerSession } from 'next-auth';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

import { authOptions } from '../api/auth/[...nextauth]/options';

import { OrderDashboard } from './OrderDashboard';

export default async function Busket() {
  const session = await getServerSession(authOptions);
  const isAuthorized = !!session;

  return (
    <div className="mx-24 flex flex-col justify-center gap-5 pt-10">
      {isAuthorized || (
        <Alert className="w-[400px]">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Alert!</AlertTitle>
          <AlertDescription>
            To create an order, you slould
            <Link href="/sign-in" className="text-[#3399ff] underline">
              sign in
            </Link>
            first
          </AlertDescription>
        </Alert>
      )}

      <OrderDashboard />
    </div>
  );
}
