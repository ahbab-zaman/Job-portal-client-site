import { useEffect, useState } from "react";
import JobCard from "../JobCard/JobCard";

const Jobs = () => {
    const [jobs, setJobs] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/allJobs")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setJobs(data);
      });
  }, []);

  return (
    <div>
      <div className="text-center mb-6 space-y-2">
        <h3 className="text-4xl font-semibold">Find All Jobs</h3>
        <p className="text-gray-500">
          Find the job that’s perfect for you. about 800+ new jobs everyday
        </p>
      </div>

      <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 py-4">
        {
            jobs.map(job => <JobCard job={job} key={job._id}></JobCard>)
        }
      </div>
    </div>
  );
};

export default Jobs;
