const Home = () => {
  return (
    <div className="bg-[#0D0B21] px-5 py-8 md:w-[83vw] w-[100vw] h-full">
      <div className="bg-[#15132B] flex justify-between md:mx-8 px-4 md:w-[77vw] md:h-[20vh] bg-opacity-80 rounded-2xl">
        <div className="flex space-x-3 py-7 md:px-8">
          <div>
            <img src="/btnback.svg" alt="." className="md:block hidden " />
          </div>
          <div className="space-y-2">
            <p className="font-bold md:text-xl text-[20px] text-white">
              School November Tasks
            </p>
            <p className="font-light md:text-[11px] text-[10px] text-[#A5A5A5] pb-3">
              Created by Instructor Day on November 31, 2022
            </p>
            <div className="md:flex md:space-x-3 space-y-3 md:space-y-0">
              <img src="/people.svg" className="md:w-[8vw] w-[25vw]" />
              <button className="flex space-x-2 items-center md:px-5 px-2 py-1 bg-[#6418C3] rounded-lg text-white font-medium md:text-[10px] text-[8px]">
                <img src="/add-friend 1.svg" className="w-5"/>
                <div>Invite People</div>
              </button>
              <button className=" md:px-5 px-2 py-1  border border-[#7879F1] rounded-lg text-white font-medium md:text-[10px] text-[8px]">
                <div>Private</div>
              </button>
              <button className="md:px-5 ml-2 md:ml-0 px-2 py-1 bg-[#7879F1] rounded-lg text-white font-medium md:text-[10px] text-[8px]">
                <div>Edit</div>
              </button>
              <button className="flex space-x-2 items-center md:px-5 px-3 py-1.5 border border-[#7879F1] rounded-lg text-white font-medium md:text-[10px] text-[8px]">
                <img src="/chat.svg" className="w-5"/>
                <div>45 Comments</div>
              </button>
            </div>
          </div>
        </div>
        <div className="md:py-2 py-6 md:px-2 ml-5 space-y-3">
          <div className="flex md:space-x-3 space-x-1 items-center justify-end">
            <div className="md:block hidden text-white text-right">
              <div className="text-[14px] font-semibold">
                Centered Martial Arts
              </div>
              <p className="text-[13px] text-[#A5A5A5]">Sunnyvale, CA</p>
            </div>
            <img src="/companyLogo.svg" className="md:w-[6vw] w-[15vw]" />
            <img src="/icVert.svg" className=""/>
          </div>
          <div className="md:block hidden md:flex text-white text-[13px] space-x-5 items-center justify-end">
            <p>Total Progress 60%</p>
            <div className="w-[15vw] h-[1vw] bg-[#1E1C3A] rounded-full">
              <div className="h-full bg-[#6418C3] rounded-full w-[60%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
