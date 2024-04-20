import { useNavigate } from "react-router-dom";
import useAuthStore from "../authStore";

const useRegisterCompany = (): {
  register: (
    name: string,
    field: string,
    location: string,
    description: string,
    reasons: string[],
    url: string,
    banner: File | null | undefined,
    image: File | null | undefined,
    username: string,
    password: string,
    confirmPassword: string
  ) => Promise<void>;
} => {
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
  const navigate = useNavigate();

  const register = async (
    name: string,
    field: string,
    location: string,
    description: string,
    reasons: string[],
    url: string,
    banner: File | null | undefined,
    image: File | null | undefined,
    username: string,
    password: string,
    confirmPassword: string
  ): Promise<void> => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("field", field);
    formData.append("location", location);
    formData.append("description", description);
    formData.append("reasons", JSON.stringify(reasons));
    formData.append("url", url);
    formData.append("banner", banner as Blob);
    formData.append("image", image as Blob);
    formData.append("username", username);
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);

    const res = await fetch("http://localhost:3000/registerCompany", {
      method: "POST",
      credentials: "include",
      body: formData,
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 201) {
      setIsLoggedIn("company");
      navigate("/");
    }
  };

  return { register };
};

export default useRegisterCompany;
