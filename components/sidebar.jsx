"use client";

import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-screen flex overflow-hidden">
      {/* Mobile Hamburger Icon */}
      <div className="">
        <button
          onClick={toggleSidebar}
          className="fixed inset-0 z-30 w-full h-full bg-black opacity-0 cursor-pointer"
          style={{ display: isOpen ? "block" : "none" }}
        ></button>
        <div
          className="fixed inset-y-0 left-0 w-64 z-30 flex-shrink-0 bg-[#15132B]"
          style={{ transform: isOpen ? "translateX(0)" : "translateX(-100%)" }}
        >
          {/* Sidebar Content */}
          <div className="flex items-center justify-center h-16 bg-[#15132B] text-white">
            {isOpen ? (
              <button
                onClick={toggleSidebar}
                className="md:block text-white hover:text-gray-300 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            ) : (
              <button
                onClick={toggleSidebar}
                className="md:block text-white hover:text-gray-300 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
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
            )}
            <div className="flex space-x-5">
              <span className="mr-2">weframetech</span>
            </div>
          </div>
          <nav className="mt-5">
            <a
              href="#"
              className="block py-2 pl-4 pr-6 text-sm font-medium text-white"
            >
              Home
            </a>
            <a
              href="#"
              className="block py-2 pl-4 pr-6 text-sm font-medium text-white"
            >
              About
            </a>
            <a
              href="#"
              className="block py-2 pl-4 pr-6 text-sm font-medium text-white"
            >
              Services
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
