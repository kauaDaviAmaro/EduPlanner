import type { User } from "./user";

export interface AuthState {
  user: User | null;
  token: string;
}

export interface LoginPayload {
  username: string;
  password: string;
}
