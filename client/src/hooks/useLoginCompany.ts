import { useNavigate } from "react-router-dom";
import useAuthStore from "../authStore";

const useLoginCompany = (): {
  login: (username: string, password: string) => Promise<void>;
} => {
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
  const navigate = useNavigate();

  const login = async (username: string, password: string): Promise<void> => {
    const res = await fetch("http://localhost:3000/loginCompany", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (res.status === 200) {
      setIsLoggedIn("company");
      navigate("/");
    }
  };

  return { login };
};

export default useLoginCompany;
