import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BasicDateCalendar from "../components/BasicDateCalendar";

function Booking() {
  const shadowStyle = {
    boxShadow:
      "5.3px 0px 5.3px -5.3px #00000024, -5.3px 0px 5.3px -5.3px #00000024",
  };
  return (
    <div className="flex flex-col gap-5 ">
      <h1 className="text-xl font-bold self-center">Book a call</h1>
      <div
        style={shadowStyle}
        className="flex lg:flex-row md:flex-row sm:flex-col  self-center  justify-center lg: gap-[30rem] md:gap-[30rem] sm:gap-16 lg:px-8 md:px-8 sm:px-0"
      >
        <div className="flex flex-col gap-5 flex-1 max-h-screen lg:border-r-2 border-[#ccc] md:border-r-2  sm:border-b-[1px] sm:py-3 md:py-0 lg:py-0 sm:px-8 md:px-6 lg:px-6">
          <div>
            <img src="images/logoSmall.png" alt="logo" />
          </div>
          <div>
            <h2 className="font-bold text-[#909ACF] text-xl">Elite Teams</h2>
            <h1 className="font-bold text-2xl">30 Minute Meeting</h1>
          </div>
          <div className="font-bold">
            <AccessTimeIcon /> 30 min
          </div>
        </div>
        <div className="flex-1 sm:px-8 md:px-0 lg:px-0">
          {/* calendar */}
          <h1 className="font-bold text-xl">Select Date & Time</h1>
          <div>
            <BasicDateCalendar />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold">Timezone</h1>
            <p>&#x2641; Africa/Cairo(7:05)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
