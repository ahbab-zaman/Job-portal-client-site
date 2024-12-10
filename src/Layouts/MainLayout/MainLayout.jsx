import { Outlet } from "react-router-dom";
import Navbar from "../../SharedFiles/Navbar/Navbar";
import Footer from "../../SharedFiles/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
     <div className="bg-[#F2F6FD]">
     <div className="w-11/12 mx-auto ">
        <Navbar></Navbar>
      </div>
     </div>
      <div className="min-h-[calc(100vh-288px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
