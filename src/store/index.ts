import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface BearState {
  bears: number;
  todos: [];
  increase: (by: number) => void;
  getTodos: () => void;
}

export const useBearStore = create<BearState>()(
  devtools(
    persist(
      (set) => ({
        bears: 0,
        todos:[],
        increase: (by) => set((state) => ({ bears: state.bears + by })),
        getTodos: async () => {
          const response = await fetch(
            'https://jsonplaceholder.typicode.com/todos'
          );
          set({ todos: await response.json() });
        },
      }),
      {
        name: 'bear-storage',
      }
    )
  )
);
