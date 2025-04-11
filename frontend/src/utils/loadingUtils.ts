import { useLoadingStore } from '@/stores/loadingStore';

export async function withLoading<T>(action: () => Promise<T>): Promise<T> {
  const loadingStore = useLoadingStore();
  loadingStore.setLoading(true);
  try {
    return await action();
  } finally {
    loadingStore.setLoading(false);
  }
}
