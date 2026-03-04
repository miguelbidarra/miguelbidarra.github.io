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
  SiDocker,
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
    "Electronic and Telecommunications Engineer with expertise in embedded systems, 5G technology, and cloud infrastructure. Dedicated to continuous process improvement and productive workflows with a methodical, collaborative mindset toward solving complex technical challenges. Demonstrated leadership experience managing teams and digital infrastructure at scale.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Miguel Barbosa",
    },
    // add phone, experience, nationality, freelance = vavalabel
    {
      fieldName: "Phone",
      fieldValue: "+351 964 632 842",
    },
    {
      fieldName: "Email",
      fieldValue: "miguelbidarrab@gmail.com",
    },
    {
      fieldName: "Experience",
      fieldValue: "4 years (1 professional)",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Portuguese",
    },
    {
      fieldName: "Availability",
      fieldValue: "Open to opportunities",
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
      company: "Altice Labs",
      position: "Embedded Software Engineer",
      duration: "Aug 2024 - Present",
    },
    {
      company: "Erasmus Student Network (ESN) Portugal",
      position: "IT Manager",
      duration: "Aug 2025 - Present",
    },
    {
      company: "Sinuta",
      position: "Technical Intern",
      duration: "Aug 2022 - Sep 2022",
    },
    {
      company: "CERN",
      position: "Research Intern",
      duration: "2017",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Master's degree in Electronics and Telecommunications Engineering from University of Aveiro. Core expertise in programming, Linux OS, control systems, and RF communication with practical experience in IoT system design.",
  items: [
    {
      institution: "University of Aveiro",
      degree: "Master's in Electronics and Telecommunications Engineering",
      duration: "Sep 2017 - Jul 2024",
    },
  ],
};

const tools = {
  title: "Technical Skills",
  description:
    "Specialized in embedded systems and Linux environments with cloud infrastructure expertise. Experienced in IoT protocol implementation and full-stack development.",
  topTools: [
    {
      name: "C/C++",
      icon: <TbBrandCpp className="text-white" />,
    },
    {
      name: "Linux",
      icon: <FaLinux className="text-white" />,
    },
    {
      name: "LoRa",
      icon: <Image src={LoraIcon} alt="Lora Technology" className="p-5" />,
    },
    {
      name: "5G Architecture",
      icon: <SiAltiumdesigner className="text-white" />,
    },
  ],
  otherTools: [
    {
      name: "Python",
      icon: <FaPython className="text-white" />,
    },
    {
      name: "JavaScript",
      icon: <FaReact className="text-white" />,
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
      name: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      name: "AWS",
      icon: <FaJenkins className="text-white" />,
    },
    {
      name: "Microsoft Azure",
      icon: <FaConfluence className="text-white" />,
    },
    {
      name: "Docker",
      icon: <SiDocker className="text-white" />,
    },
    {
      name: "Github Actions",
      icon: <FaGitAlt className="text-white" />,
    },
    {
      name: "Arduino",
      icon: <SiArduino className="text-white" />,
    },
    {
      name: "Bash",
      icon: <SiGnubash className="text-white" />,
    },
    {
      name: "Git",
      icon: <FaGitAlt className="text-white" />,
    },
    {
      name: "Jira",
      icon: <SiJira className="text-white" />,
    },
    {
      name: "Confluence",
      icon: <FaConfluence className="text-white" />,
    },
    {
      name: "Java",
      icon: <FaJava className="text-white" />,
    },
  ],
};

const competitions = {
  title: "Key Achievements",
  description: "Notable accomplishments in embedded systems, IoT, and infrastructure management",
  items: [
    {
      title: "Forest Fire Detection System",
      issuer: "Autonomous LoRa-based system for remote area monitoring",
      year: "2024",
    },
    {
      title: "5G Radio Unit Optimization",
      issuer: "High-speed data throughput optimization in C/C++ on Linux",
      year: "2024-Present",
    },
    {
      title: "IoT Mesh Network Design",
      issuer: "1km low-power ESP32 mesh network with LoRa capability",
      year: "2022",
    },
    {
      title: "Digital Infrastructure Leader",
      issuer: "Managing 4-person team & deployment of 12+ websites for ESN Portugal",
      year: "2025-Present",
    },
  ],
};

const certifications = {
  title: "Certifications & Languages",
  description: "Professional certifications and language proficiency",
  items: [
    {
      category: "Technical",
      certifications: [
        { name: "5G Radio Unit Architecture", issuer: "Altice Labs Professional Development", year: "2024" },
        { name: "IoT Systems Design & Implementation", issuer: "Industry Experience", year: "2024" },
        { name: "Linux System Administration", issuer: "Professional Experience", year: "2023" },
      ]
    },
    {
      category: "Languages",
      certifications: [
        { name: "Portuguese", level: "Native", year: "—" },
        { name: "English", level: "Fluent (C2)", year: "—" },
        { name: "Spanish", level: "Upper-Intermediate (B2)", year: "—" },
        { name: "Italian", level: "Elementary (A1)", year: "—" },
      ]
    }
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
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
            <TabsTrigger value="competitions">Achievements</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/*content*/}
          <div className="min-h-[600px] w-full">
            {/*experience*/}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left h-full">
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
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left h-full">
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
            <TabsContent value="tools" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left h-full">
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
              <div className="flex flex-col gap-[30px] text-center xl:text-left h-full">
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

            {/*competitions*/}
            <TabsContent value="competitions" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left h-full">
                <h3 className="text-4xl font-bold">{competitions.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {competitions.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[30px]">
                    {competitions.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-auto py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.year}</span>
                          <h3 className="text-xl  min-h-[60px] text-center lg:text-left">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.issuer}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/*certifications*/}
            <TabsContent value="certifications" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left h-full">
                <h3 className="text-4xl font-bold">{certifications.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {certifications.description}
                </p>
                <div className="space-y-8">
                  {certifications.items.map((section, idx) => (
                    <div key={idx}>
                      <h4 className="text-2xl font-bold mb-4">{section.category}</h4>
                      <ScrollArea className="h-auto max-h-[400px]">
                        <ul className="grid grid-cols-1 gap-[20px]">
                          {section.certifications.map((cert, certIdx) => (
                            <li
                              key={certIdx}
                              className="bg-[#232329] h-auto py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                            >
                              <span className="text-accent text-sm">{cert.year}</span>
                              <h3 className="text-lg font-semibold text-center lg:text-left">
                                {cert.name}
                              </h3>
                              <div className="flex items-center gap-3">
                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                <p className="text-white/60">{cert.issuer || cert.level}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </ScrollArea>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
