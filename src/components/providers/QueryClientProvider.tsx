'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useMemo } from 'react';

const CustomQueryClientProvider = ({ children }: { children?: ReactNode }) => {
  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 1, // 0보다는 1번 정도 재시도가 좋음
            staleTime: 5 * 60 * 1000, // 5분간 fresh 상태 유지
            gcTime: 10 * 60 * 1000, // 10분 후 가비지 컬렉션 (구 cacheTime)
          },
          mutations: {
            retry: false,
          },
        },
      }),
    []
  );

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default CustomQueryClientProvider;
