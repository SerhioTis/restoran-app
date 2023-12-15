'use client';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/products';
import { useProductsStore } from 'stores/useProductsStore';

interface Props {
  product: Product;
}

export default function ProductActions({ product }: Props) {
  const addToBusket = useProductsStore((state) => state.addToBusket);
  const removeFromBusket = useProductsStore((state) => state.removeFromBusket);
  const isAlreadyAdded = useProductsStore((state) =>
    state.busket.some((item) => item.id === product.id),
  );

  const handleAddToBusket = () => {
    addToBusket(product);
  };

  const handleRemoveFromBusket = () => {
    removeFromBusket(product.id);
  };

  return (
    <div>
      {isAlreadyAdded && (
        <Button onClick={handleRemoveFromBusket}>Remove</Button>
      )}
      {!isAlreadyAdded && <Button onClick={handleAddToBusket}>Order</Button>}
    </div>
  );
}
