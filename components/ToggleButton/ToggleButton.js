import React from "react";
import { useTheme } from "next-themes";
import styles from './ToggleButton.module.css'

const ToggleButton = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
    return (
        
        <label className="relative inline-flex items-center cursor-pointer">
  <input onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))} type="checkbox" value="" className="sr-only peer"/>
  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Switch me off</span>
</label>

    //    <button
    //   onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
    //   className="flex bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800 px-8 py-2 text-2xl md:text-4xl rounded-lg"
    // >
    //   Switch me off{" "}
    // </button>


//     <label onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))} className={styles.switch}>
//   <input type="checkbox"/>
//   <span className={styles.slider}></span>
// </label>
    
      );
    };

export default ToggleButton;
 
