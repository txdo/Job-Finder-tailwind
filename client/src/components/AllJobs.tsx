import { useState } from "react";
import JobsCard from "./JobsCard";
import jsLogo from "../assets/js.png";
import JobInfo from "./JobInfo";

const AllJobs = (): JSX.Element => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("Location");
  const [jobType, setJobType] = useState("Job-Type");
  const [experience, setExperience] = useState("Experience");
  const [infoHidden, setInfoHidden] = useState(true);
  const [id, setId] = useState("");

  return (
    <section>
      <div className="my-container flex flex-col gap-16">
        <h1 className="text-4xl font-bold text-slate-700">
          Search <span className="text-teal-500">Jobs</span>
        </h1>
        <div className="grid grid-rows-2 gap-8 md:grid-rows-1 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-slate-700">Search</p>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for jobs"
              className="bg-slate-100 p-3 rounded mt-2 w-full"
            />
          </div>
          <div>
            <div className="flex justify-between">
              <p className="text-slate-700">Filters</p>
              <button className="text-teal-500">Clear filter</button>
            </div>
            <div className="flex gap-4 mt-2">
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="flex-grow bg-slate-100 p-3 rounded"
              >
                <option value="Location">Location</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="USA">USA</option>
                <option value="Germany">Germany</option>
                <option value="UK">UK</option>
              </select>
              <select
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                className="flex-grow bg-slate-100 p-3 rounded"
              >
                <option value="Job-Type">Job Type</option>
                <option value="Onsite">Onsite</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
              </select>
              <select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="flex-grow bg-slate-100 p-3 rounded"
              >
                <option value="Experience">Experience</option>
                <option value="Internship">Internship</option>
                <option value="Entry-Level">Entry Level</option>
                <option value="Mid-Level">Mid Level</option>
                <option value="Senior-Level">Senior Level</option>
              </select>
            </div>
          </div>
        </div>
        <div className="md:grid md:grid-cols-[1fr_2fr] md:gap-4">
          <div className="flex flex-col gap-4">
            <JobsCard
              img={jsLogo}
              jobTitle="JavaScript Developer"
              salary="$90K - $120K"
              companyName="Laborum"
              location="Tucson, AZ"
              type="Onsite"
              _id="1"
              setId={setId}
              setHidden={setInfoHidden}
            />
            <JobsCard
              img={jsLogo}
              jobTitle="JavaScript Developer"
              salary="$90K - $120K"
              companyName="Laborum"
              location="Tucson, AZ"
              type="Onsite"
              _id="2"
              setId={setId}
              setHidden={setInfoHidden}
            />
            <JobsCard
              img={jsLogo}
              jobTitle="JavaScript Developer"
              salary="$90K - $120K"
              companyName="Laborum"
              location="Tucson, AZ"
              type="Onsite"
              _id="3"
              setId={setId}
              setHidden={setInfoHidden}
            />
          </div>
          <JobInfo id={id} hidden={infoHidden} setHidden={setInfoHidden} />
        </div>
      </div>
    </section>
  );
};

export default AllJobs;
