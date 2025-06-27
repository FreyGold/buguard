"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import { JSX, useRef, useEffect } from "react";

type Props = {
   children: JSX.Element;
   direction?: string;
};
const Reveal = ({ children, direction = "left" }: Props) => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });
   const mainControls = useAnimation();
   useEffect(() => {
      if (isInView) {
         mainControls.start("visible");
      }
   });
   return (
      <div ref={ref} className="relative overflow-hidden w-full">
         <motion.div
            variants={{
               hidden: { opacity: 0, x: direction == "left" ? -100 : 100 },
               visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5 }}>
            {children}
         </motion.div>
      </div>
   );
};

export { Reveal };
