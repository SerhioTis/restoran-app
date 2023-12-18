import { create } from 'zustand';

import { Product } from '@/types/products';

interface LoadingStore {
  currentModalProducts: Product[];
  setCurrentModalProducts: (products: Product[]) => void;
  isProductsModalOpen: boolean;
  setIsProductsModalOpen: (isOpen: boolean) => void;
}

export const useOrderStore = create<LoadingStore>()((set) => ({
  currentModalProducts: [],
  setCurrentModalProducts: (products) =>
    set(() => ({ currentModalProducts: products })),

  isProductsModalOpen: false,
  setIsProductsModalOpen: (isOpen) =>
    set(() => ({ isProductsModalOpen: isOpen })),
}));
