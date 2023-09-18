'use client'
import { useState, useEffect } from "react";
import sidebarimg from './assets/sidebarimg.svg'
import dashboard from './assets/dashboard 1.svg'
import email from './assets/email 1.svg'
import chat from './assets/comment 1.svg'
import kanban from './assets/thumbnail 1.svg'
import contact from './assets/contact 1.svg'
import calender from './assets/calendar-silhouette 1.svg'
import courses from './assets/invoice 1.svg'
import shop from './assets/online-shopping 1.svg'
import invoices from './assets/invoice 1.svg'
import setting from './assets/setting 1.svg'

const Sidebar = () => {
  const isKanbanPage = true;
  const [isMobileView, setIsMobileView] = useState(false);

  // Function to toggle the mobile view
  const toggleMobileView = () => {
    setIsMobileView(!isMobileView);
  };

  // Check the screen width and toggle mobile view accordingly
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) { // Adjust the breakpoint as needed
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
      }
    };

    // Add a resize event listener
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="h-screen w-[17vw] flex overflow-hidden">
      {isMobileView ? ( // Render the hamburger menu button in mobile view
        <button
          onClick={toggleMobileView}
          className="fixed z-30 left-0 px-4 py-3  m-4 text-white bg-[#15132B] rounded-full"
        >
          ☰
        </button>
      ) : (
        <div className="fixed shadow-xl inset-y-0 left-0 w-64 z-30 flex-shrink-0 h-full bg-[#15132B] shadow-lg">
           <div className="mt-3 flex items-center justify-center h-16 bg-[#15132B] text-white">
          <div className="flex space-x-[4vw]">
            <span className="ml-5">weframetech</span>
            <button
              className="text-white bg-[#15132B] rounded"
            >
              ☰
            </button>
          </div>
        </div>
        <div className="mt-4 ml-9">
          <p className="text-[#C7C7C7] text-[13px] font-semibold">MAIN MENU</p>
        </div>
        <nav className="my-3 ml-5 ">
          <a
            href="#"
            className="flex font-light space-x-5 block pt-2 py-3.5 pl-4 pr-6 text-sm font-medium text-[#464366]"
          >
            <img src={dashboard} className="w-5 h-5"/>
            <div>Dashboard</div>
          </a>
          <a
            href="#"
            className="flex font-light space-x-5 block py-3.5 pl-4 pr-6 text-sm font-medium text-[#464366]"
          >
            <img src={email} className="w-5 h-5"/>
            <div>Email</div>
          </a>
          <a
            href="#"
            className="flex font-light space-x-5 block py-3.5 pl-4 pr-6 text-sm font-medium text-[#7879F1]"
          >
            <img src={chat} className="w-5 h-5"/>
            <div>Chat</div>
          </a>
          <a
            href="#"
            className="flex items-center font-light space-x-5 block py-3.5 pl-4 pr-6 text-sm font-medium text-[#6418C3]"
          >
            <img src={kanban} className="w-5 h-5"/>
            <div>Kanban</div>
            {isKanbanPage && (
              <div
                className="w-1 h-10 absolute right-0 bg-[#6418C3] rounded"
              ></div>
            )}
          </a>
          <a
              href="#"
              className="flex font-light space-x-5 block py-3.5 pl-4 pr-6 text-sm font-medium text-[#7879F1]"
            >
              <img src={contact} className="w-5 h-5"/>
              <div>Contact</div>
            </a>
            <a
              href="#"
              className="flex font-light space-x-5 block py-3.5 pl-4 pr-6 text-sm font-medium text-[#7879F1]"
            >
              <img src={calender} className="w-5 h-5"/>
              <div>Calender</div>
            </a>
            <a
              href="#"
              className="flex font-light space-x-5 block py-3.5 pl-4 pr-6 text-sm font-medium text-[#7879F1]"
            >
              <img src={courses} className="w-5 h-5"/>
              <div>Courses</div>
            </a>
            <a
              href="#"
              className="flex font-light space-x-5 block py-3.5 pl-4 pr-6 text-sm font-medium text-[#7879F1]"
            >
              <img src={shop} className="w-5 h-5"/>
              <div>Shop</div>
            </a>
            <a
              href="#"
              className="flex font-light space-x-5 block py-3.5 pl-4 pr-6 text-sm font-medium text-[#7879F1]"
            >
              <img src={invoices} className="w-5 h-5"/>
              <div>Invoices</div>
            </a>
            <a
              href="#"
              className="flex font-light space-x-5 block pt-3.5 pl-4 pr-6 text-sm font-medium text-[#7879F1]"
            >
              <img src={setting} className="w-5 h-5"/>
              <div>Settings</div>
            </a>
        </nav>
        <div className="p-10">
          <img src={sidebarimg} alt="Sidebar Image" />
        </div>
        
        </div>
      )}
    </div>
  );
};

export default Sidebar;
