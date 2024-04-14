import { Link } from "react-router-dom";

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="my-container">
        <div className="grid grid-rows-[1fr_2fr_2fr_2fr] gap-8 s sm:grid-rows-2 sm:grid-cols-2 md:grid-rows-1 md:grid-cols-4 lg:grid-rows-1 lg:grid-cols-4">
          <h1 className="text-slate-200 text-3xl font-bold sm:place-self-center">
            Job Finder
          </h1>
          <div className="flex flex-col gap-4 sm:justify-self-center">
            <h2 className="text-slate-200 font-bold text-2xl">Product</h2>
            <Link to="/all-jobs" className="text-slate-200">
              All jobs
            </Link>
            <Link to="/companies" className="text-slate-200">
              Companies
            </Link>
            <Link to="/people" className="text-slate-200">
              Candidates
            </Link>
          </div>
          <div className="flex flex-col gap-4 sm:justify-self-center">
            <h2 className="text-slate-200 font-bold text-2xl">Resources</h2>
            <p className="text-slate-200">Blog</p>
            <p className="text-slate-200">User guides</p>
            <p className="text-slate-200">Webinars</p>
          </div>
          <div className="flex flex-col gap-4 sm:justify-self-center">
            <h2 className="text-slate-200 font-bold text-2xl">Company</h2>
            <p className="text-slate-200">About</p>
            <p className="text-slate-200">Join us</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
