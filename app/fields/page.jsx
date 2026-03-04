"use client";

import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

const fields = [
  {
    num: "01",
    title: "Embedded Systems & IoT",
    description:
      "Specialized in LoRa/RF communication, firmware development, and 5G architecture. Experience in designing autonomous systems, mesh networks, and low-power embedded solutions with C/C++ and Linux.",
    href: "/work",
  },
  {
    num: "02",
    title: "Cloud Infrastructure",
    description:
      "Expertise in AWS and Microsoft Azure deployment, containerization with Docker, CI/CD pipeline orchestration, and cost optimization. Managed infrastructure for enterprise-scale applications.",
    href: "/work",
  },
  {
    num: "03",
    title: "Full-Stack Development",
    description:
      "End-to-end web application development with React, Node.js, and MongoDB. Agile methodology proficiency with Jira and Git. Proven ability to lead technical teams and deliver production systems.",
    href: "/work",
  },
];

const Fields = () => {
  return (
    <section className="min-h-[100vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {fields.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/*top*/}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transitions-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/*heading*/}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                {/*description*/}
                <p className="text-white/60">{service.description}</p>
                {/*border*/}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Fields;
