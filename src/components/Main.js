function Main() {
  return (
    <div className="flex  w-[80%] flex-col space-y-5 ml-10">
      <div className="header pt-6 pb-6 flex justify-between lg:w-[90%]">
        <div className="flex flex-row">
          <img src="menu.png" alt="" className=" hidden sm:block lg:hidden" />
          <button className="border rounded-lg border-gray-200 hidden md:block md:w-[300px] lg:w-[500px] p-3 flex justify-between">
            <p>Search</p>
            <img src="Frame 52.png" alt="" width={10} />
          </button>

          <img src="search.png" alt="" className="hidden sm:block lg:hidden" />
        </div>

        <div className="flex mr-20 space-x-10 items-center justify-center">
          <img src="ic_round-notifications.png" alt="" />
          <img src="bi_chat-left-dots-fill.png" alt="" />
          <img src="Mask Group.png" alt="" width={50} />
          <p className="text-center">hfiwhqw9oj () </p>
        </div>
      </div>

      <div className="container flex sm:flex-col lg:flex-row space-x-3">
        <div className="xl:w-[60%] flex flex-col">
          <p>Dashboard</p>
          <div className="smallcontainer flex flex-row space-x-4 sm:flex-col md:max-w-full md:flex-row">
            <div className=" md:w-1/3 border border-gray-200 shadow-lg p-3 rounded-md bg-[#FFEFE7] space-y-6">
              <h1 className="text-2xl text-[#161E54] font-bold">
                Available Position
              </h1>
              <h1 className="text-5xl font-semibold">24</h1>
              <h1 className="text-red-500 text-xl font-sans">
                4 Urgently needed
              </h1>
            </div>
            <div className="md:w-1/3 border border-gray-200 shadow-lg p-3 rounded-md bg-[#E8F0FB] space-y-6">
              <h1 className="text-2xl text-[#161E54] font-bold">Job Open</h1>
              <h1 className="text-5xl font-semibold">10</h1>
              <h1 className="text-xl font-sans text-[#3786F1]">
                4 Active hiring
              </h1>
            </div>
            <div className="md:w-1/3 border border-gray-200 shadow-lg p-3 rounded-md bg-[#FDEBF9] space-y-6">
              <h1 className="text-2xl text-[#161E54] font-bold">
                New Employee
              </h1>
              <h1 className="text-5xl font-semibold">24</h1>
              <h1 className="text-[#EE61CF] text-xl font-sans">4 Department</h1>
            </div>
          </div>

          <div className="smallcontainer2 flex sm:flex-col max-sm:justify-center max-sm:items-center md:flex-row mt-10 space-x-2">
            <div className="lg:w-1/2 flex flex-row border border-red-200 rounded-md shadow-lg p-4 justify-between">
              <div className="textContainer text-sm ml-3">
                <p className="text-2xl font-bold">Total Employees</p>
                <p className="text-5xl font-bold font-sans mt-5">216</p>
                <p className="font-thin mt-8">120 men</p>
                <p className="font-thin mt-2">96 women</p>
              </div>
              <div className="imgContainer flex justify-center items-center mr-10">
                <img src="Frame 52.png" alt="" width={150} />
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-row border border-red-200 rounded-md shadow-lg p-4 justify-between">
              <div className="textContainer text-sm  ml-3">
                <p className="text-2xl font-bold">Talent Request</p>
                <p className="text-5xl font-bold font-sans mt-5">16</p>
                <p className="font-thin mt-8">6 men</p>
                <p className="font-thin mt-2">10 women</p>
              </div>
              <div className="imgContainer flex justify-center items-center mr-10">
                <img src="Frame 53.png" alt="" width={150} />
              </div>
            </div>
          </div>

          <div className="lastContainer rounded-lg border border-gray-200 shadow-lg p-0 flex flex-col mt-10 space-y-6">
            <div className="top flex flex-row justify-between">
              <h1 className="text-xl font-bold p-3 ml-4">Announcement</h1>
              <button className="p-3">Click me</button>
            </div>

            <div className="border border-gray-200 p-2 rounded-lg mt-5 justify-between flex bg-[#FAFAFA]  w-[95%] mx-auto">
              <div className="textDiv">
                <h1>Outing Schedule for Every department</h1>
                <h1 className="text-sm font-thin">5 min ago</h1>
              </div>
              <div className="imgDiv flex justify-center items-center gap-2">
                <img src="Group2.png" alt="" />
                <img src="Group2.png" alt="" />
              </div>
            </div>

            <div className="border border-gray-200 p-2 rounded-lg mt-5 justify-between flex bg-[#FAFAFA] w-[95%] mx-auto">
              <div className="textDiv">
                <h1>Meeting HR Department</h1>
                <h1 className="text-sm">5 min ago</h1>
              </div>
              <div className="imgDiv flex justify-center items-center gap-2">
                <img src="Group2.png" alt="" />
                <img src="Group2.png" alt="" />
              </div>
            </div>

            <div className="border border-gray-200 p-2 rounded-lg mt-5 justify-between flex bg-[#FAFAFA] w-[95%] mx-auto">
              <div className="textDiv">
                <h1>
                  IT Department need two more talents for UX/UI <br></br>
                  Designer Position
                </h1>
                <h1 className="text-sm font-thin">Yesterday, 09:15 AM</h1>
              </div>
              <div className="imgDiv flex justify-center items-center gap-2">
                <img src="Group2.png" alt="" />
                <img src="Group2.png" alt="" />
              </div>
            </div>

            <div className="border border-t-gray-200 border-b-0 border-l-0 border-r-0  flex justify-center w-full">
              <p className="text-red-500 p-4"> See All Anouncement</p>
            </div>
          </div>
        </div>

        <div className=" flex sm:flex-col md:flex-row lg:flex-col xl:w-[40%] mt-6 sm:space-x-3">
          <div className="blueContainer bg-[#161E54] text-white rounded-2xl ml-2 shadow-md p-3 ">
            <h1 className="text-white bg-[#1B204A] p-2 mt-3">
              Recently Activity
            </h1>
            <p className="text-[10px] p-2 mt-3">10:40 AM, Fri Sept 2021</p>
            <p className="p-2 text-xl font-bold tracking-wide">
              You Posted a New Job
            </p>
            <p className="text-lg mt-3 p-2 ">
              Kindly check the requirements and terms of work and<br></br> make
              sure everything is right.
            </p>
            <div className="bottom flex justify-between items-center mt-10">
              <p className="p-2 ">Today you made 12 activities</p>
              <button className="bg-red-500 rounded-md p-3 mr-4">
                See all activity
              </button>
            </div>
          </div>

          <div className="bottomContainer lg:mt-10 border sm:w-full border-gray-200 rounded-2xl shadow-lg relative overflow-hidden">
            <div className="top flex justify-between items-center p-3">
              <p className="font-bold text-3xl text-[#161E54] p-2 mt-4">
                Upcoming Schedule
              </p>
              <button className="text-sm border border-gray-200 p-2">
                See all activity
              </button>
            </div>

            <p className="mt-4 font-thin p-2">Priority</p>
            <div className="border border-gray-200 p-2 rounded-lg mt-2 justify-between flex bg-[#FAFAFA] w-[95%] mx-auto">
              <div className="textDiv">
                <h1 className="">Review Candidate Applications</h1>
                <h1 className="text-sm">5 min ago</h1>
              </div>
              <div className="imgDiv flex justify-center items-center p-2">
                <img src="Group2.png" alt="" />
              </div>
            </div>

            <p className="mt-4 font-thin p-2">Other</p>
            <div className="border border-gray-200 p-2 rounded-lg mt-2 justify-between flex bg-[#FAFAFA] w-[95%] mx-auto">
              <div className="textDiv">
                <h1 className="">Interview with Candidates</h1>
                <h1 className="text-sm ">5 min ago</h1>
              </div>
              <div className="imgDiv flex justify-center items-center p-2">
                <img src="Group2.png" alt="" />
              </div>
            </div>

            <div className="border border-gray-200 p-3 rounded-lg mt-3 justify-between flex bg-[#FAFAFA] w-[95%] mx-auto">
              <div className="textDiv">
                <p className="">
                  Short Meeting with Product Designer <br />
                  from IT Department
                </p>
                <h1 className="text-sm font-thin ">5 min ago</h1>
              </div>
              <div className="imgDiv flex justify-center items-center gap-2">
                <img src="Group2.png" alt="" />
              </div>
            </div>

            {/* New Partially Visible Div */}

            <div className="border border-t-gray-200 border-b-0 border-l-0 border-r-0 flex justify-center w-full">
              <p className="text-red-500 p-4"> See All Anouncement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
