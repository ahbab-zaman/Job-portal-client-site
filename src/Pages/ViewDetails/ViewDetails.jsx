import { Link, useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const {
    _id,
    category,
    company,
    title,
    company_logo,
    description,
    jobType,
    location,
    applicationDeadline,
    requirements,
    salaryRange,
  } = data;
  return (
    <div className="py-6 space-y-3">
      <div>
        <div className="card flex-row items-center justify-between gap-3 w-3/4 mx-auto rounded-lg p-6 border">
          <div className="flex item-center gap-2">
            <div>
              <img className="w-16" src={company_logo} alt="" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Job Title</h2>
              <h4 className="text-xl font-semibold">{title}</h4>
            </div>
          </div>
          <div>
            <div>
              <Link to={`/applyJob/${_id}`}>
                <button className="btn bg-blue-200 text-blue-900">
                  Apply Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="card w-3/4 mx-auto rounded-lg p-6 border">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <p className="text-lg font-semibold">Industry</p>
            <p>{company}</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Job level</p>
            <p>{category}</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Salary</p>
            <p>
              ${salaryRange.min} - ${salaryRange.max}
            </p>
          </div>
          <div>
            <p className="text-lg font-semibold">Requirements</p>
            <p className="flex gap-2">
              {requirements.map((requirement) => (
                <p>{requirement},</p>
              ))}
            </p>
          </div>
          <div>
            <p className="text-lg font-semibold">Job type</p>
            <p>{jobType}</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Deadline</p>
            <p>{applicationDeadline}</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Description</p>
            <p>{description}</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Location</p>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
