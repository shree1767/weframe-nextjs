const Home = () => {
  return (
    <div className="bg-[#0D0B21] px-5 py-8 md:w-[83vw] w-[100vw] h-full">

      <div className="bg-[#15132B] flex justify-between mx-8 w-[77vw] h-[20vh] bg-opacity-80 rounded-2xl">
        <div className="flex space-x-3 py-7 px-8">
          <div>
            <img src="" alt="."/>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-xl text-white">School November Tasks</p>
            <p className="font-light text-[11px] text-[#A5A5A5] pb-3">Created by Instructor Day on November 31, 2022</p>
            <div className="flex space-x-3">
              <button className="px-5 py-2 bg-[#6418C3] rounded-lg text-white font-medium text-[11px]">
                <img src=""/>
                <div>Invite People</div>
              </button>
              <button className="px-5 py-2 border border-[#7879F1] rounded-lg text-white font-medium text-[11px]">
                <div>Private</div>
              </button>
              <button className="px-5 py-2 bg-[#7879F1] rounded-lg text-white font-medium text-[11px]">
                <div>Edit</div>
              </button>
              <button className="px-5 py-2 border border-[#7879F1] rounded-lg text-white font-medium text-[11px]">
                <img src=""/>
                <div>45 Comments</div>
              </button>
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;