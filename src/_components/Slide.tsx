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
         className="fixed inset-0 z-50 will-change-transform pointer-events-auto"
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
