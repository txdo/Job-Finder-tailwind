import { Link } from "react-router-dom";
import businessman from "../assets/businessman.jpg";
import businesswoman from "../assets/businesswoman.avif";

const CreateProfileCard = (): JSX.Element => {
  return (
    <section>
      <div className="my-container">
        <div className="bg-teal-500 rounded">
          <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2">
            <div className="flex flex-col gap-8 px-12 py-20">
              <div>
                <h1 className="text-3xl text-white">Build a great profile</h1>
                <p className="text-slate-200 mt-4">
                  Do consectetur proident proident id eiusmod deserunt consequat
                  pariatur ad ex velit do Lorem reprehenderit.
                </p>
              </div>
              <Link
                to="/register"
                className="bg-white text-teal-500 py-2 px-4 rounded self-start hover:bg-slate-100 duration-300"
              >
                Create
              </Link>
            </div>
            <div className="flex justify-center items-center">
              <div className="h-full w-1/2 bg-teal-300 rounded-t-full relative">
                <img
                  src={businessman}
                  alt="Businessman"
                  className="aspect-square object-cover w-2/3 rounded-full"
                />
                <img
                  src={businesswoman}
                  alt="Businesswoman"
                  className="aspect-square object-cover w-1/3 rounded-full absolute right-0 top-1/2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateProfileCard;
