'use client';
import { PropsWithChildren } from 'react';

import { usePathname } from 'next/navigation';

const removeRoutes = new Set(['/sign-in', '/sign-up']);

export default function Check({ children }: PropsWithChildren) {
  const pathname = usePathname();

  if (removeRoutes.has(pathname)) return null;

  return <>{children}</>;
}
