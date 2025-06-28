"use client";

import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

export function ThemeSwitch() {
   const { setTheme, resolvedTheme } = useTheme();

   return (
      <div
         className="relative flex px-2 h-8 w-16 justify-between dark:bg-white bg-black rounded-3xl items-center cursor-pointer transition-colors duration-300"
         onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}>
         {/* Ball */}
         <span
            className={`
            absolute top-1/2 -translate-y-1/2 right-1
            h-6 w-6 rounded-full  shadow-md transition-all duration-400
            ${
               resolvedTheme === "dark"
                  ? "-translate-x-8 bg-black"
                  : "translate-x-0 bg-white"
            }
         `}
            style={{ zIndex: 1 }}
         />
         <div>
            {resolvedTheme === "light" && (
               <FiSun color="white" onClick={() => setTheme("dark")}></FiSun>
            )}
         </div>
         <div>
            {resolvedTheme === "dark" && (
               <FiMoon color="black" onClick={() => setTheme("light")}></FiMoon>
            )}
         </div>
      </div>
   );
}
