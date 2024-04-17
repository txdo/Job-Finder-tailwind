import { create } from "zustand";

interface AuthStore {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (bool: boolean) => set({ isLoggedIn: bool }),
}));

export default useAuthStore;
