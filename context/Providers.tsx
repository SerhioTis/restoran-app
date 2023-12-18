'use client';
import React, { PropsWithChildren } from 'react';

import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

interface Props extends PropsWithChildren {
  session: Session | null;
}

export default function Providers({ children, session }: Props) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
