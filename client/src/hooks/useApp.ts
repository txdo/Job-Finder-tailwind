import { useEffect } from "react";
import useAuthStore from "../authStore";

const useApp = () => {
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);

  useEffect(() => {
    const checkIsLoggedIn = async () => {
      const res = await fetch("http://localhost:3000/isLoggedIn", {
        credentials: "include",
      });

      if (res.status === 200) setIsLoggedIn(true);
    };

    checkIsLoggedIn();
  }, []);
};

export default useApp;
