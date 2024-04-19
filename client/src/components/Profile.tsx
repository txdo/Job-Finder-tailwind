import { Link } from "react-router-dom";
import businessman from "../assets/businessman.jpg";
import jsLogo from "../assets/js.png";
import {
  BookmarkSvg,
  CalendarSvg,
  CompanyNameSvg,
  LayersSvg,
  ResponsibilitySvg,
} from "./SVGs";

const Profile = (): JSX.Element => {
  return (
    <section>
      <div className="my-container">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex flex-col gap-4 lg:w-1/3">
            <div className="border rounded overflow-hidden">
              <div className="bg-teal-50 relative h-24">
                <div className="bg-teal-100 absolute w-16 h-16 rounded-full -top-6 -left-4"></div>
                <img
                  src={businessman}
                  alt="Profile Picture"
                  className="w-28 aspect-square min-w-12 object-cover rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3"
                />
              </div>
              <div className="mt-4 flex flex-col items-center p-8">
                <h3 className="font-bold text-teal-500 text-xl">John Doe</h3>
                <p className="text-slate-700">UI/UX Designer</p>
                <p className="text-slate-500 mt-4 w-[70%] text-center">
                  Incididunt dolore ut aliquip culpa mollit dolore sint esse non
                  c
                </p>
                <div className="flex flex-wrap gap-4 mt-4 justify-center">
                  <p className="bg-slate-100 text-slate-500 rounded p-2">
                    UX Research
                  </p>
                  <p className="bg-slate-100 text-slate-500 rounded p-2">
                    UI Design
                  </p>
                  <p className="bg-slate-100 text-slate-500 rounded p-2">
                    Web Design
                  </p>
                </div>
                <Link
                  to="/edit-profile"
                  className="mt-8 p-3 w-full inline-block text-center bg-teal-500 text-white rounded hover:bg-teal-600 duration-300"
                >
                  Edit Profile
                </Link>
              </div>
            </div>
            <div className="bg-orange-50 rounded p-8 flex flex-col gap-4 items-center">
              <h3 className="text-xl font-bold text-orange-400">
                Looking for a new job?
              </h3>
              <p className="text-slate-700">
                Reprehenderit nulla proident ullamco velit excepteur id ipsum
                fugiat magna
              </p>
              <Link
                to="/all-jobs"
                className="p-3 mt-4 w-full text-center bg-orange-400 text-white rounded hover:bg-orange-500 duration-300"
              >
                Start Browsing
              </Link>
            </div>
          </div>
          <div className="flex flex-col lg:w-2/3 gap-4">
            <div className="border rounded p-8 space-y-4">
              <h3 className="text-xl font-bold text-slate-700">About</h3>
              <p className="text-slate-500">
                Nulla Lorem reprehenderit excepteur nisi occaecat et officia
                elit officia fugiat tempor eiusmod pariatur laboris ex eu. Magna
                sunt quis culpa sit esse ullamco est aliqua ipsum pariatur in ea
                veniam ea mollit elit deserunt duis .Exercitation labore
                incididunt consequat esse quis duis cupidatat elit aliquip.
              </p>
            </div>
            <div className="border rounded p-8 space-y-12">
              <h3 className="text-xl font-bold text-slate-700">
                Working Experience
              </h3>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col sm:flex-row gap-8">
                  <img
                    src={jsLogo}
                    alt="Company Logo"
                    className="w-16 h-16 object-cover rounded-full"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-slate-700">
                      Senior UX UI Designer
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:gap-4">
                      <div className="flex gap-2 items-center">
                        <CompanyNameSvg />
                        <p className="text-slate-500">Bytedance</p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <CalendarSvg />
                        <p className="text-slate-500">
                          Jan 2021 - Present (1yr 7mos)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between gap-4">
                  <p className="text-slate-500 w-4/5">
                    Lorem ipsum dolor sit amet, consectetr elit. Diam,
                    pellenesque dignissim eu vivamus donec erat. Lorem ipsum
                    dolor sit amet, consectetr elit.
                  </p>
                  <Link
                    to="/work-experience"
                    className="text-teal-500 text-center"
                  >
                    See more
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col sm:flex-row gap-8">
                  <img
                    src={jsLogo}
                    alt="Company Logo"
                    className="w-16 h-16 object-cover rounded-full"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-slate-700">
                      Senior UX UI Designer
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:gap-4">
                      <div className="flex gap-2 items-center">
                        <CompanyNameSvg />
                        <p className="text-slate-500">Bytedance</p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <CalendarSvg />
                        <p className="text-slate-500">
                          Jan 2021 - Present (1yr 7mos)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between gap-4">
                  <p className="text-slate-500 w-4/5">
                    Lorem ipsum dolor sit amet, consectetr elit. Diam,
                    pellenesque dignissim eu vivamus donec erat. Lorem ipsum
                    dolor sit amet, consectetr elit.
                  </p>
                  <Link
                    to="/work-experience"
                    className="text-teal-500 text-center"
                  >
                    See more
                  </Link>
                </div>
              </div>
            </div>
            <div className="border rounded p-8 flex flex-col gap-6">
              <h3 className="text-xl font-bold text-slate-700">Skill</h3>
              <div className="flex gap-4 items-center">
                <ResponsibilitySvg />
                <p className="text-slate-700">Design Software</p>
                <p className="bg-purple-100 flex items-center gap-2 rounded-full py-1 px-3 text-purple-500">
                  <BookmarkSvg />5 Years of Exp
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <ResponsibilitySvg />
                <p className="text-slate-700">Research</p>
                <p className="bg-purple-100 flex items-center gap-2 rounded-full py-1 px-3 text-purple-500">
                  <BookmarkSvg />3 Years of Exp
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <ResponsibilitySvg />
                <p className="text-slate-700">User Experience</p>
                <p className="bg-purple-100 flex items-center gap-2 rounded-full py-1 px-3 text-purple-500">
                  <BookmarkSvg />3 Years of Exp
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <ResponsibilitySvg />
                <p className="text-slate-700">User Interface Design</p>
                <p className="bg-purple-100 flex items-center gap-2 rounded-full py-1 px-3 text-purple-500">
                  <BookmarkSvg />5 Years of Exp
                </p>
              </div>
            </div>
            <div className="border rounded space-y-12 p-8">
              <h3 className="text-xl font-bold text-slate-700">Education</h3>
              <div className="flex gap-8">
                <img
                  src={jsLogo}
                  alt="School Logo"
                  className="w-16 h-16 object-cover rounded-full"
                />
                <div className="space-y-2">
                  <p className="font-bold text-slate-700">
                    Arena Multimedia, New York
                  </p>
                  <div className="flex gap-2 items-center">
                    <LayersSvg />
                    <p className="text-slate-500">
                      Advanced Diploma In Multimedia
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <CalendarSvg />
                    <p className="text-slate-500">2014 - 2017</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
