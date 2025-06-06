import { defineStore } from 'pinia';

export const useLoadingStore = defineStore('loading', {
  state: () => ({
    isLoading: false,
  }),

  actions: {
    setLoading(value: boolean) {
      this.isLoading = value;

      setTimeout(() => {
        this.isLoading = false;
      }, 5000);
    },
  },
});
