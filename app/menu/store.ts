import { create } from 'zustand';

type SearchProductStore = {
  search: string;
  setSearch: (search: string) => void;
};

export const useSearchProduct = create<SearchProductStore>()((set) => ({
  search: '',
  setSearch: (search) => set({ search }),
}));

type SubtypeIntersectionStore = {
  subtype: string;
  setSubtype: (search: string) => void;
};

export const useSubtypeIntersection = create<SubtypeIntersectionStore>()(
  (set) => ({
    subtype: '',
    setSubtype: (subtype) => set({ subtype }),
  }),
);
