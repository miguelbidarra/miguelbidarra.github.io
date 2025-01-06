"use client";

import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaJenkins,
  FaConfluence,
  FaGitAlt,
  FaLinux,
  FaSlack,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiGnubash,
  SiAltiumdesigner,
  SiJira,
  SiMqtt,
  SiArduino,
  SiMongodb,
  SiExpress,
  SiPrisma,
  SiNotion,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { BsMicrosoftTeams } from "react-icons/bs";
import LoraIcon from "@/public/assets/brands/lora-white.png";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

const about = {
  title: "About Me",
  description:
    "I am a full stack developer with a passion for creating beautiful and functional websites. I have experience with a variety of technologies including HTML, CSS, JavaScript, React, Node.js, and more. I am always looking to learn new things and improve my tools.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Miguel Barbosa",
    },
    // add phone, experience, nationality, freelance = vavalabel
    {
      fieldName: "Phone",
      fieldValue: "123-456-7890",
    },
    {
      fieldName: "Email",
      fieldValue: "miguelbidarrab@gmail.com",
    },
    {
      fieldName: "Experience",
      fieldValue: "1 years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Portuguese",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I have experience working with a variety of technologies and tools. Here are some of the highlights:",
  items: [
    {
      company: "WithUs @ AlticeLabs",
      position: "Software Developer",
      duration: "2024 - Present",
    },
    {
      company: "ESN Aveiro",
      position: "Web Project Administrator",
      duration: "2022 - 2023",
    },
    {
      company: "Sinuta",
      position: "Intern",
      duration: "2022 - 2022",
    },
    {
      company: "CERN",
      position: "Intern",
      duration: "2017 - 2017",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "I have a degree in Eletronics and Telecommunication and have taken a variety of courses to improve my tools. Here are some of the highlights:",
  items: [
    {
      institution: "University of Aveiro",
      degree: "Master in Eletronics and Telecommunications Engineering",
      duration: "2021 - 2024",
    },
    {
      institution: "University of Aveiro",
      degree: "BSc in Eletronics and Telecommunications Engineering",
      duration: "2017 - 2021",
    },
  ],
};

const tools = {
  title: "Tools and Technologies",
  description:
    "I have experience with a variety of technologies and tools. Here are some of the highlights:",
  topTools: [
    {
      name: "Bash",
      icon: <SiGnubash className="text-white" />,
    },
    {
      name: "Linux",
      icon: <FaLinux className="text-white" />,
    },
    {
      name: "C/C++",
      icon: <TbBrandCpp className="text-white" />,
    },
    {
      name: "LoRa",
      icon: <Image src={LoraIcon} alt="Lora Technology" className="p-5" />,
    },
  ],
  otherTools: [
    {
      name: "Java",
      icon: <FaJava className="text-white" />,
    },
    {
      name: "Python",
      icon: <FaPython className="text-white" />,
    },

    {
      name: "Jenkins",
      icon: <FaJenkins className="text-white" />,
    },
    {
      name: "Confluence",
      icon: <FaConfluence className="text-white" />,
    },
    {
      name: "Jira",
      icon: <SiJira className="text-white" />,
    },
    {
      name: "Git",
      icon: <FaGitAlt className="text-white" />,
    },
    {
      name: "Slack",
      icon: <FaSlack className="text-white" />,
    },
    {
      name: "Microsoft Teams",
      icon: <BsMicrosoftTeams className="text-white" />,
    },
    {
      name: "Altium Designer",
      icon: <SiAltiumdesigner className="text-white" />,
    },
    {
      name: "MQTT",
      icon: <SiMqtt className="text-white" />,
    },
    {
      name: "Arduino",
      icon: <SiArduino className="text-white" />,
    },
    {
      name: "React",
      icon: <FaReact className="text-white" />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
    },
    {
      name: "Express",
      icon: <SiExpress />,
    },
    {
      name: "Prisma",
      icon: <SiPrisma />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      name: "Notion",
      icon: <SiNotion />,
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.4,
          delay: 0.5,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto ">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
            <TabsTrigger value="competitions">Competitions</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/*content*/}
          <div className="min-h-[70px] w-full">
            {/*experience*/}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/*dot*/}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/*education*/}
            <TabsContent value="education" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[200px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-lg  min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/*dot*/}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/*tools*/}
            <TabsContent value="tools" className="w-full ">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <div>
                  <h3 className="text-4xl font-bold">{tools.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {tools.description}
                  </p>
                </div>
                <h4 className="text-2xl font-bold">Top Tools</h4>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {tools.topTools.map((tool, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {tool.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="capitalize">
                            {tool.name}
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
                <h4 className="text-2xl font-bold">Other Tools</h4>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {tools.otherTools.map((tool, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {tool.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="capitalize">
                            {tool.name}
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/*about*/}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex justify-center items-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
