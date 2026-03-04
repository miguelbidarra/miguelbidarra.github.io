"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const caseStudies = [
  {
    id: "forest-fire-detection",
    title: "Autonomous Forest Fire Detection System",
    subtitle: "Master's Degree Capstone Project",
    description: "A LoRa-based autonomous system for early wildfire detection in remote areas with real-time monitoring.",
    technologies: ["LoRa", "C/C++", "IoT", "RF Communication", "Linux"],
    impact: "Designed complete system architecture for remote forest monitoring",
    year: "2024",
    featured: true,
  },
  {
    id: "rebike",
    title: "Rebike - Bicycle Renting Platform",
    subtitle: "Founder & Full-Stack Developer",
    description: "Second-hand bicycle renting service with fleet management and customer booking system.",
    technologies: ["React", "Node.js", "MongoDB", "AWS", "Express"],
    impact: "Complete platform design and implementation with scalable architecture",
    year: "2025",
    featured: true,
  },
];

export default function CaseStudies() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl xl:text-5xl font-bold mb-4">
            Case <span className="text-accent">Studies</span>
          </h1>
          <p className="text-white/60 max-w-[600px]">
            Detailed exploration of significant projects showcasing technical depth, problem-solving, and real-world impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * (index + 1) }}
              className="group"
            >
              <Link href={`/case-studies/${study.id}`}>
                <div className="bg-[#232329] rounded-xl p-8 h-full hover:bg-[#2a2a30] transition-all duration-300 cursor-pointer">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-accent text-sm font-semibold mb-2">{study.year}</p>
                      <h2 className="text-2xl font-bold group-hover:text-accent transition-all">
                        {study.title}
                      </h2>
                      <p className="text-white/60 text-sm mt-1">{study.subtitle}</p>
                    </div>
                    <BsArrowRight className="text-xl text-accent group-hover:translate-x-2 transition-transform" />
                  </div>

                  <p className="text-white/80 mb-4">{study.description}</p>

                  <div className="mb-4">
                    <p className="text-white/60 text-sm mb-2">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {study.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs">
                          +{study.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <p className="text-white/60 text-sm italic">{study.impact}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
