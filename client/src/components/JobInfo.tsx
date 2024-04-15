import {
  CompanyNameSvg,
  HeartSvg,
  LocationSvg,
  MessageSvg,
  ResponsibilitySvg,
  XSvg,
} from "./SVGs";
import businessman from "../assets/businessman.jpg";
import jsLogo from "../assets/js.png";
import { Link } from "react-router-dom";

const JobInfo = (props: {
  id: string;
  hidden: boolean;
  setHidden: (value: boolean) => void;
}): JSX.Element => {
  return (
    <div
      className={`${
        !props.hidden
          ? "fixed inset-0 bg-gray-900 bg-opacity-50 md:static md:bg-transparent md:opacity-100"
          : ""
      }`}
    >
      <div
        className={`border-4 md:border p-4 rounded bg-white fixed md:static w-[90vw] md:w-auto md:h-auto h-[90vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0 flex flex-col gap-4 overflow-y-auto ${
          props.hidden ? "hidden" : ""
        }`}
      >
        <XSvg setHidden={props.setHidden} />
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <h1 className="text-2xl font-bold text-slate-700">
            JavaScript Developer
          </h1>
          <div className="flex gap-4">
            <button className="bg-teal-100 text-teal-500 py-2 px-4 flex justify-center items-center gap-2 rounded hover:bg-teal-200 duration-300">
              <HeartSvg />
              Save
            </button>
            <button className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 duration-300">
              Apply Now
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-teal-500 font-bold">$90K - $120K</p>
          <p className="text-slate-700">Posted on: 4/14/2024</p>
        </div>
        <div className="flex">
          <div className="flex gap-2 items-center mr-4">
            <CompanyNameSvg />
            <p className="text-slate-500">Laborum</p>
          </div>
          <div className="flex gap-2 items-center pl-4 border-l-2">
            <LocationSvg />
            <p className="text-slate-500">Tucson, AZ</p>
          </div>
        </div>
        <div className="flex gap-4 flex-wrap">
          <p className="text-slate-500 bg-slate-100 px-4 py-2 rounded">
            Mid Level
          </p>
          <p className="text-slate-500 bg-slate-100 px-4 py-2 rounded">
            Onsite
          </p>
        </div>
        <div className="p-8 border rounded">
          <p className="font-bold text-slate-700">Contact recruiter</p>
          <div className="flex flex-col items-center gap-4 mt-8">
            <div className="flex gap-4 items-center">
              <img
                src={businessman}
                alt="Recruite Profile Picture"
                className="w-1/6 aspect-square object-cover rounded-full"
              />
              <div>
                <p className="text-slate-700 font-bold">Romy Murray</p>
                <p className="text-slate-500">Hiring Manager</p>
              </div>
            </div>
          </div>
          <button className="text-teal-500 flex items-center gap-2 mt-8 mx-auto">
            <MessageSvg /> Message
          </button>
        </div>
        <div>
          <p className="font-bold text-slate-700">Job Description</p>
          <p className="text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem lorem
            aliquam sed lacinia quis. Nibh dictumst vulputate odio pellentesque
            sit quis ac, sit ipsum. Sit rhoncus velit in sed massa arcu sit eu.
          </p>
        </div>
        <div>
          <p className="font-bold text-slate-700">Responsibilities</p>
          <div className="flex gap-2">
            <ResponsibilitySvg />
            <p className="text-slate-500">Lorem ipsum dolor sit amet</p>
          </div>
          <div className="flex gap-2">
            <ResponsibilitySvg />
            <p className="text-slate-500">
              Consectetur adipiscing elit. Lorem lorem aliquam sed lacinia quis.
            </p>
          </div>
          <div className="flex gap-2">
            <ResponsibilitySvg />
            <p className="text-slate-500">
              Nibh dictumst vulputate odio pellentesque sit quis ac, sit ipsum.
            </p>
          </div>
        </div>
        <div className="bg-slate-100 p-8 flex flex-col gap-4">
          <div className="flex justify-between">
            <p className="font-bold text-slate-700">About company</p>
            <Link to={`/companies/${props.id}`} className="text-teal-500">
              View company profile
            </Link>
          </div>
          <div className="flex gap-4 items-center">
            <img
              src={jsLogo}
              alt="Company Logo"
              className="w-1/6 aspect-square"
            />
            <p className="uppercase font-bold text-slate-700">
              Laborum Company
            </p>
          </div>
          <p className="text-slate-500">
            Incididunt velit consequat eu esse cillum ut elit ad ut irure dolore
            sunt Lorem tempor consectetur esse culpa dolor. Ut non minim dolor
            irure tempor esse aute culpa eu enim.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobInfo;
