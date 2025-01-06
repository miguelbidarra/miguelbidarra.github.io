"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import profile from "@/public/profile.png";

const Photo = () => {
  return (
    <div>
      <motion.div>
        <div>
          <Image
            src={profile}
            alt="Miguel Barbosa"
            width={500}
            height={500}
            className="rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
