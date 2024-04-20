import { useNavigate } from "react-router-dom";
import useAuthStore from "../authStore";

const useLogin = (): {
  login: (username: string, password: string) => void;
} => {
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
  const navigate = useNavigate();

  const login = async (username: string, password: string) => {
    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (res.status === 200) {
      setIsLoggedIn("user");
      navigate("/");
    }
  };

  return { login };
};

export default useLogin;
