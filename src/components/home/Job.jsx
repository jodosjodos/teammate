<<<<<<< HEAD
function Job() {
  return (
    <div className="bg-[#F1511B08] flex flex-col justify-center px-5 gap-5">
      <h1 className="text-black font-bold  text-2xl self-center">Job</h1>
      <div className=" bg-white border rounded-xl flex flex-col px-16 py-24">
        <div className="text-[red]">
=======
import { Link } from "react-router-dom";

function Job() {
  const boxShadowStyle = {
    boxShadow:
      "0px 8.309572219848633px 34.27698516845703px 0px rgba(0, 0, 0, 0.24)",
  };
  return (
    <div className="bg-[#F1511B08] flex flex-col justify-center px-5 gap-16 py-10">
      <h1 className="text-black font-bold  text-2xl self-center">Jobs</h1>
      <div
        className=" bg-white  rounded-xl flex flex-col px-16 py-24  gap-8  relative"
        style={boxShadowStyle}
      >
        <div className="text-[#393939]">
>>>>>>> main
          <p>
            Our company assign teams to companies for any remote work varying
            from software to sales. Each team have a dedicated team manager who
            contact with the companies . We also hire teams on orders. This
            whole process saves companies important time and effort hiring,{" "}
            bringing them together and managing people. Our company structure
            allows us to work and hire people from anywhere in the world which{" "}
            allows us to bring top- tier services to you.
          </p>
        </div>
<<<<<<< HEAD
        <h1>How to hire team</h1>
=======
        <h1 className="text-[#F1511B] font-bold text-xl self-center">
          How to hire team
        </h1>
>>>>>>> main
        <div>
          <p>
            Schedule a consultation call with our experts. Discuss your
            requirements, ask questions, and get personalized guidance. or Fill
<<<<<<< HEAD
            out our
            detailed form to provide specific details about your needs. Our team
            will review your submission promptly.
          </p>
        </div>
        <div>
          <div>
            <button>Fill Form</button>
            <button>Book call</button>
          </div>
          <div>
            <img src="images/imageJob.png" alt="" />
          </div>
=======
            out our detailed form to provide specific details about your needs.
            Our team will review your submission promptly.
          </p>
        </div>
          <div className="flex lg:flex-row md:flex-row sm:flex-col gap-3">
            <Link to='/form' className="bg-[#F1511B] px-10 rounded-lg py-3 text-white font-bold hover:text-[#F1511B] hover:bg-white hover:border-[#F1511B] border-2">
              Fill Form
            </Link>
            <Link to="/booking" className="text-[#F1511B] border-[#F1511B] border-2 px-10 rounded-lg py-3 font-bold hover:bg-[#F1511B] hover:text-white">
              Book call
            </Link>
          </div>
        <div className="self-end absolute bottom-6">
          <img src="images/imageJob.png" alt="" />
>>>>>>> main
        </div>
      </div>
    </div>
  );
}

export default Job;
