// Booking.jsx
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BasicDateCalendar from "../components/BasicDateCalendar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Booking() {
  const shadowStyle = {
    boxShadow:
      "5.3px 0px 5.3px -5.3px #00000024, -5.3px 0px 5.3px -5.3px #00000024",
  };

  const [selectedDate, setSelectedDate] = useState(null);
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);

  useEffect(() => {
    if (selectedDate) {
      generateRandomTimeSlots();
    }
  }, [selectedDate]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const generateRandomTimeSlots = () => {
    const newTimeSlots = [];
    for (let index = 0; index < 6; index++) {
      const randomHour = Math.floor(Math.random() * 12) + 7;
      const formattedHour =
        randomHour < 10 ? `0${randomHour}` : `${randomHour}`;
      newTimeSlots.push(formattedHour);
    }
    setAvailableTimeSlots(newTimeSlots);
  };

  return (
    <div className="flex flex-col gap-5  pt-20">
      <h1 className="text-3xl font-bold self-center">Book a call</h1>
      <div
        style={shadowStyle}
        className="flex lg:flex-row md:flex-col sm:flex-col self-center justify-center lg:gap-[20rem] md:gap-[30rem] sm:gap-16 lg:px-16 md:px-16 sm:px-8"
      >
        <div className=" flex flex-col gap-5 flex-1 max-h-screen lg:border-r-2 border-[#ccc] md:border-r-2 sm:border-b-[1px] sm:py-6 md:py-0 lg:py-0 sm:px-8 md:px-8 lg:px-8">
          <div>
            <img src="images/logoSmall.png" alt="logo" className="w-32 h-32" />
          </div>
          <div>
            <h2 className="font-bold text-[#909ACF] text-3xl">Elite Teams</h2>
            <h1 className="font-bold text-4xl">30 Minute Meeting</h1>
          </div>
          <div className="font-bold text-2xl">
            <AccessTimeIcon /> 30 min
          </div>
        </div>
        <div className="flex-1 sm:px-8 md:px-0 lg:px-0">
          {/* calendar */}
          <h1 className="font-bold text-3xl">Select Date & Time</h1>
          <div className="w-full h-[500px]">
            <BasicDateCalendar onDateSelect={handleDateSelect} />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-2xl">Timezone</h1>
            <p>&#x2641; Africa/Cairo (7:05)</p>
          </div>
        </div>
        {selectedDate && (
          <div className="flex-1 flex flex-col gap-4 sm:p-5 md:p-0 lg:p-0">
            <h1 className="font-bold text-2xl text-[#0064E1]">Available Time Slots</h1>
            <div className="flex flex-col gap-4">
              {availableTimeSlots.map((formattedHour, index) => (
                <Link to="/redirect"
                  className="py-2 flex items-center justify-center bg-white border-2 border-[#0064E1] rounded-xl text-[#0064E1] hover:text-white hover:bg-[#0064E1]"
                  key={index}
                >{`${formattedHour}:00 `}</Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Booking;
