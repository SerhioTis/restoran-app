'use client';
import { Button } from '@/components/ui/button';
import { useBusketsStore } from '@/stores/useBusketsStore';
import { Product } from '@/types/products';

interface ProductActionsProps {
  product: Product;
}

export const ProductActions = ({ product }: ProductActionsProps) => {
  const addToBusket = useBusketsStore((state) => state.addToBusket);
  const removeFromBusket = useBusketsStore((state) => state.removeFromBusket);
  const productCountInBusket = useBusketsStore(
    (state) =>
      state.busket.filter(
        (productInBusket) => productInBusket.id === product.id,
      ).length,
  );

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {productCountInBusket ? (
        <div className="flex items-center gap-1">
          <Button
            variant="destructive"
            size="sm"
            onClick={() => addToBusket(product)}
          >
            +
          </Button>
          <Button
            variant="destructive"
            size="sm"
            onClick={() => removeFromBusket(product.id)}
          >
            -
          </Button>
          <span className="font-bold">{productCountInBusket}</span>
        </div>
      ) : (
        <Button variant="destructive" onClick={() => addToBusket(product)}>
          Order
        </Button>
      )}
    </div>
  );
};
