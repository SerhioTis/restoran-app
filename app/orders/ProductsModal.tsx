'use client';

import { ProductCard } from '@/components/sheared/ProductCard';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useOrderStore } from '@/stores/useOrderStore';

export function ProductModal() {
  const isProductsModalOpen = useOrderStore(
    (state) => state.isProductsModalOpen,
  );
  const setIsProductsModalOpen = useOrderStore(
    (state) => state.setIsProductsModalOpen,
  );
  const currentModalProducts = useOrderStore(
    (state) => state.currentModalProducts,
  );

  return (
    <Dialog open={isProductsModalOpen} onOpenChange={setIsProductsModalOpen}>
      <DialogContent className="!max-w-[70%]">
        <DialogHeader>
          <DialogTitle>Products</DialogTitle>
          <DialogDescription>
            Here you can see list of products that is in this order
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-8">
          {currentModalProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              disableInteraction
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
