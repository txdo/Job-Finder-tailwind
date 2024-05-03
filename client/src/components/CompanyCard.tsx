const CompanyCard = (props: {
  name: string;
  location: string;
  about: string;
  image: string;
}): JSX.Element => {
  return (
    <div className="border rounded p-8 lg:w-[70%]">
      <div className="flex justify-between">
        <div className="flex gap-8 items-center">
          <img
            src={props.image}
            alt="Candidate Profile Picture"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <h3 className="text-xl font-bold text-slate-700">{props.name}</h3>
            <p className="text-slate-700">{props.location}</p>
          </div>
        </div>
        <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 duration-300 self-start">
          View Profile
        </button>
      </div>
      <p className="text-slate-500 mt-4">{props.about}</p>
    </div>
  );
};

export default CompanyCard;
