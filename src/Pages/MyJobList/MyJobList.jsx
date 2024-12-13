import { useLoaderData } from "react-router-dom";

const MyJobList = () => {
  const loadedData = useLoaderData();
  console.log(loadedData);
  return (
    <div className="overflow-x-auto py-12">
      <table className="table">
        {/* head */}
        <thead>
          <tr >
            <th></th>
            <th>Applicant Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {loadedData.map((data, idx) => (
            <tr data={data} className="hover">
              <th>{idx + 1}</th>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.company}</td>
              <td>{data.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyJobList;
