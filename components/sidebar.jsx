"use client";
import { useState, useEffect } from "react";
import sidebarimg from './assets/sidebarimg.svg'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  
  // Function to toggle the sidebar
  const toggleSidebar = () => {
    if (window.innerWidth <= 425) {
      // Allow sidebar toggle only if the screen width is less than or equal to 768px
      setIsOpen(!isOpen);
    }
  };
  

  return (
    <div className="h-screen w-[17vw] flex overflow-hidden">
      {/* Mobile Hamburger Icon */}
      <div className="">
        <button
          onClick={toggleSidebar}
          className="fixed inset-0 z-30 w-[17vw] h-full bg-black opacity-0 cursor-pointer"
          style={{ display: isOpen ? "block" : "none" }}
        ></button>
        <div
          className="fixed inset-y-0 left-0 w-64 z-30 flex-shrink-0 bg-[#15132B] shadow-lg"
          style={{ transform: isOpen ? "translateX(0)" : "translateX(-100%)" }}
        >
          {/* Sidebar Content */}
          <div className="mt-3 flex items-center justify-center h-16 bg-[#15132B] text-white">
            <div className="flex  space-x-[4vw]">
              <span className="mr-2">weframetech</span>
              <button
                onClick={toggleSidebar}
                className="md:block text-white hover:text-gray-300 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  stroke="#7879F1"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-6 ml-6">
            <p className="text-[#C7C7C7] text-[13px]">MAIN MENU</p>
          </div>
          <nav className="mt-3 ml-3">
            <a
              href="#"
              className="block py-3 pl-4 pr-6 text-sm font-medium text-[#464366]"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="block py-3 pl-4 pr-6 text-sm font-medium text-[#464366]"
            >
              Email
            </a>
            <a
              href="#"
              className="block py-3 pl-4 pr-6 text-sm font-medium text-[#7879F1]"
            >
              Chat
            </a>
            <a
              href="#"
              className="block py-3 pl-4 pr-6 text-sm font-medium text-[#6418C3]"
            >
              Kanban
            </a>
            <a
              href="#"
              className="block py-3 pl-4 pr-6 text-sm font-medium text-[#7879F1]"
            >
              Contact
            </a>
            <a
              href="#"
              className="block py-3 pl-4 pr-6 text-sm font-medium text-[#7879F1]"
            >
              Calender
            </a>
            <a
              href="#"
              className="block py-3 pl-4 pr-6 text-sm font-medium text-[#7879F1]"
            >
              Courses
            </a>
            <a
              href="#"
              className="block py-3 pl-4 pr-6 text-sm font-medium text-[#7879F1]"
            >
              Shop
            </a>
            <a
              href="#"
              className="block py-3 pl-4 pr-6 text-sm font-medium text-[#7879F1]"
            >
              Invoices
            </a>
            <a
              href="#"
              className="block py-3 pl-4 pr-6 text-sm font-medium text-[#7879F1]"
            >
              Settings
            </a>
          </nav>
          <div>
            <img src={sidebarimg}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
