import { useNavigate } from "react-router-dom";
import useAuthStore from "../authStore";

const useHeader = (): {
  toggleMenu: (
    isMenuOpen: boolean,
    setIsClosing: (value: boolean) => void,
    setIsMenuOpen: (value: boolean) => void
  ) => void;
  logout: () => void;
} => {
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
  const navigate = useNavigate();

  const toggleMenu = (
    isMenuOpen: boolean,
    setIsClosing: (value: boolean) => void,
    setIsMenuOpen: (value: boolean) => void
  ) => {
    if (isMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
      }, 500);
      return;
    }

    setIsMenuOpen(true);
  };

  const logout = async () => {
    const res = await fetch("http://localhost:3000/logout", {
      credentials: "include",
    });

    if (res.status === 200) {
      setIsLoggedIn(false);
      navigate("/login");
    }
  };

  return { toggleMenu, logout };
};

export default useHeader;
