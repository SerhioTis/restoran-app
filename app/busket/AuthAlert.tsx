'use client';
import { AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export const AuthAlert = () => {
  const { status } = useSession();
  const isAuthorized = status === 'authenticated';

  if (isAuthorized) return null;

  return (
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
  );
};
