import { CiLocationOn } from "react-icons/ci";
import { BiCategory } from "react-icons/bi";
const JobCard = ({ job }) => {
  const {
    _id,
    category,
    company,
    title,
    company_logo,
    description,
    jobType,
    location,
    requirements,
    salaryRange,
  } = job;
  return (
    <div className="card shadow-xl">
      <div className="flex items-center p-4 gap-4
      ">
        <figure>
          <img
            src={company_logo}
            alt="Shoes"
          />
        </figure>
        <div>
            <h3 className="text-xl font-semibold">{company}</h3>
            <p className="flex items-center gap-2 text-gray-500"><CiLocationOn></CiLocationOn> {location}</p>
        </div>
      </div>
      <div className="card-body p-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <h2 className="card-title text-sm font-bold text-gray-500 flex items-center gap-2"><BiCategory></BiCategory> {jobType}</h2>
        <p>{description}</p>
        <div className="flex flex-wrap gap-2 font-semibold">
            {
                requirements.map(req => <button className="btn">{req}</button>)
            }
        </div>
        <div className="card-actions items-center justify-between mt-4">
          <div className="text-blue-500 font-semibold">${salaryRange.min}-{salaryRange.max} {salaryRange.currency}</div>
          <div className="btn bg-blue-200 text-blue-900">Apply Now</div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;