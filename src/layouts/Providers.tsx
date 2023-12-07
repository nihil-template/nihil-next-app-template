'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      staleTime: 10 * 60 * 1000,
      gcTime: 15 * 60 * 1000,
    },
    mutations: {
      retry: false,
      gcTime: 15 * 60 * 1000,
    },
  },
});

export function Providers({ children, }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools position='bottom' />
    </QueryClientProvider>
  );
}
