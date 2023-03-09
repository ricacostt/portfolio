import React from 'react'
import ToggleButton from '../ToggleButton/ToggleButton'
import Link from "next/link";


function NavBar() {
  return (
    <div className="navbar">
  <div className="flex-1">
  
    <Link href='/' className="text-xl text-textlight dark:text-textdark">federicacostantino</Link>
  </div>
  <div className="flex flex-row gap-10">
    {/* <ul className="menu menu-horizontal"> */}
      {/* <li> */}
      <a><button type="button" className=" text-buttonprimarylight dark:text-textdark border-2 text-sm tracking-wider font-semibold border-buttonprimarylight dark:border-buttonsecondarylight pr-2 pl-2 pt-1 pb-1 rounded-full">RESUME</button>
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