import { create } from 'zustand';
import { StoreState } from './types';

const useStore = create<StoreState>(set => ({
  searchTerm: '',
  setSearchTerm: (searchTerm: string) => set({ searchTerm }),
  resetSearchTerm: () => set({ searchTerm: '' }),
}));

export default useStore;
