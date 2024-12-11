import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

const JobCategory = () => {
  const [jobCategory, setJobCategory] = useState([]);

  useEffect(() => {
    fetch("./category.json")
      .then((res) => res.json())
      .then((data) => {
        setJobCategory(data);
      });
  }, []);
  return (
    <div className=" px-6 py-6">
      <div className="text-center mb-6 space-y-2">
        <h3 className="text-4xl font-semibold">Browse By Category</h3>
        <p className="text-gray-500">
          Find the job that’s perfect for you. about 800+ new jobs everyday
        </p>
      </div>
      <div className="w-full mx-auto">
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <div className="mb-6 w-11/12 mx-auto">
            {jobCategory.map((job) => (
              <SwiperSlide className="mb-6" key={job.id}>
                <div className="p-3 w-[200px] text-start h-[100px] border rounded-xl"><h2 className="text-lg font-bold">{job.category_name}</h2>
                <p className="font-semibold">Job Available: {job.available_job}</p>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default JobCategory;
