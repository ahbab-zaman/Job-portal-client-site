import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const data = useLoaderData();
  const handleChangeStatus = (e, id) => {
    const data = {
        status : e.target.value
    }
    fetch(`http://localhost:5000/job-application/${id}`,{
        method:'PATCH',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })

  }
  console.log(data);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((detail, idx) => (
            <tr detail={detail}>
              <th>{idx + 1}</th>
              <td>{detail.name}</td>
              <td>{detail.job_id}</td>
              <td>
                <select
                  onChange={(e) => handleChangeStatus(e, detail._id)}
                  defaultValue={detail.status || "Change Status"}
                  className="select select-bordered w-full max-w-xs"
                >
                  <option disabled selected>
                    Change Status
                  </option>
                  <option>Pending</option>
                  <option>Selected</option>
                  <option>Rejected</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobDetails;
