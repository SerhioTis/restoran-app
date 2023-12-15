'use client';

import { cn } from '@/lib/utils';
import { usePageLoadingStore } from 'stores/usePageLoadingStore';

export const PageLoading = () => {
  const isLoading = usePageLoadingStore((state) => state.isLoading);

  if (!isLoading) return null;

  return (
    <div
      className={cn('bg-[#ffffff99] fixed inset-0 z-50', {
        'animate-fadeIn': isLoading,
        'animate-fadeOut': !isLoading,
      })}
    >
      <div className="flex h-full items-center justify-center">
        <div className="h-32 w-32 animate-spin rounded-full border-y-2 border-blue-500"></div>
      </div>
    </div>
  );
};
