import React from "react";

import { BiSolidMoviePlay } from "react-icons/bi";
import { IoMdSearch } from "react-icons/io";

const Navbar = ({ toggleDropdown }) => {
  return (
    <>
      <div className="text-gray-200 md:px-[8rem] px-[1rem] border-b-2 border-gray-800 fixed top-0 left-0 w-full background-color z-50">
        <div className="flex justify-between items-center py-[1.5rem] gap-[4rem] ">
          <div className="w-full flex items-center gap-[1rem] cursor-pointer">
            <BiSolidMoviePlay className="w-[3rem] md:w-[4rem] h-auto" />
            <p className="text-1xl md:text-3xl w-fit font-thin text-nowrap tracking-wider">
              WE LOVE MOVIES
            </p>
          </div>
          <div className="w-[100%] hidden lg:flex items-center gap-4">
            <input className="rounded-full w-[100%] h-[2.5rem] px-[1rem] text-xl outline-none bg-gray-800 text-white" />
            <button className="p-2">
              <IoMdSearch className="w-[2rem] h-auto" />
            </button>
          </div>

          <button className="lg:hidden" onClick={toggleDropdown}>
            <IoMdSearch className="w-[2rem] h-auto" />
          </button>
        </div>
        <h1 className="hidden lg:block w-full bg-purple-700">Hello World!</h1>
      </div>
    </>
  );
};

export default Navbar;
