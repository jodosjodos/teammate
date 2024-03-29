import React from "react";
import { Link } from "react-router-dom";

const Choose = () => {
  return (
    <div className="px-5 md:px-10 mt-10">
      <div className="flex flex-col items-center pb-5">
        <p className="text-2xl text-blue-600 font-semibold">Why choose us</p>
        <p className="py-4 text-[#707070]">
          What make us special to be choosen by our clients
        </p>
      </div>
      <div className="py-5 flex lg:flex-row md:flex-row  sm:flex-col-reverse justify-between relative">
        <div className="flex flex-1">
          <div className="pt-10 px-0 md:px-5 flex flex-col gap-y-12">
            <div className="flex items-center gap-x-2">
              <div>
                <img src="images/clock.svg" alt="clock-svg" className="w-36" />
              </div>
              <div className="text-sm">
                <p className="font-semibold text-sm md:text-xl mb-1">
                  Save time
                </p>
                <p>
                  🕒 Your deadlines matter, and we understand the value of time.
                  we deliver project at time . Because time is not just a
                  number; it's our commitment to your success.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <div>
                <img
                  src="images/dollar.svg"
                  alt="dollar-svg"
                  className="w-28"
                />
              </div>
              <div className="text-sm">
                <p className="font-semibold text-sm md:text-xl mb-1">
                  Low cost
                </p>
                <p>
                  Hire the experienced team at low price.Don’t waste your money
                  for hiring the unexperienced team at high price
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <div>
                <img src="images/yes.svg" alt="tick-svg" className="w-36" />
              </div>
              <div className="text-sm">
                <p className="font-semibold text-sm md:text-xl mb-1">
                  Deliver high quality
                </p>
                <p>
                  Your project deserves the best, and we deliver. As team, we
                  bring you high-quality products without the high cost. Elevate
                  your standards without breaking the bank
                </p>
              </div>
            </div>

            <Link  to="/booking" className="hidden md:block px-6 py-2 w-32 text-white bg-blue-600 font-semibold rounded-md text-sm my-5">
              Book now
            </Link>
          </div>
        </div>

        <div className="flex-1 z-10">
          <img
            src="images/choose-1.png"
            alt="about-1"
            className="w-full h-[80%]"
          />
        </div>
        <div className="absolute top-[60%] right-[45%] z-0">
          <img src="images/Ellipse5.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Choose;
