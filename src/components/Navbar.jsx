<<<<<<< HEAD
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  let Links = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/' },
    { name: 'Service', link: '/' },
    { name: 'Testimonies', link: '/' },
    { name: 'FAQ', link: '/' },
=======
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Service", link: "/" },
    { name: "Testimonies", link: "/" },
    { name: "FAQ", link: "/" },
>>>>>>> main
  ];
  let [open, setOpen] = useState(false);

  return (
<<<<<<< HEAD
    <div className='shadow-md w-full relative top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        {/* logo section */}
        <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
          <span>Teamate</span>
        </div>
        {/* Menu icon */}
        <div onClick={() => setOpen(!open)} className='absolute right-1 top-5 w-9 h-9 cursor-pointer md:hidden'>
          {open ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
        </div>
        {/* link items */}
        <div
          className={`md:hidden rounded-md absolute top-20 left-0 w-[95%] bg-white transition-transform duration-300 transform ${open ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
          <ul className='flex flex-col items-center py-7'>
            {Links.map((link) => (
              <li key={link.name} className='mb-4 font-medium'>
                <a
                  href={link.link}
                  className='text-gray-800 hover:text-blue-400 duration-500'
=======
    <div className="shadow-md w-full relative top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        {/* logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <span>Teamate</span>
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
          className={`md:hidden rounded-md absolute top-20 left-0 w-[95%] bg-white transition-transform duration-300 transform ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="flex flex-col items-center py-7">
            {Links.map((link) => (
              <li key={link.name} className="mb-4 font-medium">
                <a
                  href={link.link}
                  className="text-gray-800 hover:text-blue-400 duration-500"
>>>>>>> main
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
<<<<<<< HEAD
            <button className='bg-blue-600 w-80 text-white font-semibold px-3 py-1 rounded duration-500'>
=======
            <button className="bg-blue-600 w-80 text-white font-semibold px-3 py-1 rounded duration-500">
>>>>>>> main
              Book now
            </button>
          </ul>
        </div>
        {/* Desktop navigation */}
<<<<<<< HEAD
        <div className='hidden justify-center rounded-lg md:flex md:justify-center md:items-center md:pb-0 pb-12 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-1'>
          <ul className='md:flex'>
            {Links.map((link) => (
              <li key={link.name} className='md:ml-8 md:my-0 my-7 font-semibold'>
                <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>
=======
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
>>>>>>> main
                  {link.name}
                </a>
              </li>
            ))}
<<<<<<< HEAD
            <button className='bg-blue-600 w-80 md:w-auto text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>
=======
            <button className="bg-blue-600 w-80 md:w-auto text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static">
>>>>>>> main
              Book now
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
<<<<<<< HEAD

=======
>>>>>>> main
