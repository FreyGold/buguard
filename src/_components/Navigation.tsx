import { ThemeSwitch } from "@/components/ui/theme-switch";
import { FaBars } from "react-icons/fa";

function Navigation() {
   return (
      <div>
         <div className="flex justify-between h-20 items-center text-xl font-semibold px-5">
            <p>Your Name</p>
            <ThemeSwitch />
            <FaBars />
         </div>
         <div className="flex mt-4 flex-col items-center gap-3 text-center">
            <div className="h-[1px] bg-[#00000057] w-[100vw]"></div>
            <h3 className="text-7xl font-[700]">THE BLOG</h3>
            <div className="h-[1px] bg-[#00000057] w-[100vw]"></div>
         </div>
      </div>
   );
}

export default Navigation;
