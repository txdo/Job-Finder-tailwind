import { useState } from "react";
import CandidateCard from "./CandidateCard";
import businessman from "../assets/businessman.jpg";

const Candidates = (): JSX.Element => {
  const [serach, setSearch] = useState("");
  const [location, setLocation] = useState("Location");
  const [experience, setExperience] = useState("Experience");

  return (
    <section>
      <div className="my-container">
        <h1 className="text-4xl text-slate-700 font-bold">
          Search <span className="text-teal-500">Candidates</span>
        </h1>
        <div className="grid md:grid-cols-[1fr_2fr] grid-cols-1 gap-8 mt-12">
          <div className="space-y-2">
            <p>Search</p>
            <input
              type="text"
              placeholder="Search for candidates"
              className="bg-slate-100 p-3 rounded w-full"
              value={serach}
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
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              >
                <option value="Experience">Experience</option>
                <option value="Intern">Intern</option>
                <option value="Entry-Level">Entry Level</option>
                <option value="Mid-Level">Mid Level</option>
                <option value="Senior-Level">Senior Level</option>
              </select>
            </div>
          </div>
        </div>
        <div className="space-y-4 mt-8">
          <CandidateCard
            name="Josh"
            location="Bulgaria"
            tags={["Frontend", "React", "JavaScript", "Tailwind CSS"]}
            profilePicture={businessman}
          />
          <CandidateCard
            name="Josh"
            location="Bulgaria"
            tags={["Frontend", "React", "JavaScript", "Tailwind CSS"]}
            profilePicture={businessman}
          />
          <CandidateCard
            name="Josh"
            location="Bulgaria"
            tags={["Frontend", "React", "JavaScript", "Tailwind CSS"]}
            profilePicture={businessman}
          />
        </div>
      </div>
    </section>
  );
};

export default Candidates;
