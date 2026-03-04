"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowLeft, BsGithub, BsArrowUpRight } from "react-icons/bs";

export default function ForestFireDetection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[100vh] py-12 xl:py-24"
    >
      <div className="container mx-auto">
        {/* Back Button */}
        <Link href="/case-studies" className="flex items-center gap-2 text-accent hover:text-white transition-all mb-8">
          <BsArrowLeft /> Back to Case Studies
        </Link>

        {/* Header */}
        <div className="mb-12">
          <p className="text-accent text-sm font-semibold mb-2">2024</p>
          <h1 className="text-5xl xl:text-6xl font-bold mb-4">
            Autonomous Forest Fire Detection System
          </h1>
          <p className="text-white/60 text-lg max-w-[700px]">
            Master's degree capstone project featuring a LoRa-based autonomous system for early wildfire detection in remote, unattended areas with real-time monitoring and alert capabilities.
          </p>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 py-8 border-y border-white/10">
          <div>
            <p className="text-accent font-bold text-2xl">2024</p>
            <p className="text-white/60 text-sm">Project Year</p>
          </div>
          <div>
            <p className="text-accent font-bold text-2xl">5km+</p>
            <p className="text-white/60 text-sm">Transmission Range</p>
          </div>
          <div>
            <p className="text-accent font-bold text-2xl">Real-time</p>
            <p className="text-white/60 text-sm">Data Streaming</p>
          </div>
          <div>
            <p className="text-accent font-bold text-2xl">IoT</p>
            <p className="text-white/60 text-sm">Multiple Sensors</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Challenge */}
            <div>
              <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Forest fires pose a significant threat to ecosystems and communities. Early detection is critical for effective response and mitigation. Traditional monitoring systems face challenges in remote, unattended areas where infrastructure is limited. The goal was to design an autonomous, low-power system capable of detecting early fire indicators across vast forestry areas.
              </p>
              <p className="text-white/80 leading-relaxed">
                Key constraints included power limitations for remote deployment, reliability in harsh environmental conditions, and cost-effectiveness for large-scale deployment.
              </p>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-3xl font-bold mb-4">The Solution</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-accent mb-2">System Architecture</h3>
                  <p className="text-white/80">
                    Developed a distributed IoT system using LoRa technology for long-range, low-power communication. Multiple sensor nodes deployed across forest areas collect environmental data including temperature, humidity, and air quality indicators of potential fire activity.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-accent mb-2">Core Components</h3>
                  <ul className="space-y-2 text-white/80">
                    <li>• <span className="text-accent">Sensor Nodes:</span> Arduino/ESP32 microcontrollers with environmental sensors</li>
                    <li>• <span className="text-accent">LoRa Gateway:</span> Central aggregation point with 5km+ transmission range</li>
                    <li>• <span className="text-accent">Backend Infrastructure:</span> Real-time data processing and alert system</li>
                    <li>• <span className="text-accent">RF Communication:</span> Optimized LoRa modulation parameters for harsh conditions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-accent mb-2">Technical Implementation</h3>
                  <p className="text-white/80">
                    Implemented in C/C++ for embedded systems with optimization for power consumption. Applied signal processing for noise reduction and false alarm elimination. Created firmware for autonomous operation with fallback mechanisms for reliability.
                  </p>
                </div>
              </div>
            </div>

            {/* Results */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Key Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#232329] p-6 rounded-lg">
                  <p className="text-accent font-bold text-2xl mb-2">5km+</p>
                  <p className="text-white/80">Coverage per gateway node</p>
                </div>
                <div className="bg-[#232329] p-6 rounded-lg">
                  <p className="text-accent font-bold text-2xl mb-2">Low-Power</p>
                  <p className="text-white/80">30+ day battery autonomy</p>
                </div>
                <div className="bg-[#232329] p-6 rounded-lg">
                  <p className="text-accent font-bold text-2xl mb-2">Real-time</p>
                  <p className="text-white/80">Sub-second alert triggering</p>
                </div>
                <div className="bg-[#232329] p-6 rounded-lg">
                  <p className="text-accent font-bold text-2xl mb-2">Scalable</p>
                  <p className="text-white/80">Multi-node mesh capability</p>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {["LoRa", "C/C++", "Arduino", "ESP32", "RF Communication", "IoT Protocols", "Linux", "Real-time Systems", "Signal Processing"].map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-accent/10 text-accent rounded-full border border-accent/20 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Learnings */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Key Learnings</h2>
              <ul className="space-y-3 text-white/80">
                <li>✓ Deep understanding of LoRa modulation and RF communication theory</li>
                <li>✓ System architecture design for autonomous IoT deployments</li>
                <li>✓ Power optimization techniques for battery-powered systems</li>
                <li>✓ Real-time data processing and alert system design</li>
                <li>✓ Embedded systems development and firmware optimization</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <div className="bg-[#232329] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4">Project Details</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-white/60 mb-1">Type</p>
                  <p className="text-white font-semibold">Master's Capstone</p>
                </div>
                <div>
                  <p className="text-white/60 mb-1">Duration</p>
                  <p className="text-white font-semibold">6 months</p>
                </div>
                <div>
                  <p className="text-white/60 mb-1">Focus</p>
                  <p className="text-white font-semibold">Embedded IoT Systems</p>
                </div>
                <div>
                  <p className="text-white/60 mb-1">Team Size</p>
                  <p className="text-white font-semibold">Solo Project</p>
                </div>
              </div>
            </div>

            {/* Tech Stack Widget */}
            <div className="bg-[#232329] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4">Primary Skills</h3>
              <div className="space-y-2 text-sm text-white/80">
                <p>🟦 LoRa/RF Communication</p>
                <p>🟦 C/C++ Programming</p>
                <p>🟦 IoT Architecture</p>
                <p>🟦 Signal Processing</p>
                <p>🟦 Real-time Systems</p>
              </div>
            </div>

            {/* Links */}
            <div className="bg-[#232329] rounded-xl p-6 space-y-3">
              <Link href="https://github.com/miguelbidarra/forest-fire-detection" target="_blank" className="flex items-center gap-2 text-accent hover:text-white transition-all">
                <BsGithub /> View Code
              </Link>
              <Link href="/contact" className="flex items-center gap-2 text-accent hover:text-white transition-all">
                <BsArrowUpRight /> Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
