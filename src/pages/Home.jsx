import Footer from "../components/home/Footer";
import Job from "../components/home/Job";
import Reality from "../components/home/Reality";
import Testimonies from "../components/home/Testimonies";
import Trusted from "../components/home/Trusted";
import Services from "../components/home/Services";
import Intro from "../components/home/Intro";
import About from "../components/home/About";
import Choose from "../components/home/Choose";

const Home = () => {
  return (
    <div className="flex flex-col gap-5">
      {/* Intro */}
      <div>
        <Intro />
      </div>
      {/* About */}
      <div>
        <About />
      </div>
      {/* Choose */}
      <div>
        <Choose />
      </div>
      {/* Services */}
      <div>
        <Services />
      </div>

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
        <Testimonies />
      </div>
      {/* reality */}
      <div>
        <Reality />
      </div>
      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
