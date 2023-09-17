'use client'
import React from "react";
import { FaSearch } from "react-icons/fa";
import {notification} from './assets/notification.svg'
import {activities} from './assets/Activities.svg'
import {check } from './assets/check.svg'
import {folder} from './assets/folder.svg'
import {us} from './assets/united-states 1.svg'
import {arrow} from './assets/arrow.svg'

const Navbar = () => {
  return (
    <div className="bg-[#15132B] md:w-[85vw] w-[100vw] h-[12vh] flex items-center justify-evenly px-4">
      <div className="bg-[#211A75] rounded-full flex items-center px-2 py-4 md:w-[25vw] w-[15vw]">
        <FaSearch className="h-5 w-5 text-[#7879F1] md:ml-4 ml-3 mr-3" />
        <input
          type="text"
          placeholder="Search here"
          className="bg-[#211A75] md:block hidden text-[13px] text-[#AAAAAA] outline-none placeholder-[#AAAAAA] w-40"
        />
      </div>
      <div className="md:block hidden md:flex items-center justify-evenly space-x-5">
        <a href="#" className="text-[#6418C3] text-[13px] underline">
          OTHER MENUS
        </a>
        <div>
          <img src={notification} alt="n" />
        </div>
        <div>
          <img src={activities} alt="a" />
        </div>
        <div>
          <img src={check} alt="c" />
        </div>
        <div>
          <img src={folder} alt="f" />
        </div>
      </div>
      <button className="md:block hidden text-white flex space-x-3 bg-[#211A75] py-4 px-3 font-semibold rounded-full text-sm">
        <div className="mr-2">
          <img src={us} />
        </div>
        <p>ENGLISH</p>
        <div className="">
          <img src={arrow} />
        </div>
      </button>
      <div className="h-[8vh] w-[1px] bg-[#1E1C3A]"></div>
      {/* profile */}
      <div className="flex space-x-3 items-center">
        <div className="w-[50px] h-[50px] bg-[#C4C4C4] rounded"></div>
        <div className="text-white">
          <p className="text-sm">Instructor Day</p>
          <p className="text-[11px] text-[#7879F1]">Super Admin</p>
        </div>
        <img src={arrow}/>
      </div>
    </div>
  );
};

export default Navbar; 