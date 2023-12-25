'use client';
import { Button } from '@/components/ui/button';
import { useBusketsStore } from '@/stores/useBusketsStore';
import { Product } from '@/types/products';

interface ProductActionsProps {
  product: Product;
}

export const ProductActions = ({ product }: ProductActionsProps) => {
  const addToBusket = useBusketsStore((state) => state.addToBusket);

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <Button onClick={() => addToBusket(product)}>Order</Button>
    </div>
  );
};
