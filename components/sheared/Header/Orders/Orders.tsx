'use client';

import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { useBusketsStore } from 'stores/useBusketsStore';

export const Orders = () => {
  const countOfOrders = useBusketsStore((item) => item.busket.length);

  return (
    <Link href="/busket">
      <Badge variant="default">
        {countOfOrders}
        <ShoppingCart size={24} />
      </Badge>
    </Link>
  );
};
