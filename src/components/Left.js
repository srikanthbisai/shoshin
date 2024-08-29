import React from 'react'

function Left() {
  return (
    <div className='flex flex-col w-[20%]'>
      <div className="flex flex-row space-x-2 pl-10 mt-5 items-center">
         <img src='icon.png' alt=''></img>
         <p className='text-[#0A337A]'>Vasitum</p>
      </div>
      
      <div className="mainmenu text-sm">
        <ul className=' flex flex-col pl-10 mt-10  space-y-8'>
           <li>Main Menu</li>
           <li className='flex flex-row space-x-2'><img src='ic_dashboard.png'/> <h1>Dashboard</h1></li> 
           <li className='flex flex-row space-x-2 '><img src='ic_dashboard.png'/> <h1>Recruitment</h1></li> 
           <li className='flex flex-row space-x-2 '><img src='ic_dashboard.png'/> <h1>Schedule</h1></li> 
           <li className='flex flex-row space-x-2 '><img src='ic_dashboard.png'/> <h1>Employee</h1></li> 
           <li className='flex flex-row space-x-2 '><img src='ic_dashboard.png'/> <h1>Department</h1></li> 
        </ul>


        <ul className=' flex flex-col pl-10 space-y-8 mt-16'>
            <li>Other</li>
           <li className='flex flex-row space-x-2 '><img src='ic_dashboard.png'/> <h1>Settings</h1></li> 
           <li className='flex flex-row space-x-2 '><img src='ic_dashboard.png'/> <h1>Schedule</h1></li> 
        </ul>
      </div>
    </div>
  )
}

export default Left
