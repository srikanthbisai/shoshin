 function Main() {
  return (
    <div className="flex sm:w-[90%] sm:mx-auto md:w-full flex-col space-y-5 md:ml-10">

      <div className="header pt-2 pb-2 mt-4 flex justify-between items-center sm:space-x-4 lg:pr-20 lg:w-full">
        <div className="flex flex-row justify-between space-x-3 items-center">
          <img src="menu.png" alt="" className=" hidden sm:block lg:hidden" />
          <div className="flex items-center justify-between border bg-[#FAFAFA] rounded-lg hidden md:flex md:w-[300px] lg:w-[400px] md:p-1 lg:p-4">
            <p className="ml-2 font-extralight text-lg tracking-wider">Search</p>
            <img
              src="search.png"
              alt="Search Icon"
              width={30}
              className="mr-2"
            />
          </div>
          <img src="search.png" alt="" className="hidden sm:block md:hidden" />
        </div>

        <div className="headerPicContainer flex  md:p-10 lg:p-0 space-x-6 items-center justify-between">
          <img src="ic_round-notifications.png" alt="" />
          <img src="bi_chat-left-dots-fill.png" alt="" />
          <img src="Mask Group.png" alt="" width={50} />
          <p className="text-center font-bold text-[#161E54] text-xl hidden xl:block">
            Admirra John{" "}
          </p>
          <img src="Frame 10.png" alt="" />
        </div>
      </div>

      {/* first container */}
      <div className="containe flex sm:flex-col lg:flex-row">
        <div className="xl:w-[60%] xl:m-x-auto xl:m-y-auto flex flex-col sm:px-0 md:px-6">
          <p className="text-4xl text-[#161E54] font-bold font-serif ">
            Dashboard
          </p>
          <div className="smallcontainer flex flex-row sm:space-y-5 md:space-y-0 md:space-x-4 sm:flex-col  md:flex-row mt-6 justify-center items-center">
            <div className="sm:w-full md:w-1/3 border border-gray-200 shadow-lg p-3 rounded-md bg-[#FFEFE7] space-y-6">
              <h1 className=" sm:text-md xl:text-xl text-[#161E54] font-bold">
                Available Position
              </h1>
              <h1 className="text-5xl font-semibold">24</h1>
              <h1 className="text-red-500 md:text-md xl:text-xl font-sans">
                4 Urgently needed
              </h1>
            </div>

            <div className="sm:w-full md:w-1/3 border border-gray-200 shadow-lg p-3 rounded-md bg-[#E8F0FB] space-y-6">
              <h1 className="sm:text-md xl:text-2xl text-[#161E54] font-bold">
                Job Open
              </h1>
              <h1 className="text-5xl font-semibold">10</h1>
              <h1 className="sm:text-md xl:text-xl font-sans text-[#3786F1]">
                4 Active hiring
              </h1>
            </div>
            <div className="sm:w-full md:w-1/3 border border-gray-200 shadow-lg p-3 rounded-md bg-[#FDEBF9] space-y-6">
              <h1 className="sm:text-md xl:text-2xl text-[#161E54] font-bold">
                New Employee
              </h1>
              <h1 className="text-5xl font-semibold">24</h1>
              <h1 className="text-[#EE61CF] sm:text-md xl:text-xl font-sans">
                4 Department
              </h1>
            </div>
          </div>

          <div className="smallcontainer2 sm:space-y-5 md:space-y-0 md:space-x-3 flex sm:flex-col max-sm:justify-center max-sm:items-center md:flex-row mt-6 ">
            <div className="lg:w-1/2 flex flex-row border border-red-200 rounded-md shadow-lg p-4 justify-between">
              <div className="textContainer text-sm ml-3">
                <p className="text-2xl font-bold text-[#161E54]">Total Employees</p>
                <p className="text-5xl font-bold font-sans mt-5 text-[#161E54]">216</p>
                <p className="font-light mt-8">120 men</p>
                <p className="font-light mt-2">96 women</p>
              </div>
              <div className="imgContainer flex justify-center items-center mr-10">
                <img src="Frame 52.png" alt="" width={150} />
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-row border border-red-200 rounded-md shadow-lg p-4 justify-between">
              <div className="textContainer text-sm  ml-3">
                <p className="text-2xl font-bold text-[#161E54]">Talent Request</p>
                <p className="text-5xl font-bold font-sans mt-5 text-[#161E54]">16</p>
                <p className="font-light mt-8">6 men</p>
                <p className="font-light  mt-2">10 women</p>
              </div>
              <div className="imgContainer flex justify-center items-center mr-10">
                <img src="Frame 53.png" alt="" width={150} />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 shadow-lg  flex flex-col mt-6 space-y-5">
            <div className="top flex flex-row justify-between px-3 pt-3">
              <h1 className="text-3xl font-bold p-3 text-[#161E54]">Announcement</h1>
              <button className="text-sm border border-gray-200 sm:p-2 lg:p-4 flex justify-center items-center rounded-lg font-thin">
                Today, 13 Sept 2021
                <img src="Frame 10.png" alt="" />
              </button>
            </div>

            <div className="border border-gray-200 p-2 rounded-lg justify-between flex bg-[#FAFAFA]  w-[95%] mx-auto">
              <div className="textDiv">
                <h1 className="text-lg font-medium">Outing Schedule for Every department</h1>
                <h1 className="text-sm font-light">5 min ago</h1>
              </div>
              <div className="imgDiv flex justify-center items-center space-x-6 mr-6">
                <img src="pin-light.png" alt="" />
                <img src="3dots.png" alt="" />
              </div>
            </div>

            <div className="border border-gray-200 p-2 rounded-lg  justify-between flex bg-[#FAFAFA] w-[95%] mx-auto">
              <div className="textDiv">
                <h1 className="text-lg font-medium">Meeting HR Department</h1>
                <h1 className="text-sm font-light">Yesterday, 12:30 PM</h1>
              </div>
              <div className="imgDiv flex justify-center items-center space-x-6 mr-6">
                <img src="pin-dark.png" alt="" />
                <img src="3dots.png" alt="" />
              </div>
            </div>

            <div className="border border-gray-200 p-2 rounded-lg justify-between flex bg-[#FAFAFA] w-[95%] mx-auto">
              <div className="textDiv">
                <h1 className="text-lg font-medium">
                  IT Department need two more talents for UX/UI <br></br>
                  Designer Position
                </h1>
                <h1 className="text-sm font-light">Yesterday, 09:15 AM</h1>
              </div>
              <div className="imgDiv flex justify-center items-center space-x-6 mr-6">
                <img src="pin-dark.png" alt="" />
                <img src="3dots.png" alt="" />
              </div>
            </div>

            <div className="border border-t-gray-200 border-b-0 border-l-0 border-r-0  flex justify-center w-full">
              <p className="text-red-500 p-4 font-bold text-lg"> See All Anouncements</p>
            </div>
          </div>
        </div>

        {/*second div */}
        <div className="lastContainer mb-5 sm:mt-1 md:mt-1 lg:mt-8 md:p-5 lg:p-0 flex sm:flex-col md:flex-row lg:flex-col md:space-x-2 md:mr-10 sm:w-full xl:w-[35%] mr-auto mt-8 lg:space-x-3">
          <div className="blueContainer bg-[#161E54] text-white rounded-2xl sm:mt-5 lg:mt-10 lg:ml-3 xl:mt-8 p-3 shadow-md">
            <h1 className="text-white bg-[#1B204A] rounded-2xl text-xl p-4">
              Recently Activity
            </h1>
            <p className="text-[14px] p-2 mt-3">10:40 AM, Fri Sept 2021</p>
            <p className="p-2 text-xl font-bold tracking-wide">
              You Posted a New Job
            </p>
            <p className="text-lg mt-3 p-2 ">
              Kindly check the requirements and terms of work and<br></br> make
              sure everything is right.
            </p>
            <div className="bottom flex sm:py-3 sm:space-y-3 md:py-0 md:space-y-0 sm:mt-3 md:mt-10 sm:flex-col lg:flex-row lg:justify-between lg:items-center">
              <p className="p-2 text-lg">Today you made 12 activities</p>
              <button className="bg-red-500 rounded-md sm:p-2 lg:p-3 sm:w-1/3 md:w-2/3 lg:w-1/3  lg:mr-8">
                See all activity
              </button>
            </div>
          </div>

          <div className="bottom sm:mt-5 lg:mt-10 border sm:w-full border-gray-200 rounded-2xl shadow-lg relative overflow-hidden">
            <div className="top flex justify-between items-center sm:p-5 lg:p-3">
              <p className="font-bold sm:text-2xl md:text-3xl text-[#161E54] p-2 mt-4">
                Upcoming Schedule
              </p>
              <button className="text-sm border border-gray-200 sm:p-2 lg:p-4 flex justify-center items-center rounded-lg font-thin">
                Today, 13 Sept 2021
                <img src="Frame 10.png" alt="" />
              </button>
            </div>

            <p className="font-medium p-2">Priority</p>
            <div className="border border-gray-200 p-2 rounded-lg mt-2 justify-between flex bg-[#FAFAFA] w-[95%] mx-auto">
              <div className="textDiv">
                <h1 className="text-lg font-medium">Review Candidate Applications</h1>
                <h1 className="text-sm font-light">Today - 11:30 AM</h1>
              </div>
              <div className="imgDiv flex justify-center items-center p-2">
                <img src="3dots.png" alt="" />
              </div>
            </div>

            <p className="mt-2 font-medium p-2">Other</p>
            <div className="border border-gray-200 p-2 rounded-lg justify-between flex bg-[#FAFAFA] w-[95%] mx-auto">
              <div className="textDiv">
                <h1 className="text-lg font-medium">Interview with Candidates</h1>
                <h1 className="text-sm font-light">Today - 10:30 AM</h1>
              </div>
              <div className="imgDiv flex justify-center items-center p-2">
                <img src="3dots.png" alt="" />
              </div>
            </div>

            <div className="flex md:hidden lg:flex border border-gray-200 p-3 rounded-lg mt-3 justify-between bg-[#FAFAFA] w-[95%] mx-auto">
              <div className="textDiv">
                <p className="text-lg font-medium">
                  Short Meeting with Product Designer <br /> from IT Department
                </p>
                <h1 className="text-sm font-light">Today - 09:15 AM</h1>
              </div>
              <div className="imgDiv flex justify-center items-center gap-2">
                <img src="3dots.png" alt="" />
              </div>
            </div>

            <div className="border border-t-gray-200 border-b-0 border-l-0 border-r-0 flex justify-center w-full">
              <p className="text-red-500 p-4 font-bold text-lg">
                
                Create a New Schedule
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
