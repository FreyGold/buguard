"use client";
import Sidebar from "@/components/ui/Sidebar";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Slide } from "./Slide";
import Link from "next/link";
import { ThemeSwitch } from "@/components/ui/ThemeSwitch";

function Navigation() {
   const [open, setOpen] = useState(false);
   const toggle = () => {
      setOpen((open) => !open);
   };
   return (
      <div>
         <div className="flex justify-between h-20 items-center text-xl font-semibold px-5">
            <Link href={"/posts"}>Ahmed Tawfik</Link>
            <div onClick={toggle} className="md:hidden cursor-pointer">
               <FaBars />
            </div>
            <div className="hidden md:block">
               <ThemeSwitch />
            </div>
         </div>

         <Slide open={open}>
            <Sidebar toggle={toggle} />
         </Slide>
      </div>
   );
}

export default Navigation;
