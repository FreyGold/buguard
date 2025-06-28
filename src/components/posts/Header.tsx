function Header() {
   return (
      <div className="flex mt-4 flex-col items-center gap-3 text-center">
         <div className="h-[1px] bg-[#00000057] dark:bg-white dark:opacity-30 w-[100vw]"></div>
         <h3 className="text-7xl font-bold md:text-[160px] lg:text-[240px]">
            THE BLOG
         </h3>
         <div className="h-[1px] bg-[#00000057] dark:bg-white dark:opacity-30 w-[100vw]"></div>
      </div>
   );
}

export default Header;
