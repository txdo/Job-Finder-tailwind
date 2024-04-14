import { useState } from "react";
import { Link } from "react-router-dom";
import { EducationSvg, FinanceSvg, ITSvg, MarketingSvg } from "./SVGs";

const ExploreJobs = (): JSX.Element => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("Location");

  return (
    <section>
      <div className="my-container flex flex-col gap-16 items-center">
        <h1 className="font-bold text-4xl text-slate-700">
          Explore more <span className="text-teal-500">jobs</span>
        </h1>
        <div className="flex flex-col sm:flex-row sm:bg-slate-100 rounded overflow-hidden w-full lg:w-3/4">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for jobs"
            className="bg-slate-100 p-3 rounded sm:bg-transparent flex-grow"
          />
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="bg-transparent sm:border-l-2 mb-3 mt-3 cursor-pointer self-center"
          >
            <option value="Location">Location</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="USA">USA</option>
            <option value="Germany">Germany</option>
            <option value="UK">UK</option>
          </select>
          <button className="bg-teal-500 text-white px-4 py-2 hover:bg-teal-600 self-center sm:self-stretch duration-300 rounded">
            Search
          </button>
        </div>
        <div className="grid grid-rows-4 gap-8 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4">
          <div className="flex flex-col bg-teal-50 py-12 px-20 rounded justify-center items-center gap-4">
            <Link
              to={{
                pathname: "/all-jobs",
                search: "?field=finance",
              }}
            >
              <div className="w-20 h-20 bg-teal-500 rounded-full flex justify-center items-center shadow-md shadow-teal-100">
                <FinanceSvg />
              </div>
            </Link>
            <p className="font-bold text-slate-700">Finance</p>
            <p className="text-slate-700">1237 jobs</p>
          </div>
          <div className="flex flex-col bg-orange-50 py-12 px-20 rounded justify-center items-center gap-4">
            <Link
              to={{
                pathname: "/all-jobs",
                search: "?field=education",
              }}
            >
              <div className="w-20 h-20 bg-orange-500 rounded-full flex justify-center items-center shadow-md shadow-orange-100">
                <EducationSvg />
              </div>
            </Link>
            <p className="font-bold text-slate-700">Education</p>
            <p className="text-slate-700">3546 jobs</p>
          </div>
          <div className="flex flex-col bg-purple-50 py-12 px-20 rounded justify-center items-center gap-4">
            <Link
              to={{
                pathname: "/all-jobs",
                search: "?field=it",
              }}
            >
              <div className="w-20 h-20 bg-purple-500 rounded-full flex justify-center items-center shadow-md shadow-purple-100">
                <ITSvg />
              </div>
            </Link>
            <p className="font-bold text-slate-700">IT</p>
            <p className="text-slate-700">5768 jobs</p>
          </div>
          <div className="flex flex-col bg-pink-50 py-12 px-20 rounded justify-center items-center gap-4">
            <Link
              to={{
                pathname: "/all-jobs",
                search: "?field=marketing",
              }}
            >
              <div className="w-20 h-20 bg-pink-500 rounded-full flex justify-center items-center shadow-md shadow-pink-100">
                <MarketingSvg />
              </div>
            </Link>
            <p className="font-bold text-slate-700">Marketing</p>
            <p className="text-slate-700">2473 jobs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreJobs;
