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

export const ProductModal = () => {
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
          <DialogTitle>Замовлення</DialogTitle>
          <DialogDescription>
            Тут ви можете побачити список продуктів, які включені в це
            замовлення
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-8">
          {currentModalProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
