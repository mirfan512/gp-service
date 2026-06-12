import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export interface User {
  id: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
}

export interface AuthState {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
}

const getInitialToken = (): string | null => {
  if (typeof window !== "undefined") {
    return Cookies.get("token") || null;
  }
  return null;
};

const getInitialUser = (): User | null => {
  if (typeof window !== "undefined") {
    try {
      const userStr = localStorage.getItem("user");
      return userStr ? JSON.parse(userStr) : null;
    } catch {
      return null;
    }
  }
  return null;
};

const token = getInitialToken();
const user = getInitialUser();

const initialState: AuthState = {
  token,
  user,
  isAuthenticated: !!token,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ user: User | null; token: string }>
    ) => {
      const { user, token } = action.payload;
      state.token = token;
      state.isAuthenticated = true;
      if (user) {
        state.user = user;
      }

      // Sync to side effects (cookies and local storage)
      if (typeof window !== "undefined") {
        // Set token in cookies. Standard secure configuration, 7 days expiry
        Cookies.set("token", token, { expires: 7, secure: true, sameSite: "strict" });
        
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
        }
      }
    },
    updateUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(action.payload));
      }
    },
    clearCredentials: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;

      if (typeof window !== "undefined") {
        Cookies.remove("token");
        localStorage.removeItem("user");
      }
    },
  },
});

export const { setCredentials, updateUser, clearCredentials } = authSlice.actions;
export default authSlice.reducer;
export type { User as AuthUser };
