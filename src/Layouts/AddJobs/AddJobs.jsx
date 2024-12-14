import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddJobs = () => {
    const {user} = useContext(AuthContext)
  const handleAddJobs = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    // console.log(data);
    const { min, max, currency, ...newJob } = data;
    // console.log(newJob);
    newJob.salaryRange = { min, max, currency };
    newJob.experience = newJob.experience.split("\n");
    console.log(newJob);

    fetch(`http://localhost:5000/addJobs`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="hero">
      <div className="hero-content w-3/4">
        <div className="card shadow-2xl w-full">
          <form onSubmit={handleAddJobs} className="card-body">
          <div className="form-control">
              <label className="label">
                <span className="label-text">HR Email</span>
              </label>
              <input
                type="text"
                value={user?.email}
                name="hr_email"
                placeholder="HR Email"
                className="input input-bordered"
                required
              />
            </div>
          <div className="form-control">
              <label className="label">
                <span className="label-text">HR Name</span>
              </label>
              <input
                type="text"
                name="hr_name"
                value={user?.name}
                placeholder="HR Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Company Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Company Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Company Logo</span>
              </label>
              <input
                type="url"
                name="logo"
                placeholder="Company Logo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                name="location"
                placeholder="Company Location"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Job Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Job Title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Job Type</span>
              </label>
              <input
                type="text"
                name="type"
                placeholder="Job Type"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Job Description"
                className="input input-bordered"
                required
              />
            </div>
            <label className="label">
              <span className="label-text">Experience</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Bio"
              name="experience"
            ></textarea>
            <p className="text-lg font-bold">Salary Range</p>
            <div className="grid grid-cols-3 gap-4 justify-between items-center">
              <div>
                <label className="label">
                  <span className="label-text">Max</span>
                </label>
                <input
                  type="number"
                  name="max"
                  placeholder="Max Salary"
                  className="input input-bordered"
                  required
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Min</span>
                </label>
                <input
                  type="number"
                  name="min"
                  placeholder="Min Salary"
                  className="input input-bordered"
                  required
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Currency</span>
                </label>
                <select
                  name="currency"
                  className="select select-bordered w-full max-w-xs"
                >
                  <option disabled selected>
                    Select Currency
                  </option>
                  <option>USD</option>
                  <option>EURO</option>
                  <option>BDT</option>
                  <option>RS</option>
                </select>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Add Job</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJobs;
