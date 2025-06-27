"use client";
import Sidebar from "@/components/ui/sidebar";
import { ThemeSwitch } from "@/components/ui/theme-switch";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Slide } from "./Slide";

function Navigation() {
   const [open, setOpen] = useState(false);
   const toggle = () => {
      setOpen((open) => !open);
   };
   return (
      <div>
         <div className="flex justify-between h-20 items-center text-xl font-semibold px-5">
            <p>Your Name</p>
            <ThemeSwitch />
            <FaBars onClick={toggle} />
         </div>
         <div className="flex mt-4 flex-col items-center gap-3 text-center">
            <div className="h-[1px] bg-[#00000057] dark:bg-white dark:opacity-30  w-[100vw]"></div>
            <h3 className="text-7xl font-[700]">THE BLOG</h3>
            <div className="h-[1px] bg-[#00000057] dark:bg-white dark:opacity-30 w-[100vw]"></div>
         </div>
         <Slide open={open}>
            <Sidebar toggle={toggle} />
         </Slide>
      </div>
   );
}

export default Navigation;
