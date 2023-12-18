import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { Product } from '@/types/products';

interface ProductStore {
  busket: Product[];
  addToBusket: (product: Product) => void;
  removeFromBusket: (id: number) => void;
}

export const useBusketsStore = create<ProductStore>()(
  persist(
    (set, get) => ({
      busket: [],
      addToBusket: (product) =>
        set((state) => ({ busket: [...state.busket, product] })),
      removeFromBusket: (id) => {
        const filteredBusket = get().busket.filter((item) => item.id !== id);
        set({ busket: filteredBusket });
      },
    }),
    {
      name: 'busket',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
