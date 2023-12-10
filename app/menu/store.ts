import { create } from 'zustand';

type SearchProductStore = {
  search: string;
  setSearch: (search: string) => void;
};

export const useSearchProduct = create<SearchProductStore>()((set) => ({
  search: '',
  setSearch: (search) => set({ search }),
}));
