import { useState } from "react";
import useLoginCompany from "../hooks/useLoginCompany";

const LoginCompany = (): JSX.Element => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useLoginCompany();

  return (
    <section className="h-full flex items-center justify-center">
      <div className="w-[90%] md:w-[60%] border rounded shadow gap-4 flex flex-col items-center p-8 md:px-16">
        <h1 className="font-bold text-3xl text-slate-700">
          Login into your company profile ✅
        </h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-[100%] bg-slate-100 p-2 rounded border-2 border-teal-500 transition-all duration-300 ring-0 focus:ring-2 focus:ring-teal-200 focus:outline-none"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-[100%] bg-slate-100 p-2 rounded border-2 border-teal-500 transition-all duration-300 ring-0 focus:ring-2 focus:ring-teal-200 focus:outline-none"
        />
        <button
          onClick={() => login(username, password)}
          className="bg-teal-500 text-white px-4 py-2 mt-8 rounded hover:bg-teal-600 duration-300"
        >
          Login
        </button>
      </div>
    </section>
  );
};

export default LoginCompany;
