import banner1 from "../../assets/group.jpg";
import banner2 from "../../assets/team.jpg";
import { motion } from "framer-motion";
const Banner = () => {
  return (
    <div>
      <div className="hero h-96 bg-[#F2F6FD]">
        <div className="hero-content flex-col lg:flex-row-reverse w-11/12 mx-auto py-4">
          <div className="flex-1">
            <motion.img
              animate={{ y: [80, 120, 50] }}
              transition={{ duration: 10, repeat: Infinity }}
              src={banner1}
              className="max-w-sm w-64 rounded-tl-3xl rounded-br-3xl shadow-2xl border-blue-600 border-l-[6px] border-b-[6px]"
            />
            <motion.img
              animate={{ x: [100, 200, 100] }}
              transition={{ duration: 10, repeat: Infinity }}
              src={banner2}
              className="max-w-sm w-64 rounded-tl-3xl rounded-br-3xl shadow-2xl border-blue-600 border-l-[6px] border-b-[6px]"
            />
          </div>
          <div className="flex-1">
            <motion.h1 animate={{x:[-50, 30, -50]}} transition={{ duration: 5, repeat: Infinity }} className="text-5xl font-bold">It's Time to JOB_HUNT</motion.h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
