import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import axios from 'axios';

interface BearState {
  bears: number;
  todos: string[];
}

export const useBearStore = create<BearState>()(
  devtools(
    persist(
      (set) => ({
        bears: 0,
        todos: [],
        setPosts: () => {
          set({ todos: ['eeqe', 'dasdad'] });
        },
      }),
      {
        name: 'bear-storage',
      }
    )
  )
);

interface OtherBearState {
  posts: [];
  getPosts: () => void;
  hello: number;
}

export const useOtherBearStore = create<OtherBearState>()(
  devtools(
    persist(
      (set) => ({
        posts: [],
        getPosts: async () => {
          const res2: [] = await axios.get(
            'https://jsonplaceholder.typicode.com/posts'
          );
          set({ posts: res2 });
        },
        hello: 0,
      }),
      {
        name: 'bear',
      }
    )
  )
);
