import About from "../components/home/About";
import Choose from "../components/home/Choose";
import Intro from "../components/home/Intro";
import Job from "../components/home/Job";
import Services from "../components/home/Services";

const Home = () => {
  return (
    <div className="flex flex-col">
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
      <Services />
      {/*  job */}
      <div> 
        {/* <Job /> */}
      </div>
      {/* Trusted by */}
      <div >
      </div>
    </div>
  );
};

export default Home;
