import React from 'react'
import ToggleButton from '../ToggleButton/ToggleButton'
import Link from "next/link";


function NavBar() {
  return (
    <div className="flex justify-center navbar p-6 xsm:p-10 max-w-screen-xl ml-auto mr-auto">
  <div className="flex-1">
  <div className='w-4 h-4 rounded-sm mr-2 bg-textlight'></div>
    <Link href='/' className="text-base xsm:text-xl text-textlightdark:text-textdark">federicacostantino</Link>
  </div>
  <div className="flex flex-row gap-2 sm:gap-6">
    {/* <ul className="menu menu-horizontal"> */}
      {/* <li> */} 
      <a><button type="button" className=" text-buttonprimarylight dark:text-textdark border-2 text-xsm tracking-normal font-bold border-buttonprimarylight dark:border-buttonsecondarylight pr-2 pl-2 pt-1 pb-1 rounded-full
      ms:text-sm ms:tracking-wider">RESUME</button>
</a>

     <ToggleButton/>
   
    {/* </ul> */}
  </div>
</div>
    // <div className='flex flex-row gap-2'>
    //     <h3 className='flex'>federicacostantino</h3>
    //     <button type="button" className="text-textdark border-2 border-buttonsecondarylight pl-2 pr-2 rounded-full">RESUME</button>

    //     <ToggleButton/>

    // </div>
  )
}

export default NavBar