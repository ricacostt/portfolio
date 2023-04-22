import React from "react";
import { useTheme } from "next-themes";
import { BsToggle2On, BsToggle2Off } from 'react-icons/bs';


const ToggleButton = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === 'dark'){
    return (
      <>
      <BsToggle2On className='w-8 h-6 z-40' role='button'  onClick={()=>setTheme('light')}/>
       <span className="hidden md:block ml-3 text-sm font-medium text-textlight dark:text-textdark">switch me off</span>
       </>
      )
    }
    else {
      return (
        <>
        <BsToggle2Off className='w-6 h-6 z-40' role='button' onClick={()=>setTheme('dark')}/>
        <span className="hidden md:block ml-3 text-sm font-medium text-textlight dark:text-textdark">switch me on</span>
        </>
      )
    }
    }

export default ToggleButton;
 
