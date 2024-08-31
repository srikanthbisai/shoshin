function Left() {
  return (
    <div className="flex sm:hidden md:block md:w-[15%] md:m-x-auto xl:w-[15%] bg-[#FAFAFA] min-h-screen">
      <div>
        <div className="flex flex-row space-x-3 justify-center mt-10 items-center">
          <img src="icon.png" alt=""></img>
          <p className="text-[#0A337A] font-bold text-3xl hidden xl:block">
            Vasitum
          </p>
        </div>

        <div className="mainmenu text-sm ">
          <ul className=" flex flex-col mt-20 space-y-10 max-md:justify-center max-md:items-center">
            <li className="font-thin md:text-center lg:text-left lg:ml-10 xl:text-lg">
              MAIN MENU
            </li>

            <div className="flex space-x-10 items-center">
              <div className="ml-10">
                <img src="ic_dashboard.png" alt="" />
              </div>

              <div>
                <h1 className="hidden xl:block text-lg">Dashboard</h1>
              </div>
            </div>

            <div className="flex space-x-10 items-center">
              <div className="ml-10">
                <img src="ic_recruitment.png" alt="" />
              </div>

              <div>
                <h1 className="hidden xl:block text-lg">Recruitment</h1>
              </div>
            </div>

            <div className="flex space-x-10 items-center">
              <div className="ml-10">
                <img src="ic_calendar.png" alt="" />
              </div>

              <div>
                <h1 className="hidden xl:block text-lg">Schedule</h1>
              </div>
            </div>

            <div className="flex space-x-10 items-center">
              <div className="ml-10">
                <img src="ic_employee.png" alt="" />
              </div>

              <div>
                <h1 className="hidden xl:block text-lg">Employee</h1>
              </div>
            </div>

            <div className="flex space-x-10 items-center">
              <div className="ml-10">
                <img src="ic_department.png" alt="" />
              </div>

              <div>
                <h1 className="hidden xl:block text-lg">Department</h1>
              </div>
            </div>
          </ul>

          <ul className=" flex flex-col mt-20 space-y-10 ">
            <li className="font-thin xl:text-lg ml-10">OTHER</li>
            <div className="flex space-x-10 items-center">
              <div className="ml-10">
                <img src="ic_support.png" alt="" />
              </div>

              <div>
                <h1 className="hidden xl:block text-lg">Support</h1>
              </div>
            </div>

            <div className="flex space-x-10 items-center">
              <div className="ml-10">
                <img src="settings.png" alt="" />
              </div>

              <div>
                <h1 className="hidden xl:block text-lg">Settings</h1>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Left;
