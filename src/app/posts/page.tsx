import { Pagination } from "@/components/ui/pagination";
import Posts from "../_components/Posts";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi";

function Page() {
   return (
      <div className="flex gap-9 mt-4 p-8 flex-col font-semibold">
         <h3 className="text-2xl">Recent Blog Posts</h3>
         <Posts />
         <h5 className=" text-lg text-[#6941C6]">Sunday , 1 Jan 2023</h5>
         <div className="flex justify-between items-center">
            <h2 className="text-2xl">UX review presentations</h2>
            <FiArrowUpRight />
         </div>
         <h6 className="font-normal text-[#667085] text-base leading-6 tracking-wide">
            How do you create compelling presentations that wow your colleagues
            and impress your managers?
         </h6>
         <div className="flex gap-2 text-sm leading-6 tracking-wide font-medium">
            <div className="bg-amber-500 rounded-3xl p-2">Helllo</div>
            <div className="bg-amber-700 rounded-3xl p-2">Again</div>
         </div>
      </div>
   );
}

export default Page;
