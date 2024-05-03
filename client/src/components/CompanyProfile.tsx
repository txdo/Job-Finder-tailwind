import { Link } from "react-router-dom";
import { CompanyLocationSvg, HalfStarSvg, SiteLinkSvg, StarSvg } from "./SVGs";
import useCompanyProfile from "../hooks/useCompanyProfile";

const CompanyProfile = (): JSX.Element => {
  const { banner, image, name, field, url, location, description, reasons } =
    useCompanyProfile();

  return (
    <section>
      <div className="my-container">
        <div className="border rounded">
          <div className="relative">
            <img
              src={`http://localhost:3000/${banner}`}
              alt="Company Banner"
              className="w-full aspect-[4/1] object-cover"
            />
            <img
              src={`http://localhost:3000/${image}`}
              alt="Company Logo"
              className="absolute bottom-0 left-12 translate-y-1/2 aspect-square object-cover rounded-full w-24 md:w-32 border-2 border-white"
            />
          </div>
          <div className="m-8 mt-20 space-y-4">
            <div className="flex flex-col sm:items-center gap-4 sm:flex-row sm:justify-between">
              <h1 className="uppercase font-bold text-3xl">{name}</h1>
              <div>
                <button className="bg-teal-500 text-white p-2 gap-2 rounded hover:bg-teal-600 duration-300">
                  Edit Profile
                </button>
              </div>
            </div>
            <p className="text-slate-500">{field}</p>
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <SiteLinkSvg />
                  <Link to={url} className="text-blue-500">
                    {url}
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <CompanyLocationSvg />
                  <p className="text-slate-500">{location}</p>
                </div>
              </div>
              <p className="text-slate-500 mt-2 sm:mt-0">500 followers</p>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-1 gap-4 mt-4 md:grid-cols-[2fr_1fr] md:items-start">
          <div className="border rounded p-8 space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl text-slate-700 font-bold">About us</h2>
              <p className="text-slate-500">{description}</p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl text-slate-700 font-bold">
                Why choosing us
              </h2>
              <div>
                {reasons.map((reason, idx) => (
                  <p className="text-slate-500" key={`${reason}-${idx}`}>
                    - {reason}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="border rounded p-8 space-y-6">
            <h2 className="text-2xl text-slate-700 font-bold">
              Overall rating
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <h1 className="text-3xl text-slate-700 font-bold">4.8/5</h1>
              <div className="flex gap-2">
                <StarSvg />
                <StarSvg />
                <StarSvg />
                <StarSvg />
                <HalfStarSvg />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between gap-4">
                <p className="text-slate-700 text-sm">Compensation</p>
                <div className="w-2/5 h-2 bg-yellow-100 rounded overflow-hidden">
                  <div className="h-full w-[90%] bg-yellow-300"></div>
                </div>
              </div>
              <div className="flex justify-between gap-4">
                <p className="text-slate-700 text-sm">Career Developement</p>
                <div className="w-2/5 h-2 bg-yellow-100 rounded overflow-hidden">
                  <div className="h-full w-[80%] bg-yellow-300"></div>
                </div>
              </div>
              <div className="flex justify-between gap-4">
                <p className="text-slate-700 text-sm">Culture</p>
                <div className="w-2/5 h-2 bg-yellow-100 rounded overflow-hidden">
                  <div className="h-full w-[70%] bg-yellow-300"></div>
                </div>
              </div>
              <div className="flex justify-between gap-4">
                <p className="text-slate-700 text-sm">Workspace</p>
                <div className="w-2/5 h-2 bg-yellow-100 rounded overflow-hidden">
                  <div className="h-full w-[80%] bg-yellow-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;
