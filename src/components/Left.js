import React from 'react'

function Left() {
  return (
    <div className='flex flex-col sm:hidden md:block md:w-[10%] xl:w-[15%] bg-[#FAFAFA] min-h-screen'>
      <div className="flex flex-row space-x-2 justify-center mt-5 items-center">
         <img src='icon.png' alt=''></img>
         <p className='text-[#0A337A] font-bold text-2xl hidden lg:block'>Vasitum</p>
      </div>
      
      <div className="mainmenu text-sm">
        <ul className=' flex flex-col pl-10 mt-10 space-y-8'>
           <li>Main Menu</li>
           <li className='flex flex-row space-x-6 items-center'><img src='ic_dashboard.png'/> <h1 className='hidden xl:block'>Dashboard</h1></li> 
           <li className='flex flex-row space-x-6 items-center'><img src='ic_recruitment.png'/> <h1 className='hidden xl:block'>Recruitment</h1></li> 
           <li className='flex flex-row space-x-6 items-center'><img src='ic_calendar.png'/> <h1 className='hidden xl:block'>Schedule</h1></li> 
           <li className='flex flex-row space-x-7 items-center'><img src='Group.png'/> <h1 className='hidden xl:block'>Employee</h1></li> 
           <li className='flex flex-row space-x-6 items-center'><img src='ic_department.png'/> <h1 className='hidden xl:block'>Department</h1></li> 
        </ul>


        <ul className=' flex flex-col pl-10 space-y-8 mt-16'>
            <li>Other</li>
           <li className='flex flex-row space-x-7 items-center'><img src='ic_support.png'/> <h1 className='hidden xl:block'>Settings</h1></li> 
           <li className='flex flex-row space-x-8 items-center'><img src='Group2.png'/> <h1 className='hidden xl:block'>Schedule</h1></li> 
        </ul>
      </div>
    </div>
  )
}

export default Left
