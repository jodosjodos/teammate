import Carousel from "../components/home/Carousel";
import Footer from "../components/home/Footer";
import Job from "../components/home/Job";
import Reality from "../components/home/Reality";
import Testimonies from "../components/home/Testimonies";
import Trusted from "../components/home/Trusted";

const Home = () => {
  return (
    <div className="flex flex-col gap-5">
      {/*  job */}
      <div>
        <Job />
      </div>
      {/* Trusted by */}
      <div>
        <Trusted />
      </div>
      {/* testimonies */}
      <div>
        <Testimonies/>
      </div>
      {/* reality */}
      <div>
        <Reality/>
      </div>
      {/* footer */}
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
