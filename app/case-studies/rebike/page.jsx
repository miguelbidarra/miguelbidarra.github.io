"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowLeft, BsGithub, BsArrowUpRight } from "react-icons/bs";

export default function RebikeCaseStudy() {
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
          <p className="text-accent text-sm font-semibold mb-2">2025</p>
          <h1 className="text-5xl xl:text-6xl font-bold mb-4">
            Rebike - Bicycle Renting Platform
          </h1>
          <p className="text-white/60 text-lg max-w-[700px]">
            Full-stack web application for a second-hand bicycle renting service. End-to-end platform featuring fleet management, customer booking system, payment integration, and operational analytics with cloud infrastructure.
          </p>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 py-8 border-y border-white/10">
          <div>
            <p className="text-accent font-bold text-2xl">2025</p>
            <p className="text-white/60 text-sm">Launch Year</p>
          </div>
          <div>
            <p className="text-accent font-bold text-2xl">200+</p>
            <p className="text-white/60 text-sm">Fleet Size</p>
          </div>
          <div>
            <p className="text-accent font-bold text-2xl">Scalable</p>
            <p className="text-white/60 text-sm">Cloud Architecture</p>
          </div>
          <div>
            <p className="text-accent font-bold text-2xl">Solo</p>
            <p className="text-white/60 text-sm">Full-Stack Build</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Challenge */}
            <div>
              <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                The second-hand bicycle market lacks a streamlined platform for fleet management and customer rentals. Existing solutions are either legacy systems or fragmented between multiple tools. The opportunity was to create a modern, user-friendly platform that simplifies the entire rental workflow—from fleet inventory management to customer booking and payment processing.
              </p>
              <p className="text-white/80 leading-relaxed">
                Requirements included handling logistics complexity, integrating payment systems, managing user accounts, and providing analytics for operational efficiency.
              </p>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-3xl font-bold mb-4">The Solution</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-accent mb-2">Full-Stack Architecture</h3>
                  <p className="text-white/80">
                    Built a complete web application using modern technologies. React frontend provides an intuitive user interface for customers and administrators. Node.js/Express backend handles business logic, database operations, and payment processing. MongoDB stores fleet information, user data, and rental history.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-accent mb-2">Key Features</h3>
                  <ul className="space-y-2 text-white/80">
                    <li>• <span className="text-accent">Fleet Management Dashboard:</span> Real-time bike availability and maintenance tracking</li>
                    <li>• <span className="text-accent">Booking System:</span> Advanced search filters and calendar-based scheduling</li>
                    <li>• <span className="text-accent">Payment Integration:</span> Secure payment processing with multiple methods</li>
                    <li>• <span className="text-accent">User Accounts:</span> Customer profiles with rental history and preferences</li>
                    <li>• <span className="text-accent">Analytics Dashboard:</span> Revenue tracking and operational insights</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-accent mb-2">Cloud Infrastructure</h3>
                  <p className="text-white/80">
                    Deployed on AWS with containerized services (Docker) for scalability and reliability. Implemented CI/CD pipeline for automated testing and deployments. Database hosted on MongoDB Atlas for automatic backups and global replication. CDN for static asset distribution ensures fast load times globally.
                  </p>
                </div>
              </div>
            </div>

            {/* Results */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Key Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#232329] p-6 rounded-lg">
                  <p className="text-accent font-bold text-2xl mb-2">200+</p>
                  <p className="text-white/80">Bicycles in fleet</p>
                </div>
                <div className="bg-[#232329] p-6 rounded-lg">
                  <p className="text-accent font-bold text-2xl mb-2">100ms</p>
                  <p className="text-white/80">Average response time</p>
                </div>
                <div className="bg-[#232329] p-6 rounded-lg">
                  <p className="text-accent font-bold text-2xl mb-2">99.9%</p>
                  <p className="text-white/80">Uptime SLA</p>
                </div>
                <div className="bg-[#232329] p-6 rounded-lg">
                  <p className="text-accent font-bold text-2xl mb-2">Auto-scaled</p>
                  <p className="text-white/80">Handles traffic spikes</p>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Technologies Used</h2>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-accent font-semibold mb-3">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "Tailwind CSS", "JavaScript"].map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-accent font-semibold mb-3">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Express", "MongoDB", "API Design"].map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-accent font-semibold mb-3">Infrastructure</h3>
                  <div className="flex flex-wrap gap-2">
                    {["AWS", "Docker", "GitHub Actions", "CI/CD"].map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-accent font-semibold mb-3">Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Git", "Jira", "MongoDB Atlas", "Stripe API"].map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Future Roadmap */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Future Roadmap</h2>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="text-accent">→</div>
                  <p className="text-white/80"><span className="font-semibold">RAG System Implementation:</span> Natural language querying of fleet database for intelligent automation</p>
                </div>
                <div className="flex gap-3">
                  <div className="text-accent">→</div>
                  <p className="text-white/80"><span className="font-semibold">Mobile App:</span> Native iOS/Android applications for enhanced user experience</p>
                </div>
                <div className="flex gap-3">
                  <div className="text-accent">→</div>
                  <p className="text-white/80"><span className="font-semibold">IoT Integration:</span> GPS tracking and smart lock systems for bike management</p>
                </div>
                <div className="flex gap-3">
                  <div className="text-accent">→</div>
                  <p className="text-white/80"><span className="font-semibold">Machine Learning:</span> Predictive maintenance and demand forecasting</p>
                </div>
              </div>
            </div>

            {/* Learnings */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Key Learnings</h2>
              <ul className="space-y-3 text-white/80">
                <li>✓ End-to-end full-stack web application development</li>
                <li>✓ Payment system integration and PCI compliance</li>
                <li>✓ Scalable cloud infrastructure design on AWS</li>
                <li>✓ Agile development and iteration based on user feedback</li>
                <li>✓ Business logic and operational workflow optimization</li>
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
                  <p className="text-white font-semibold">Full-Stack Web App</p>
                </div>
                <div>
                  <p className="text-white/60 mb-1">Status</p>
                  <p className="text-white font-semibold">In Development</p>
                </div>
                <div>
                  <p className="text-white/60 mb-1">Role</p>
                  <p className="text-white font-semibold">Founder & Developer</p>
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
                <p>🟦 Full-Stack Development</p>
                <p>🟦 React & Node.js</p>
                <p>🟦 AWS Infrastructure</p>
                <p>🟦 Database Design</p>
                <p>🟦 Payment Systems</p>
              </div>
            </div>

            {/* Links */}
            <div className="bg-[#232329] rounded-xl p-6 space-y-3">
              <Link href="https://rebike-remastered.vercel.app/" target="_blank" className="flex items-center gap-2 text-accent hover:text-white transition-all">
                <BsArrowUpRight /> Live Demo
              </Link>
              <Link href="https://github.com/miguelbidarra/rebike" target="_blank" className="flex items-center gap-2 text-accent hover:text-white transition-all">
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
