import { X } from "lucide-react";
import { ThemeSwitch } from "./theme-switch";
type SidebarProps = {
   toggle: () => void;
};

function Sidebar({ toggle }: SidebarProps) {
   return (
      <div className="flex flex-col w-screen h-screen gap-8 font-semibold text-lg items-center justify-center dark:bg-black bg-white">
         <h3>Ahmed Tawfik</h3>
         <div className="flex flex-col font-normal gap-4 text-lg items-center">
            <h4>Blog</h4>
            <h4>Projects</h4>
            <h4>About</h4>
            <h4>Newsletter</h4>
            <ThemeSwitch />
         </div>
         <div className="justify-self-end-safe">
            <X onClick={toggle} />
         </div>
      </div>
   );
}

export default Sidebar;
