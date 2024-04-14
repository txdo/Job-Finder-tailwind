import { useNavigate } from "react-router-dom";

const JobsCard = (props: {
  img: string;
  jobTitle: string;
  salary: string;
  companyName: string;
  location: string;
  type: string;
  _id: string;
  selected?: boolean;
  setId?: (id: string) => void;
  setHidden?: (value: boolean) => void;
}): JSX.Element => {
  const navigate = useNavigate();

  const clickHandler = () => {
    if (!props.setId || !props.setHidden) navigate(`/all-jobs/${props._id}`);
    else {
      props.setId(props._id);
      props.setHidden(false);
    }
  };

  return (
    <div
      className={`border border-slate-200 rounded p-4 flex flex-col gap-4 cursor-pointer ${
        props.selected ? "selected" : ""
      }`}
      onClick={() => clickHandler()}
    >
      <div className="flex gap-4 items-center">
        <img
          src={props.img}
          alt="Company Logo"
          className="w-1/6 aspect-square"
        />
        <div>
          <p className="font-bold">{props.jobTitle}</p>
          <p>{props.salary}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
            className="fill-slate-500"
          >
            <path d="M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z"></path>
          </svg>
          <p className="text-slate-500">{props.companyName}</p>
        </div>
        <div className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
            className="fill-slate-500"
          >
            <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>
          </svg>
          <p className="text-slate-500">{props.location}</p>
        </div>
        <div className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
            className="fill-slate-500"
          >
            <path d="M242.63,96.44l-184-64A8,8,0,0,0,48,40V216a8,8,0,0,0,16,0V173.69l178.63-62.13a8,8,0,0,0,0-15.12ZM64,156.75V51.25L215.65,104Z"></path>
          </svg>
          <p className="text-slate-500">{props.type}</p>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
