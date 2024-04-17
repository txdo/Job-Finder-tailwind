import { useState } from "react";
import illustration from "../assets/auth.svg";

const Login = (): JSX.Element => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="h-full">
      <div className="flex gap-4 h-full justify-evenly items-center">
        <img
          src={illustration}
          alt="Auth Illustration"
          className="hidden md:inline-block max-h-[70vh] w-auto"
        />
        <div className="border rounded shadow flex flex-col justify-center gap-4 p-8 h-80">
          <h1 className="font-bold text-3xl text-slate-700">
            Let's get started 🚀
          </h1>
          <p className="text-slate-500">Sign up your account</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="bg-slate-100 p-2 rounded border-2 border-teal-500 transition-all duration-300 ring-0 focus:ring-2 focus:ring-teal-200 focus:outline-none"
          />
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="bg-slate-100 p-2 rounded border-2 border-teal-500 transition-all duration-300 ring-0 focus:ring-2 focus:ring-teal-200 focus:outline-none"
          />
          <button className="self-center bg-teal-500 text-white px-4 py-2 hover:bg-teal-600 duration-300 rounded">
            Login
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
