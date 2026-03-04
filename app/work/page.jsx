"use client";

import React from "react";

import { motion } from "framer-motion";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderButtons from "@/components/WorkSliderButtons";

import eventManagementSystem from "@/public/assets/work/ems.jpg";
import wildfireMonitoringSystem from "@/public/assets/work/wms.jpg";
import volumeDetectionApplication from "@/public/assets/work/pointcloud.jpg";
import rebike from "@/public/assets/work/rebike.png";

const projects = [
  {
    num: "01",
    name: "Autonomous Forest Fire Detection System",
    title: "Autonomous Forest Fire Detection System",
    description:
      "Designed and implemented a LoRa-based autonomous system architecture for early wildfire detection in remote areas. Featured distributed sensor nodes with real-time data aggregation, remote monitoring capabilities, and system integration from hardware to cloud backend. Master's degree capstone project.",
    stack: [
      {
        name: "LoRa",
      },
      {
        name: "IoT",
      },
      {
        name: "C/C++",
      },
      {
        name: "RF Communication",
      },
    ],
    image: wildfireMonitoringSystem,
    live: "#projects",
    github: "https://github.com/miguelbidarra/forest-fire-detection",
  },
  {
    num: "02",
    name: "Low-Power IoT Mesh Network",
    title: "Low-Power IoT Mesh Network (1km Range)",
    description:
      "Engineered a 1km communication mesh network utilizing ESP32 microcontrollers with LoRa modulation. Analyzed LoRa parameters and physical limitations while optimizing for minimal power consumption. Application in distributed IoT sensor networks.",
    stack: [
      {
        name: "LoRa",
      },
      {
        name: "ESP32",
      },
      {
        name: "C/C++",
      },
      {
        name: "Firmware",
      },
    ],
    image: volumeDetectionApplication,
    live: "#projects",
    github: "https://github.com/miguelbidarra/iot-mesh-network",
  },
  {
    num: "03",
    name: "Rebike - Bicycle Renting Service",
    title: "Rebike - Bicycle Renting Service",
    description:
      "Founded and developed a second-hand bicycle renting service platform with full-stack web application. Features include fleet management, customer booking system, payment integration, and operational analytics. Future roadmap includes RAG system for intelligent database querying.",
    stack: [
      {
        name: "React",
      },
      {
        name: "Node.js",
      },
      {
        name: "MongoDB",
      },
      {
        name: "AWS",
      },
    ],
    image: rebike,
    live: "#projects",
    github: "https://github.com/miguelbidarra/rebike",
  },
  {
    num: "04",
    name: "5G Radio Unit Software",
    title: "5G Radio Unit Software Optimization",
    description:
      "Currently developing and optimizing 5G Radio Unit software at Altice Labs. Focus on high-speed data throughput optimization, hardware-software integration in C/C++ on Linux platform. Implemented CI/CD pipeline via Github Actions for product validation and automated testing.",
    stack: [
      {
        name: "5G",
      },
      {
        name: "C/C++",
      },
      {
        name: "Linux",
      },
      {
        name: "GitHub Actions",
      },
    ],
    image: eventManagementSystem,
    live: "#projects",
    github: "#projects",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update project state based on the current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80px] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/*outline*/}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/*project name*/}
              <h2 className="text-[42px] text-white font-bold leading-none group-hover:text-accent transition-all duration-500">
                {project.name}
              </h2>
              {/*project description*/}
              <p className="text-white/60">{project.description}</p>
              {/*stack*/}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {/*remove comma if last item*/}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/*border*/}
              <div className="border border-white/20"></div>
              {/*buttons*/}
              <div className="flex items-center gap-4">
                {/*live project button*/}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>View live</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/*github button*/}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center  items-center bg-pink-50/20">
                      {/*overlay*/}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/*image*/}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/*slider navigation*/}
              <WorkSliderButtons
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
