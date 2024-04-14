import JobsCard from "./JobsCard";
import jsLogo from "../assets/js.png";
import { Link } from "react-router-dom";

const LatestJobs = (): JSX.Element => {
  return (
    <section>
      <div className="my-container flex flex-col gap-8 justify-center items-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-teal-500">Latest Jobs</h1>
          <p className="text-slate-700">
            Exercitation dolore reprehenderit fugi
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <JobsCard
            img={jsLogo}
            jobTitle="JavaScript Developer"
            salary="$90K - $120K"
            companyName="Laborum"
            location="Tucson, AZ"
            type="Onsite"
            _id="1"
          />
          <JobsCard
            img={jsLogo}
            jobTitle="JavaScript Developer"
            salary="$90K - $120K"
            companyName="Laborum"
            location="Tucson, AZ"
            type="Onsite"
            _id="1"
          />
          <JobsCard
            img={jsLogo}
            jobTitle="JavaScript Developer"
            salary="$90K - $120K"
            companyName="Laborum"
            location="Tucson, AZ"
            type="Onsite"
            _id="1"
          />
          <JobsCard
            img={jsLogo}
            jobTitle="JavaScript Developer"
            salary="$90K - $120K"
            companyName="Laborum"
            location="Tucson, AZ"
            type="Onsite"
            _id="1"
          />
          <JobsCard
            img={jsLogo}
            jobTitle="JavaScript Developer"
            salary="$90K - $120K"
            companyName="Laborum"
            location="Tucson, AZ"
            type="Onsite"
            _id="1"
          />
          <JobsCard
            img={jsLogo}
            jobTitle="JavaScript Developer"
            salary="$90K - $120K"
            companyName="Laborum"
            location="Tucson, AZ"
            type="Onsite"
            _id="1"
          />
        </div>
        <Link
          to="/all-jobs"
          className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 duration-300"
        >
          See more
        </Link>
      </div>
    </section>
  );
};

export default LatestJobs;
