import { useNavigate } from "react-router-dom";
import useAuthStore from "../authStore";

const useRegister = (): {
  register: (
    name: string,
    username: string,
    password: string,
    confirmPassword: string
  ) => void;
} => {
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
  const navigate = useNavigate();

  const register = async (
    name: string,
    username: string,
    password: string,
    confirmPassword: string
  ) => {
    const res = await fetch("http://localhost:3000/register", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, username, password, confirmPassword }),
    });

    if (res.status === 201) {
      setIsLoggedIn("user");
      navigate("/");
    }
  };

  return { register };
};

export default useRegister;
