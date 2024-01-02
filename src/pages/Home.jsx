import Scrollspy from 'react-scrollspy';
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
    <div className="flex flex-col gap-5 transition duration-500">
      <Scrollspy
        items={['intro', 'about', 'choose', 'services', 'job']}
        currentClassName="your-active-class"
      >
        {/* Intro */}
        <div id="intro">
          <Intro />
        </div>
        {/* About */}
        <div id="about">
          <About />
        </div>
        {/* Choose */}
        <div id="choose">
          <Choose />
        </div>
        {/* Services */}
        <div id="services">
          <Services />
        </div>
        {/* Job */}
        <div id="job">
          <Job />
        </div>
      </Scrollspy>

      {/* Other sections */}
      <Trusted />
      <Testimonies />
      <Reality />
      <Footer />
    </div>
  );
};

export default Home;
