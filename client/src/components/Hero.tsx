import { Link } from "react-router-dom";
import jsLogo from "../assets/js.png";

const Hero = (): JSX.Element => {
  return (
    <section className="bg-teal-50">
      <div className="my-container">
        <div className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold">
              <span className="text-teal-500">16,780 Jobs</span> For You
            </h1>
            <p className="text-slate-700">
              Non enim eu excepteur cupidatat consectetur do ea est
              reprehenderit incididunt irure veniam cupidatat est non amet. Enim
              duis aute tempor laboris ipsum dolore non.
            </p>
            <Link
              to="/all-jobs"
              className="bg-teal-500 self-start text-white py-2 px-8 rounded shadow-md shadow-teal-100 hover:bg-teal-600 duration-300"
            >
              Explore now
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-teal-500 w-full h-5/6 rounded-full relative shadow-2xl shadow-teal-200">
              <div className="flex justify-center items-center w-7/12 h-2/3 bg-white gap-4 absolute left-4 top-1/2 rounded shadow">
                <img
                  src={jsLogo}
                  alt="JavaScript Logo"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="text-slate-700">JavaScript Developer</p>
                  <p className="text-teal-500 font-bold">$90K - $120K</p>
                </div>
              </div>
              <div className="flex justify-center items-center w-7/12 h-2/3 bg-white gap-4 absolute right-4 top-1 rounded shadow">
                <img
                  src={jsLogo}
                  alt="JavaScript Logo"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="text-slate-700">Java Developer</p>
                  <p className="text-teal-500 font-bold">$120K - $130K</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
