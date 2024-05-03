import { useState } from "react";
import jsLogo from "../assets/js.png";
import CompanyCard from "./CompanyCard";

const Companies = (): JSX.Element => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("Location");
  const [industry, setIndustry] = useState("Industry");

  return (
    <section>
      <div className="my-container">
        <h1 className="text-4xl text-slate-700 font-bold">
          Search <span className="text-teal-500">Companies</span>
        </h1>
        <div className="grid md:grid-cols-[1fr_2fr] grid-cols-1 gap-8 mt-12">
          <div className="space-y-2">
            <p>Search</p>
            <input
              type="text"
              placeholder="Search for candidates"
              className="bg-slate-100 p-3 rounded w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <p className="text-slate-700">Filter</p>
              <button className="text-teal-500">Clear filters</button>
            </div>
            <div className="flex gap-4">
              <select
                className="flex-grow p-3 bg-slate-100"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="Location">Location</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="USA">USA</option>
                <option value="Germany">Germany</option>
                <option value="UK">UK</option>
              </select>
              <select
                className="flex-grow p-3 bg-slate-100"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
              >
                <option value="Industry">Industry</option>
                <option value="Finance">Finance</option>
                <option value="Education">Education</option>
                <option value="IT">IT</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>
          </div>
        </div>
        <div className="space-y-4 mt-8">
          <CompanyCard
            name="Laborum"
            location="Bulgaria"
            about="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis ex aspernatur minus quisquam. Unde eius officiis laudantium. Perspiciatis, ducimus placeat."
            image={jsLogo}
          />
          <CompanyCard
            name="Laborum"
            location="Bulgaria"
            about="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis ex aspernatur minus quisquam. Unde eius officiis laudantium. Perspiciatis, ducimus placeat."
            image={jsLogo}
          />
          <CompanyCard
            name="Laborum"
            location="Bulgaria"
            about="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis ex aspernatur minus quisquam. Unde eius officiis laudantium. Perspiciatis, ducimus placeat."
            image={jsLogo}
          />
        </div>
      </div>
    </section>
  );
};

export default Companies;
