import { useParams } from "react-router-dom";
import useAuth from "../../SharedFiles/Hooks/Hooks";

const ApplyJob = () => {
  const { id } = useParams();
  console.log(id);
  const { user } = useAuth();
  const handleApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const portfolio = form.portfolio.value;
    const github = form.github.value;
    const applyInfo = {
      job_id: id,
      email: user.email,
      name,
      portfolio,
      github,
    };
    fetch("http://localhost:5000/job-application", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(applyInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="hero">
      <div className="hero-content w-full py-6">
        <div className="card w-3/4 mx-auto shadow-2xl">
          <form onSubmit={handleApply} className="card-body w-3/4 mx-auto">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Portfolio URL</span>
              </label>
              <input
                type="url"
                name="portfolio"
                placeholder="Enter your portfolio URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Github URL</span>
              </label>
              <input
                type="url"
                name="github"
                placeholder="Enter your Github URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Apply Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyJob;
