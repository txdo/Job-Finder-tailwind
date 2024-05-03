import { useEffect } from "react";
import useAuthStore from "../authStore";

const useApp = () => {
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);

  useEffect(() => {
    const checkIsLoggedIn = async () => {
      const res = await fetch("http://localhost:3000/isLoggedIn", {
        credentials: "include",
      });

      const data = await res.json();
      console.log(data.isLoggedIn);
      if (data.isLoggedIn === "company") setIsLoggedIn("company");
      else setIsLoggedIn("user");
    };

    checkIsLoggedIn();
  }, []);
};

export default useApp;
