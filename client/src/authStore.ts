import { create } from "zustand";

interface AuthStore {
  isLoggedIn: boolean | string;
  setIsLoggedIn: (value: boolean | string) => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (bool: boolean | string) => set({ isLoggedIn: bool }),
}));

export default useAuthStore;
