import React from "react";

function Main() {
  return (
    <div className="flex w-[80%] flex-col space-y-5">
      <div className="header p-4 flex justify-between">
        <div><input type="text" placeholder="search" /></div>
        <div className="flex mr-20 space-x-10">
        <img src="Group2.png" alt="" />
        <img src="Group2.png" alt="" />
        <img src="Group2.png" alt="" />
        </div>
        
      </div>
      <div className="container flex flex-row space-x-3">
        <div className="w-[60%] flex flex-col">
          <p>Dashboard</p>
          <div className="smallcontainer flex flex-row space-x-4">
            <div className="w-1/3 border border-red-200 shadow-sm p-3 rounded-md bg-[#FFEFE7]">
              <h1>Available Positions</h1>
              <h1>24</h1>
              <h1 className="text-red-500 text-sm">4 urgently needed</h1>
            </div>
            <div className="w-1/3 border border-red-200 shadow-sm p-3 rounded-md bg-[#E8F0FB]">
              <h1>Available Positions</h1>
              <h1>24</h1>
              <h1 className="text-blue-500 text-sm">4 urgently needed</h1>
            </div>
            <div className="w-1/3 border border-red-200 shadow-sm p-3 rounded-md bg-[#FDEBF9]">
              <h1>Available Positions</h1>
              <h1>24</h1>
              <h1 className="text-pink-500 text-sm">4 urgently needed</h1>
            </div>
          </div>

          <div className="smallcontainer2 flex flex-row mt-10 space-x-2">
            <div className="w-1/2 flex flex-row border border-red-200 shadow-lg rounded-md p-4 justify-between">
              <div className="textContainer text-sm space-y-2">
                <p>Total Employees</p>
                <p>216</p>
                <p>120 men</p>
                <p>96 women</p>
              </div>
              <div className="imgContainer">
                <img src="Frame 52.png" alt="" />
              </div>
            </div>
            <div className="w-1/2 flex flex-row border border-red-300 rounded-md shadow-lg p-4 justify-between">
              <div className="textContainer text-sm space-y-2">
                <p>Total Employees</p>
                <p>216</p>
                <p>120 men</p>
                <p>96 women</p>
              </div>
              <div className="imgContainer">
                <img src="Frame 53.png" alt="" />
              </div>
            </div>
          </div>

          <div className="lastContainer rounded-lg border border-grey-200 shadow-lg p-3 flex flex-col mt-5">
            <div className="top flex flex-row justify-between">
              <h1 className="text-xl font-bold">Announcement</h1>
              <button>Click me</button>
            </div>

            <div className="border border-gray-200 p-2 rounded-lg mt-5 justify-between flex bg-[#FAFAFA]  ">
              <div className="textDiv">
                <h1>Outing Schedule for Every department</h1>
                <h1 className="text-sm">5 min ago</h1>
              </div>
              <div className="imgDiv flex justify-center items-center gap-2">
                <img src="Group2.png" alt="" />
                <img src="Group2.png" alt="" />
              </div>
            </div>

            <div className="border border-gray-200 p-2 rounded-lg mt-5 justify-between flex bg-[#FAFAFA] ">
              <div className="textDiv">
                <h1>Outing Schedule for Every department</h1>
                <h1 className="text-sm">5 min ago</h1>
              </div>
              <div className="imgDiv flex justify-center items-center gap-2">
                <img src="Group2.png" alt="" />
                <img src="Group2.png" alt="" />
              </div>
            </div>

            <div className="border border-gray-200 p-2 rounded-lg mt-5 justify-between flex bg-[#FAFAFA] ">
              <div className="textDiv">
                <h1>Outing Schedule for Every department</h1>
                <h1 className="text-sm">5 min ago</h1>
              </div>
              <div className="imgDiv flex justify-center items-center gap-2">
                <img src="Group2.png" alt="" />
                <img src="Group2.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[32%] mt-6">
          <div className="blueContainer bg-[#161E54] text-white rounded-lg shadow-md p-3 space-y-3">
            <h1 className="text-white bg-[#1B204A]">Recently Activity</h1>
            <p className="text-sm">bwbvuobiewnvopnk bjbcbo</p>
            <p>You Posted a new job</p>
            <p className="text-sm">Kindly check the requirements and make sure everything is ok.</p>
            <div className="bottom flex justify-between items-center">
            <p>Today you made 12 activities</p>
               <button className="bg-red-500 rounded-md p-2 mr-4">See all activity</button>
            </div>
          </div>

          <div className="bottomContainer mt-10 border border-gray-200 ">
          <div className="top flex justify-between items-center">
            <p>Upcoming Schedule</p>
               <button className="text-sm border border-gray-200">See all activity</button>
            </div>

            <label>Priority</label>
            <div className="border border-gray-200 p-2 rounded-lg mt-5 justify-between flex bg-[#FAFAFA] ">
              <div className="textDiv">
                <h1>Outing Schedule for Every department</h1>
                <h1 className="text-sm">5 min ago</h1>
              </div>
              <div className="imgDiv flex justify-center items-center gap-2">
                <img src="Group2.png" alt="" />
              </div>
            </div>

            <label>Outing</label>
            <div className="border border-gray-200 p-2 rounded-lg mt-5 justify-between flex bg-[#FAFAFA] ">
              <div className="textDiv">
                <h1>Outing Schedule for Every department</h1>
                <h1 className="text-sm">5 min ago</h1>
              </div>
              <div className="imgDiv flex justify-center items-center gap-2">
               
                <img src="Group2.png" alt="" />
              </div>
            </div>
            <div className="border border-gray-200 p-2 rounded-lg mt-5 justify-between flex bg-[#FAFAFA] ">
              <div className="textDiv">
                <h1>Outing Schedule for Every department</h1>
                <h1 className="text-sm">5 min ago</h1>
              </div>
              <div className="imgDiv flex justify-center items-center gap-2">
  
                <img src="Group2.png" alt="" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Main;
