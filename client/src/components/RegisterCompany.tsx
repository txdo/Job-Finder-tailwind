import { useState } from "react";
import useRegisterCompany from "../hooks/useRegisterCompany";

const RegisterCompany = (): JSX.Element => {
  const [name, setName] = useState("");
  const [field, setField] = useState("Finance");
  const [location, setLocation] = useState("Bulgaria");
  const [description, setDescription] = useState("");
  const [reason, setReason] = useState("");
  const [reasons, setReasons] = useState<string[]>([]);
  const [url, setUrl] = useState("");
  const [banner, setBanner] = useState<File | null>();
  const [image, setImage] = useState<File | null>();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [addingReason, setAddingReason] = useState(false);

  const { register } = useRegisterCompany();

  return (
    <section className="h-full flex items-center justify-center">
      <div className="h-[70vh] overflow-y-auto lg:w-[60%] w-[90%] border rounded shadow gap-4 flex flex-col items-center p-8 md:px-16">
        <h1 className="font-bold text-3xl text-slate-700">
          Register your company ✅
        </h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Company Name"
          className="w-[100%] bg-slate-100 p-2 rounded border-2 border-teal-500 transition-all duration-300 ring-0 focus:ring-2 focus:ring-teal-200 focus:outline-none"
        />
        <select
          value={field}
          onChange={(e) => setField(e.target.value)}
          className="w-[100%] bg-slate-100 p-2 rounded border-2 border-teal-500 transition-all duration-300 ring-0 focus:ring-2 focus:ring-teal-200 focus:outline-none"
        >
          <option value="Finance">Finance</option>
          <option value="Education">Education</option>
          <option value="IT">IT</option>
          <option value="Marketing">Marketing</option>
        </select>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-[100%] bg-slate-100 p-2 rounded border-2 border-teal-500 transition-all duration-300 ring-0 focus:ring-2 focus:ring-teal-200 focus:outline-none"
        >
          <option value="Bulgaria">Bulgaria</option>
          <option value="USA">USA</option>
          <option value="Germany">Germany</option>
          <option value="UK">UK</option>
        </select>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Company Description"
          className="w-[100%] min-h-[100px] bg-slate-100 p-2 rounded border-2 border-teal-500 transition-all duration-300 ring-0 focus:ring-2 focus:ring-teal-200 focus:outline-none"
        />
        <div className="flex justify-between w-full items-center">
          <p className="text-slate-700">Reasons for joining:</p>
          <button
            onClick={() => setAddingReason(true)}
            className="bg-teal-500 py-2 px-4 hover:bg-teal-600 duration-300 text-white rounded"
          >
            Add Reason
          </button>
        </div>
        <div className="space-y-2 w-[100%]">
          {reasons.map((reason, idx) => (
            <div className="flex justify-between gap-4">
              <p
                className="text-slate-700 py-1 px-4 bg-slate-100 rounded"
                key={`${reason}-${idx}`}
              >
                {reason}
              </p>
              <button
                onClick={() =>
                  setReasons(reasons.filter((_, rIdx) => rIdx !== idx))
                }
                className="text-teal-500"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        {addingReason && (
          <div className="flex justify-between w-full items-center">
            <input
              type="text"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Reason"
              className="w-[100%] md:w-[50%] bg-slate-100 p-2 rounded border-2 border-teal-500 transition-all duration-300 ring-0 focus:ring-2 focus:ring-teal-200 focus:outline-none"
            />
            <button
              onClick={() => {
                setReasons([...reasons, reason]);
                setReason("");
                setAddingReason(false);
              }}
              className="bg-teal-500 py-2 px-4 hover:bg-teal-600 duration-300 text-white rounded"
            >
              Add
            </button>
          </div>
        )}
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Website URL"
          className="w-[100%] bg-slate-100 p-2 rounded border-2 border-teal-500 transition-all duration-300 ring-0 focus:ring-2 focus:ring-teal-200 focus:outline-none"
        />
        {!banner && (
          <label
            htmlFor="banner"
            className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 duration-300 cursor-pointer"
          >
            Upload Banner
          </label>
        )}
        <input
          type="file"
          accept="image/*"
          hidden
          id="banner"
          onChange={(e) => {
            if (!e.target.files) return;
            setBanner(e.target.files[0]);
            e.target.value = "";
          }}
        />
        {banner && (
          <img
            src={URL.createObjectURL(banner)}
            alt="Banner Preview"
            className="w-[100%] aspect-[4/1] object-cover"
          />
        )}
        {banner && (
          <button
            onClick={() => {
              setBanner(null);
            }}
            className="bg-teal-500 text-white px-4 py-2 self-end rounded hover:bg-teal-600 duration-300"
          >
            Remove Banner
          </button>
        )}
        {!image && (
          <label
            htmlFor="image"
            className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 duration-300 cursor-pointer"
          >
            Upload Image
          </label>
        )}
        <input
          type="file"
          accept="image/*"
          hidden
          id="image"
          onChange={(e) => {
            if (!e.target.files) return;
            setImage(e.target.files[0]);
            e.target.value = "";
          }}
        />
        {image && (
          <img
            src={URL.createObjectURL(image)}
            alt="Image Preview"
            className="w-[50%] aspect-square object-cover"
          />
        )}
        {image && (
          <button
            onClick={() => {
              setImage(null);
            }}
            className="bg-teal-500 text-white px-4 py-2 self-end rounded hover:bg-teal-600 duration-300"
          >
            Remove Image
          </button>
        )}
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-[100%] bg-slate-100 p-2 rounded border-2 border-teal-500 transition-all duration-300 ring-0 focus:ring-2 focus:ring-teal-200 focus:outline-none"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-[100%] bg-slate-100 p-2 rounded border-2 border-teal-500 transition-all duration-300 ring-0 focus:ring-2 focus:ring-teal-200 focus:outline-none"
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          className="w-[100%] bg-slate-100 p-2 rounded border-2 border-teal-500 transition-all duration-300 ring-0 focus:ring-2 focus:ring-teal-200 focus:outline-none"
        />
        <button
          onClick={() =>
            register(
              name,
              field,
              location,
              description,
              reasons,
              url,
              banner,
              image,
              username,
              password,
              confirmPassword
            )
          }
          className="bg-teal-500 text-white px-4 py-2 mt-8 rounded hover:bg-teal-600 duration-300"
        >
          Register
        </button>
      </div>
    </section>
  );
};

export default RegisterCompany;
