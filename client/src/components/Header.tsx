import { NavLink } from "react-router-dom";
import { useState } from "react";
import useHeader from "../hooks/useHeader";
import useAuthStore from "../authStore";

const Header = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const { toggleMenu, logout } = useHeader();

  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return (
    <header className="flex justify-between px-4 py-4 items-center">
      <div className="flex gap-10 items-center">
        <h1 className="text-teal-500 text-3xl font-bold">Job Finder</h1>
        <nav className="flex gap-4">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/all-jobs" className="nav-link">
            All Jobs
          </NavLink>
          <NavLink to="/companies" className="nav-link">
            Companies
          </NavLink>
          <NavLink to="/people" className="nav-link">
            People
          </NavLink>
        </nav>
      </div>
      <nav>
        {isLoggedIn ? (
          <>
            <NavLink to="/messages" className="nav-link">
              Messages
            </NavLink>
            <NavLink to="/profile" className="nav-link">
              Profile
            </NavLink>
            <button onClick={logout} className="nav-link">
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
            <NavLink to="/register" className="nav-link">
              Register
            </NavLink>
          </>
        )}
      </nav>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="#000000"
        viewBox="0 0 256 256"
        onClick={() => toggleMenu(isMenuOpen, setIsClosing, setIsMenuOpen)}
      >
        <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
      </svg>
      <nav
        className={`${isMenuOpen ? "open" : ""} mobile-nav ${
          isClosing ? "is-closing" : ""
        } flex flex-col gap-4 bg-white bg-opacity-90 pb-4`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#000000"
          viewBox="0 0 256 256"
          onClick={() => toggleMenu(isMenuOpen, setIsClosing, setIsMenuOpen)}
          className="self-end mr-4 mt-4"
        >
          <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
        </svg>
        <NavLink to="/" className="text-2xl">
          Home
        </NavLink>
        <NavLink to="/all-jobs" className="text-2xl text-slate-700">
          All Jobs
        </NavLink>
        <NavLink to="/companies" className="text-2xl text-slate-700">
          Companies
        </NavLink>
        <NavLink to="/people" className="text-2xl text-slate-700">
          People
        </NavLink>
        {isLoggedIn ? (
          <>
            <NavLink to="/messages" className="text-2xl text-slate-700">
              Messages
            </NavLink>
            <NavLink to="/profile" className="text-2xl text-slate-700">
              Profile
            </NavLink>
            <button onClick={logout} className="text-2xl text-slate-700">
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" className="text-2xl text-slate-700">
              Login
            </NavLink>
            <NavLink to="/register" className="text-2xl text-slate-700">
              Register
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
