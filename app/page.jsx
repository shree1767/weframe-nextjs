const Home = () => {
  return (
    <div className="bg-[#0D0B21] px-5 py-8 md:w-[83vw] w-[100vw] h-full">
      <div className="bg-[#15132B] flex justify-between mx-8 w-[77vw] h-[20vh] bg-opacity-80 rounded-2xl">
        <div className="flex space-x-3 py-7 px-8">
          <div>
            <img src="/btnback.svg" alt="." />
          </div>
          <div className="space-y-2">
            <p className="font-bold text-xl text-white">
              School November Tasks
            </p>
            <p className="font-light text-[11px] text-[#A5A5A5] pb-3">
              Created by Instructor Day on November 31, 2022
            </p>
            <div className="flex space-x-3">
              <img src="/people.svg" className="w-[8vw]" />
              <button className="flex space-x-2 items-center px-4 py-1 bg-[#6418C3] rounded-lg text-white font-medium text-[11px]">
                <img src="/add-friend 1.svg" className="w-5"/>
                <div>Invite People</div>
              </button>
              <button className="px-4 py-1 border border-[#7879F1] rounded-lg text-white font-medium text-[11px]">
                <div>Private</div>
              </button>
              <button className="px-4 py-1 bg-[#7879F1] rounded-lg text-white font-medium text-[11px]">
                <div>Edit</div>
              </button>
              <button className="flex space-x-2 items-center px-4 py-1.5 border border-[#7879F1] rounded-lg text-white font-medium text-[11px]">
                <img src="/chat.svg" className="w-5"/>
                <div>45 Comments</div>
              </button>
            </div>
          </div>
        </div>
        <div className="py-2 px-8 space-y-3">
          <div className="flex space-x-3 items-center justify-end">
            <div className="text-white text-right">
              <div className="text-[14px] font-semibold">
                Centered Martial Arts
              </div>
              <p className="text-[13px] text-[#A5A5A5]">Sunnyvale, CA</p>
            </div>
            <img src="/companyLogo.svg" className="w-[6vw]" />
            <img src="/icVert.svg" />
          </div>
          <div className="flex text-white text-[13px] space-x-5 items-center justify-end">
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
