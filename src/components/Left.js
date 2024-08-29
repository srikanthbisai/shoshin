import React from 'react'

function Left() {
  return (
    <div className='flex flex-col flex-1'>
      <div className="flex flex-row space-x-2 items-center">
         <img src='icon.png' alt=''></img>
         <p className='text-[#0A337A]'>Vasitum</p>
      </div>
      
      <div className="mainmenu text-sm">
        <ul>
           <li>Main Menu</li>
           <li className='text-red-500 flex justify-center items-center'> -- </li> 
           <li className='flex flex-row space-x-2 '><img src='ic_dashboard.png'/> <h1>Dashboard</h1></li> 
           <li></li> 

        </ul>
      </div>
    </div>
  )
}

export default Left
