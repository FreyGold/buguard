import { X } from "lucide-react";
import { ThemeSwitch } from "./ThemeSwitch";
import Link from "next/link";
type SidebarProps = {
   toggle: () => void;
};

function Sidebar({ toggle }: SidebarProps) {
   return (
      <div className="flex flex-col w-screen h-screen gap-8 font-semibold text-lg items-center justify-center dark:bg-black bg-white">
         <h3>Ahmed Tawfik</h3>
         <div className="flex flex-col font-normal gap-4 text-lg items-center">
            <Link href={`/posts/`} onClick={toggle}>
               Blog
            </Link>
            <h4>Projects</h4>
            <h4>About</h4>
            <h4>Newsletter</h4>
            <ThemeSwitch />
         </div>
         <div className="cursor-pointer">
            <X onClick={toggle} />
         </div>
      </div>
   );
}

export default Sidebar;
