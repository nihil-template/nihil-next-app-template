import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ExampleState {
  word: string;
}

export const exampleStore = create(
  persist<ExampleState>(() => ({
    word: 'JavaScript',
  }), {
    name: 'state/example',
  })
);

export const setWord = (value: string) => {
  exampleStore.setState({ word: value, });
};
