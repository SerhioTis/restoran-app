'use client';
import { ReactNode } from 'react';

import { usePathname } from 'next/navigation';

const removeRoutes = new Set(['/sign-in', '/sign-up']);

interface Props {
  children?: ReactNode;
}

export default function Check({ children }: Props) {
  const pathname = usePathname();

  if (removeRoutes.has(pathname)) return null;

  return <div>{children}</div>;
}
