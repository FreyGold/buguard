"use client";
import { motion } from "framer-motion";
import { JSX } from "react";

type Props = {
   children: JSX.Element;
   open: boolean;
};
const Slide = ({ children, open }: Props) => {
   return (
      <motion.div
         className="fixed top-0 left-0 right-0 bottom-0 h-screen w-screen z-50 bg-white dark:bg-black will-change-transform touch-none"
         variants={{
            hidden: {
               y: "-100%",
               opacity: 0,
               transition: {
                  type: "tween",
                  duration: 0.5,
                  ease: "easeInOut",
               },
            },
            visible: {
               y: "0%",
               opacity: 1,
               transition: {
                  type: "tween",
                  duration: 0.5,
                  ease: "easeInOut",
               },
            },
         }}
         initial="hidden"
         animate={open ? "visible" : "hidden"}>
         {children}
      </motion.div>
   );
};

export { Slide };
