import React from "react";
import { useTheme } from "next-themes";

const ToggleButton = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
    return (
        
        <label className="relative inline-flex items-center cursor-pointer">
  <input onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))} type="checkbox" value="" className="sr-only peer"/>

  <div className="w-11 h-6 rounded-full dark:border-4 dark:border-bglight bg-textlight  peer peer-focus:ring-4  peer-focus:to-buttonsecondarylight dark:peer-focus:to-buttonsecondarydark peer-checked:after:translate-x-full peer-checked:after:border-4 peer-checked:after:border-white  after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:to-buttonsecondarydark peer-checked:border-white-2 after:border-4 " ></div>
  <span className=" hidden xsm:block ml-3 text-sm font-medium text-textlight dark:text-textdark">switch me off</span>
</label>


      );
    };

export default ToggleButton;
 
