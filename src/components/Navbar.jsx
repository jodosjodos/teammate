import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const Links = [
    { name: "Home", link: "#intro" },
    { name: "About", link: "#about" },
    { name: "Choose", link: "#choose" },
    { name: "Services", link: "#services" },
    { name: "Job", link: "#job" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full relative top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        {/* logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <a href="/">Teamate</a>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-1 top-5 w-9 h-9 cursor-pointer md:hidden"
        >
          {open ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
        {/* link items */}
        <div
          className={`md:hidden rounded-md absolute top-20 -left-5 w-[95%] bg-white z-10 transition-transform duration-300 transform ${
            open ? "translate-x-0 ml-8" : "-translate-x-full"
          }`}
        >
          <ul className="flex flex-col items-center py-7">
            {Links.map((link) => (
              <li key={link.name} className="mb-4 font-medium">
                <a
                  href={link.link}
                  className="text-gray-800 hover:text-blue-400 duration-500"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <a
              href="/booking"
              className="bg-blue-600 w-80 flex justify-center text-white font-semibold px-3 py-1 rounded duration-500"
            >
              Book now
            </a>
          </ul>
        </div>
        {/* Desktop navigation */}
        <div className="hidden justify-center rounded-lg md:flex md:justify-center md:items-center md:pb-0 pb-12 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-1">
          <ul className="md:flex">
            {Links.map((link) => (
              <li
                key={link.name}
                className="md:ml-8 md:my-0 my-7 font-semibold"
              >
                <a
                  href={link.link}
                  className="text-gray-800 hover:text-blue-400 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <a
              href="/booking"
              className="bg-blue-600 w-80 md:w-auto text-white md:ml-8 sm:ml-0 font-semibold px-3 py-1 rounded duration-500 md:static"
            >
              Book now
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
