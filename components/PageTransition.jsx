"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathName = usePathname();
  return (
    <AnimatePresence>
      <div key={pathName}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 0.2, duration: 0.3, ease: "easeIn" },
          }}
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
        >
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
