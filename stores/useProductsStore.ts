import { create } from 'zustand';

import { Product } from '@/types/products';

interface ProductStore {
  busket: Product[];
  addToBusket: (product: Product) => void;
  removeFromBusket: (id: number) => void;
}

export const useProductsStore = create<ProductStore>()((set, get) => ({
  busket: [],
  addToBusket: (product) =>
    set((state) => ({ busket: [...state.busket, product] })),
  removeFromBusket: (id) => {
    const filteredBusket = get().busket.filter((item) => item.id !== id);
    set({ busket: filteredBusket });
  },
}));
