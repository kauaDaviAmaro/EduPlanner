import api from "./api";
import type { AuthState, LoginPayload } from "@/types/auth";

export const authService = {
  async login(payload: LoginPayload): Promise<AuthState> {
    const response = await api.post<AuthState>("/auth/login", payload);
    return response.data;
  },

  async logout(): Promise<void> {
    await api.post("/auth/logout");
  },

  async getCurrentUser(): Promise<AuthState> {
    const response = await api.get<AuthState>("/auth/me");
    return response.data;
  },
};
