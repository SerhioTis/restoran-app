import { create } from 'zustand';

interface LoadingStore {
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
}

export const usePageLoadingStore = create<LoadingStore>()((set) => ({
  isLoading: false,
  setLoading: (isLoading) => set(() => ({ isLoading })),
}));
