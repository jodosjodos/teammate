import { useCountries } from "use-react-countries";
import { useNavigate } from "react-router-dom";

import {
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";

function FormPage() {
 

  const { countries } = useCountries();
  const [country, setCountry] = useState(0);
  const { name, flags, countryCallingCode } = countries[country];

  const boxShadowStyle = {
    boxShadow:
      "0px 8.309572219848633px 34.27698516845703px 0px rgba(0, 0, 0, 0.24)",
  };
  const shadowStyle = {
    boxShadow: "0px -1px 5.3px 0px #00000024",
  };
  return (
    <div className="px-16 py-5">
      <form
        className="flex flex-col gap-5 rounded-xl px-12 py-5"
        style={boxShadowStyle}
      >
        <h1 className="self-center text-xl font-bold">
          {" "}
          Fill a Form for Team Hiring or Project Collaboration
        </h1>
        <div className="flex lg:flex-row md:flex-row sm:flex-col justify-between">
          <div className=" flex-1 sm:hidden md:flex lg:flex items-center justify-center w-[50%]">
            <img src="images/emailForm.png" alt=" fill form" className="" />
          </div>

          <div className="flex-1 flex flex-col gap-11">
            <div className="flex md:flex-row lg:flex-row sm:flex-col  gap-3">
              {/*  */}
              <div className="flex-1 flex flex-col gap-2 justify-center">
                <h1 className="font-bold">First Name</h1>
                <input
                  type="text"
                  className="w-full px-4 py-2 focus:outline-none text-[#909ACF] placeholder:text-[#909ACF] rounded-lg"
                  style={shadowStyle}
                  placeholder="We are team of six person we want to be hired as team or I want to hire  a team"
                />
              </div>

              {/*  */}
              <div className="flex-1 flex flex-col gap-2 justify-center">
                <h1 className="font-bold">Last Name</h1>
                <input
                  type="text"
                  className="w-full px-4 py-2 focus:outline-none text-[#909ACF] placeholder:text-[#909ACF] rounded-lg"
                  style={shadowStyle}
                  placeholder="Last name"
                />
              </div>
            </div>
            {/* email */}
            <div className="flex lg:flex-row md:flex-row  sm:flex-col  gap-3">
              <div className="flex-1 flex flex-col justify-center  gap-2">
                <h1 className="font-bold">Email</h1>
                <input
                  type="text"
                  className="w-full px-4 py-2 focus:outline-none text-[#909ACF] placeholder:text-[#909ACF] rounded-lg"
                  style={shadowStyle}
                  placeholder="Last name"
                />
              </div>

              {/*  */}
              <div className="relative flex flex-1 flex-col  justify-center">
                <h1 className="font-bold"> Phone Number</h1>
                <div className="flex flex-row">
                  <Menu placement="bottom-start">
                    <MenuHandler>
                      <Button
                        ripple={false}
                        variant="text"
                        color="blue-gray"
                        className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
                      >
                        <img
                          src={flags.svg}
                          alt={name}
                          className="h-4 w-4 rounded-full object-cover"
                        />
                        {countryCallingCode}
                      </Button>
                    </MenuHandler>
                    <MenuList className="max-h-[20rem] max-w-[18rem]">
                      {countries.map(
                        ({ name, flags, countryCallingCode }, index) => {
                          return (
                            <MenuItem
                              key={name}
                              value={name}
                              className="flex items-center gap-2"
                              onClick={() => setCountry(index)}
                            >
                              <img
                                src={flags.svg}
                                alt={name}
                                className="h-5 w-5 rounded-full object-cover"
                              />
                              {name}{" "}
                              <span className="ml-auto">
                                {countryCallingCode}
                              </span>
                            </MenuItem>
                          );
                        }
                      )}
                    </MenuList>
                  </Menu>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 focus:outline-none text-[#909ACF] placeholder:text-[#909ACF] rounded-lg"
                    style={shadowStyle}
                    placeholder="Phone Number"
                  />
                </div>
              </div>
            </div>
            {/* company */}
            <div className="flex flex-col justify-center gap-2">
              <h1 className="font-bold">Company name</h1>
              <input
                type="text"
                className="w-full px-4 py-2 focus:outline-none text-[#909ACF] placeholder:text-[#909ACF] rounded-lg"
                style={shadowStyle}
                placeholder="Company name"
              />
            </div>

            {/* team specification */}
            <div className="flex flex-col justify-center gap-2">
              <h1 className="font-bold">Team specification</h1>
              <input
                type="text"
                className="w-full px-4 py-2 focus:outline-none text-[#909ACF] placeholder:text-[#909ACF] rounded-lg"
                style={shadowStyle}
                placeholder="Ex:Software development,Video editing,"
              />
            </div>

            {/* date */}
            <div className="flex lg:flex-row md:flex-row sm:flex-col gap-3">
              <div className="flex-1 flex flex-col justify-center gap-2">
                <h1 className="font-bold">Start date</h1>
                <input
                  type="date"
                  className="w-full px-4 py-2 focus:outline-none text-[#909ACF] placeholder:text-[#909ACF] rounded-lg"
                  style={shadowStyle}
                  placeholder="2024-1-1"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center gap-2">
                <h1 className="font-bold">Start time</h1>
                <input
                  type="time"
                  className="w-full px-4 py-2 focus:outline-none text-[#909ACF] placeholder:text-[#909ACF] rounded-lg"
                  style={shadowStyle}
                  placeholder="9:00"
                />
              </div>
            </div>
            {/* additional information */}
            <div className="flex flex-col justify-center gap-3">
              <h1 className="font-bold">Additional info</h1>
              <input
                type="text"
                className="w-full px-4 py-5 focus:outline-none text-[#909ACF] placeholder:text-[#909ACF] rounded-lg"
                style={shadowStyle}
                placeholder="We are team of six person we want to be hired as team or I want to hire  a team"
              />
            </div>
          </div>
        </div>
        <Link
          className="bg-[#F1511B] px-12 rounded-lg py-3 text-white font-bold hover:text-[#F1511B] hover:bg-white hover:border-[#F1511B] border-2 lg:self-center md:self-center "
        to="/redirect"
        >
          Send
        </Link>
      </form>
    </div>
  );
}

export default FormPage;
