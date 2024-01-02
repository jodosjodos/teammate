import { Link } from "react-router-dom";

function Reality() {
  const boxShadowStyle = {
    boxShadow:
      "0px 8.309572219848633px 34.27698516845703px 0px rgba(0, 0, 0, 0.24)",
  };
  return (
    <div className="lg:px-10 md:px-2 sm:px-2">:
      <div
        style={boxShadowStyle}
        className=" rounded-xl flex flex-col gap-5 p-12"
      >
        <div>
          <h1 className="text-xl font-bold">
            <span className="text-[#0064E1]">Transform</span> your vision into
            reality
          </h1>
        </div>
        <div>
          <p>
            Our company assign teams to companies for any remote work varying
            from software to sales. Each team have a dedicated team manager who
            contact with the company. We also hire teams on orders. This whole
            process saves companies important time and effort hiring, bringing
            them together and managing people. Our company structure allows us
            to work and hire people from anywhere in the world which allows us
            to bring top- tier services to you.
          </p>
        </div>
        <Link to='/booking' className="bg-[#0064E1]  rounded-lg py-3  border-2 border-[#0064E1 text-white font-bold hover:text-[#0064E1] hover:bg-white hover:border-[#0064E1] hover:border-2 lg:w-[8%] md:w-[15%] sm:w-[70%] flex items-center justify-center">
          Book Now
        </Link>
      </div>
    </div>
  );
}

export default Reality;
