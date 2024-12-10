import Lottie from "lottie-react";
import registerAnimation from "./register.json"
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const Register = () => {
    const {createUser} = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const userInfo = {name, email, photo, password}
        console.log(userInfo)

        createUser(email, password)
        .then(result => {
            console.log(result.user)
            form.reset()
        })
        .catch(error => {
            console.log(error)
        })

    }

  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left flex-1">
          <Lottie className="w-3/4 mx-auto" animationData={registerAnimation} loop={true}></Lottie>
        </div>
        <div className="card w-3/4 mx-auto bg-base-100 shrink-0 shadow-2xl flex-1">
        <h1 className="text-5xl font-semibold text-center py-2
        ">Register now!</h1>
          <form onSubmit={handleRegister} className="card-body">
          <div className="form-control ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
          <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
