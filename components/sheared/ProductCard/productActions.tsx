'use client';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/products';
import { useBusketsStore } from 'stores/useBusketsStore';

interface Props {
  product: Product;
}

export default function ProductActions({ product }: Props) {
  const addToBusket = useBusketsStore((state) => state.addToBusket);

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <Button onClick={() => addToBusket(product)}>Order</Button>
    </div>
  );
}
