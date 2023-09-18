'use client'
import React from "react";
import { FaSearch } from "react-icons/fa";
import notification from "./assets/notification.svg";
import activities from "./assets/Activities.svg";
import check from "./assets/check.svg";
import folder from "./assets/folder.svg";
import us from "./assets/united-states 1.svg";
import arrow from "./assets/arrow.svg";

const Navbar = () => {

  return (
    <div className="bg-[#15132B] md:w-[83vw] w-[100vw] h-[12vh] flex items-center pl-12 shadow-xl">
      <div className="bg-[#211A75] rounded-full flex space-x-3 items-center px-2 py-4 md:w-[28vw] w-[15vw]">
        <FaSearch className="h-5 w-5 text-[#7879F1] md:ml-4 mx-2" />
        <input
          type="text"
          placeholder="Search here"
          className="bg-[#211A75] md:block hidden text-[13px] text-[#AAAAAA] outline-none placeholder-[#AAAAAA] w-40"
        />
      </div>
      <div className="md:block hidden md:flex items-center justify-between ml-10 ">
        <a href="#" className="text-[#6418C3] font-bold  text-[11px] underline">
          OTHER MENUS
        </a>
        <div className="flex -space-x-5 ml-3">
          <img src={notification} className="w-[5vw]" />
          <img src={activities} className="w-[5vw]"/>
          <img src={check} className="w-[5vw]" />
          <img src={folder}  className="w-[5vw]"/>
        </div>
        <button className="md:block hidden mr-5 items-center text-white md:flex space-x-3 bg-[#211A75] py-4 px-3  font-semibold rounded-full text-[13px]">
          <div>
            <img src={us} />
          </div>
          <p>ENGLISH</p>
          <div className="">
            <img src={arrow} />
          </div>
        </button>
      </div>
      <div className="h-[7vh] w-[1px] bg-[#1E1C3A]"></div>
      {/* profile */}
      <div className="flex space-x-3 items-center ml-5">
        <div className="w-[40px] h-[40px] bg-[#C4C4C4] rounded"></div>
        <div className="text-white">
          <p className="text-[11px]">Instructor Day</p>
          <p className="text-[11px] text-[#7879F1]">Super Admin</p>
        </div>
        <img src={arrow} />
      </div>
    </div>
  );
};

export default Navbar;

