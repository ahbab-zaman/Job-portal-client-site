import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/userLogo.jpg";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const Navbar = () => {
  const { user, userSignOut } = useContext(AuthContext);
  return (
    <div className="">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/allJobs">All Jobs</NavLink>
              </li>
              <li>
                <NavLink to="/addJobs">Add Jobs</NavLink>
              </li>
            </ul>
          </div>
          <img className="w-14 mr-2" src={logo} alt="" />
          <a className="text-2xl font-semibold">JobHunt</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/allJobs">All Jobs</NavLink>
            </li>
            <li>
              <NavLink to="/addJobs">Add Jobs</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-2">
          {user ? (
            <>
              <Link to="/login">
                <button
                  className="btn rounded-lg text-[#fff] font-semibold px-4 py-2 bg-[#3c65f5]"
                  onClick={userSignOut}
                >
                  Signout
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/register">
                <button className="btn rounded-lg text-[#fff] font-semibold px-4 py-2 bg-[#3c65f5]">
                  Register
                </button>
              </Link>
              <Link to="/login">
                <button className="btn rounded-lg text-[#fff] font-semibold px-4 py-2 bg-[#3c65f5]">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
