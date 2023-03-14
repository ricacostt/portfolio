import React from 'react'
import ToggleButton from '../ToggleButton/ToggleButton'
import Link from "next/link";
import Image from 'next/image';


function NavBar() {
  return (
    <div style={{position:'sticky', top: '0px'}} className="flex justify-center navbar p-6 xsm:p-10 max-w-screen-xl ml-auto mr-auto bg-bglightopa dark:bg-bgdarkopa
">
  <div className="flex-1">
  
    <Image className='w-6 h-6 xsm:w-10 xsm:h-10' src='/logo1.svg' width='40' height='40' alt='logo'/>

    <Link href='' className="text-sm xsm:text-xl text-textlight dark:text-textdark">federicacostantino</Link>
  </div>
  <div className="flex flex-row gap-4 ms:gap-6">
   
      {/* <a href='https://www.dropbox.com/s/j71qp9gj0uu0uo8/FedericaCostantinoCV.pdf?dl=0' target="_blank"
              rel="noopener noreferrer" className=" text-buttonprimarylight dark:text-textdark border-2 text-xsm tracking-normal font-bold border-buttonprimarylight dark:border-buttonsecondarylight pr-2 pl-2 pt-1 pb-1 rounded-full
      ms:text-sm ms:tracking-wider">RESUME
</a> */}
{/* <div>
  <a target="_blank" rel="noopener noreferrer" href="https://www.codewars.com/users/ricacostt"><img src="https://www.codewars.com/users/ricacostt/badges/micro" alt="codewars badge micro" /></a>

  </div> */}
     <ToggleButton/>
   
  </div>
  </div>

  )
}

export default NavBar