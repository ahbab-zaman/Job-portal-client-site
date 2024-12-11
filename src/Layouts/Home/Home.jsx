import Banner from "../../Components/Banner/Banner";
import JobCategory from "../../Components/JobCategory/JobCategory";
import Jobs from "../../Components/Jobs/Jobs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <Jobs></Jobs>
        </div>
    );
};

export default Home;