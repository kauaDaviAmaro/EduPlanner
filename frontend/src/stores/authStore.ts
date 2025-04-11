import { defineStore } from 'pinia';
import { authService } from '@/services/auth';
import type { AuthState, LoginPayload } from '@/types/auth';
import { withLoading } from '@/utils/loadingUtils';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authState: null as AuthState | null,
  }),

  actions: {
    async login(payload: LoginPayload) {
      try {
        return await withLoading(async () => {
          this.authState = await authService.login(payload);
          localStorage.setItem('token', this.authState.token);
        });
      } catch (error) {
        throw error;
      }
    },

    async logout() {
      await authService.logout();
      this.authState = null;
      localStorage.removeItem('token');
    },
  },
});
