"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsClock } from "react-icons/bs";

const articles = [
  {
    id: "lora-communication",
    title: "LoRa Communication: Long-Range, Low-Power IoT",
    subtitle: "Understanding LoRa modulation, range optimization, and practical implementation tips",
    excerpt:
      "A deep dive into LoRa technology: how it achieves 5km+ range with minimal power consumption, design considerations, and lessons learned from building a forest fire detection system.",
    date: "March 2025",
    readTime: "8 min read",
    category: "IoT",
    featured: true,
  },
  {
    id: "5g-radio-unit",
    title: "5G Radio Unit Software Optimization",
    subtitle: "High-speed data throughput optimization techniques in C/C++",
    excerpt:
      "Insights from optimizing 5G Radio Unit software for maximum throughput. Covers profiling techniques, memory management, and the balance between performance and power consumption in embedded systems.",
    date: "February 2025",
    readTime: "10 min read",
    category: "Embedded Systems",
    featured: false,
  },
  {
    id: "full-stack-aws",
    title: "Full-Stack Web Apps on AWS: From Development to Deployment",
    subtitle: "Comprehensive guide to building scalable applications with modern cloud infrastructure",
    excerpt:
      "A complete walkthrough of deploying a full-stack application (React + Node.js + MongoDB) on AWS. Includes Docker containerization, CI/CD pipelines with GitHub Actions, cost optimization, and monitoring strategies.",
    date: "January 2025",
    readTime: "12 min read",
    category: "Cloud Infrastructure",
    featured: true,
  },
  {
    id: "embedded-linux",
    title: "Embedded Linux Systems: Configuration & Optimization",
    subtitle: "Building efficient embedded systems with Linux OS",
    excerpt:
      "Essential concepts for embedded Linux development: kernel modules, device drivers, cross-compilation, and real-time considerations. Practical examples from production systems.",
    date: "December 2024",
    readTime: "9 min read",
    category: "Linux",
    featured: false,
  },
];

export default function Insights() {
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
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl xl:text-5xl font-bold mb-4">
            Technical <span className="text-accent">Insights</span>
          </h1>
          <p className="text-white/60 text-lg max-w-[700px]">
            In-depth articles on embedded systems, IoT, cloud infrastructure, and full-stack development. Sharing knowledge and lessons learned from building production systems.
          </p>
        </div>

        {/* Featured Articles */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {articles
              .filter((article) => article.featured)
              .map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                >
                  <Link href={`/insights/${article.id}`}>
                    <div className="group bg-[#232329] rounded-xl overflow-hidden hover:bg-[#2a2a30] transition-all duration-300 h-full cursor-pointer">
                      <div className="p-8 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold">
                            {article.category}
                          </span>
                          <span className="text-white/60 text-xs">{article.date}</span>
                        </div>

                        <h2 className="text-2xl font-bold mb-2 group-hover:text-accent transition-all">
                          {article.title}
                        </h2>
                        <p className="text-white/60 text-sm mb-4">{article.subtitle}</p>

                        <p className="text-white/80 flex-grow mb-6">{article.excerpt}</p>

                        <div className="flex items-center justify-between pt-6 border-t border-white/10">
                          <div className="flex items-center gap-2 text-white/60 text-sm">
                            <BsClock /> {article.readTime}
                          </div>
                          <BsArrowRight className="text-accent group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>

        {/* All Articles */}
        <div>
          <h2 className="text-2xl font-bold mb-8">All Articles</h2>
          <div className="space-y-4">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index }}
              >
                <Link href={`/insights/${article.id}`}>
                  <div className="group bg-[#232329]/50 hover:bg-[#232329] rounded-lg px-6 py-4 flex items-center justify-between cursor-pointer transition-all">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-semibold">
                          {article.category}
                        </span>
                        <span className="text-white/60 text-xs">{article.date}</span>
                        <span className="text-white/50 text-xs">•</span>
                        <span className="text-white/60 text-xs">{article.readTime}</span>
                      </div>
                      <h3 className="text-lg font-semibold group-hover:text-accent transition-all">
                        {article.title}
                      </h3>
                    </div>
                    <BsArrowRight className="text-accent group-hover:translate-x-2 transition-transform ml-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
