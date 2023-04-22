import React from 'react'
import ToggleButton from '../ToggleButton/ToggleButton'
import Link from "next/link";
// import Image from 'next/image';


function NavBar() {
  return (
    <div style={{position:'sticky', top: '0px', zIndex: '999'}} className="flex justify-center navbar p-6 xsm:p-10 max-w-screen-xl ml-auto mr-auto bg-bglightopa dark:bg-gradient-to-r from-bgdark to-bgdark2 rounded-full
">
  <div className="flex-1">
  
    {/* <Image className='w-6 h-6 xsm:w-8 xsm:h-8' src='/logotondo.svg' alt='logo' width='25' height='20'/> */}

    <Link href='' className="text-sm xsm:text-xl text-textlight dark:text-textdark">federicacostantino</Link>
  </div>
  <div className="flex flex-row gap-2">
   

     <ToggleButton/>
   
  </div>
  </div>

  )
}

export default NavBar