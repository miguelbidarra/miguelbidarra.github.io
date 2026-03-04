"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowLeft, BsClock, BsPerson } from "react-icons/bs";

export default function LoRaArticle() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[100vh] py-12 xl:py-24"
    >
      <div className="container mx-auto max-w-[800px]">
        {/* Back Button */}
        <Link href="/insights" className="flex items-center gap-2 text-accent hover:text-white transition-all mb-8">
          <BsArrowLeft /> Back to Insights
        </Link>

        {/* Article Header */}
        <div className="mb-12">
          <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold">IoT</span>
          <h1 className="text-5xl font-bold mt-4 mb-4">
            LoRa Communication: Long-Range, Low-Power IoT
          </h1>
          <p className="text-white/60 text-lg mb-6">
            Understanding LoRa modulation, range optimization, and practical implementation tips
          </p>

          <div className="flex items-center gap-6 text-white/60 text-sm py-6 border-y border-white/10">
            <div className="flex items-center gap-2">
              <BsPerson /> Miguel Barbosa
            </div>
            <div className="flex items-center gap-2">
              <BsClock /> 8 min read
            </div>
            <div>March 2025</div>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-3xl font-bold">Introduction</h2>
            <p className="text-white/80 leading-relaxed">
              LoRa (Long Range) is a modulation technique that has revolutionized IoT connectivity. Unlike WiFi or traditional cellular networks, LoRa offers an exceptional balance between range, power consumption, and cost. In this article, I'll share insights from implementing a LoRa-based forest fire detection system that achieves 5km+ transmission range with minimal power consumption.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">What is LoRa?</h2>
            <p className="text-white/80 leading-relaxed">
              LoRa is a radio modulation technique that uses chirp spread spectrum (CSS) to encode information. Rather than transmitting pulses like traditional approaches, LoRa uses frequency-shifted chirps to represent data. This approach provides several advantages:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
              <li><span className="text-accent">Extended Range:</span> 5-15km in open space, 1-3km in urban environments</li>
              <li><span className="text-accent">Low Power:</span> Microwatt-range current draw during transmission</li>
              <li><span className="text-accent">Noise Immunity:</span> Excellent performance in noisy environments</li>
              <li><span className="text-accent">Collision Tolerance:</span> Multiple simultaneous transmissions can be decoded</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold">Key Parameters</h2>
            <p className="text-white/80 leading-relaxed">
              Understanding LoRa parameters is crucial for optimizing your application:
            </p>
            
            <div className="bg-[#232329] rounded-lg p-6 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-accent">Spreading Factor (SF)</h3>
                <p className="text-white/80">SF ranges from 7 to 12. Higher values = longer range but slower data rates and longer airtime. SF7 transmits ~3 messages/sec, while SF12 transmits ~1 message/30 sec.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-accent">Bandwidth (BW)</h3>
                <p className="text-white/80">Typically 125kHz, 250kHz, or 500kHz. Lower bandwidth = longer range but slower data rates. Higher bandwidth = faster transmission but reduced range.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-accent">Coding Rate (CR)</h3>
                <p className="text-white/80">Error correction overhead. Ranges from 4/5 to 4/8. Higher CR values = better error tolerance but reduced effective data rate.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-accent">Transmit Power</h3>
                <p className="text-white/80">Typically 2-20dBm. Higher power = longer range but higher current consumption.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold">Practical Implementation Tips</h2>
            
            <div className="space-y-6">
              <div className="bg-[#232329] rounded-lg p-6">
                <h3 className="text-lg font-semibold text-accent mb-3">1. Start Conservative</h3>
                <p className="text-white/80">Begin with SF12 and 20dBm power. Once communication is stable, optimize for power consumption by reducing SF or transmit power.</p>
              </div>

              <div className="bg-[#232329] rounded-lg p-6">
                <h3 className="text-lg font-semibold text-accent mb-3">2. Test in Your Environment</h3>
                <p className="text-white/80">LoRa range varies dramatically based on terrain, obstacles, and interference. Test in your actual deployment environment before production rollout.</p>
              </div>

              <div className="bg-[#232329] rounded-lg p-6">
                <h3 className="text-lg font-semibold text-accent mb-3">3. Antenna Placement is Critical</h3>
                <p className="text-white/80">A quarter-wave antenna oriented vertically typically provides optimal coverage. Antenna height, orientation, and surrounding materials significantly impact range.</p>
              </div>

              <div className="bg-[#232329] rounded-lg p-6">
                <h3 className="text-lg font-semibold text-accent mb-3">4. Monitor Duty Cycles</h3>
                <p className="text-white/80">Regulations (especially in EU with LoRaWAN) impose duty cycle restrictions (typically 1%). Calculate your message frequency to stay compliant.</p>
              </div>

              <div className="bg-[#232329] rounded-lg p-6">
                <h3 className="text-lg font-semibold text-accent mb-3">5. Implement Adaptive Spreading Factor</h3>
                <p className="text-white/80">Use lower SF values for nearby devices and higher SF for distant nodes. This optimizes network capacity and power consumption.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold">Real-World Example: Forest Fire Detection</h2>
            <p className="text-white/80 leading-relaxed">
              In our forest fire detection project, we deployed LoRa nodes across a 5km² area. Each node collects temperature and air quality data, transmitting every 5 minutes with SF9 and 14dBm power. This configuration provides:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
              <li>~100 meter transmission every 5 minutes = 0.2% duty cycle (compliant)</li>
              <li>~2-3 week battery life on 4x AA batteries</li>
              <li>Reliable coverage across the deployment area</li>
              <li>Excellent noise tolerance in noisy RF environments</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold">LoRa vs LoRaWAN</h2>
            <p className="text-white/80 leading-relaxed">
              Don't confuse LoRa with LoRaWAN. LoRa is the physical layer (modulation), while LoRaWAN is a network protocol that runs on top of LoRa. LoRaWAN adds MAC layer functionality but with overhead and complexity. For simple point-to-point communication, pure LoRa with custom protocols often works better.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">Common Pitfalls</h2>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
              <li>❌ Not testing in actual deployment environment</li>
              <li>❌ Poor antenna selection or placement</li>
              <li>❌ Ignoring regulatory duty cycle restrictions</li>
              <li>❌ Using fixed spreading factor for all nodes</li>
              <li>❌ Not accounting for frame collision</li>
              <li>❌ Underestimating power consumption with high transmit power</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold">Conclusion</h2>
            <p className="text-white/80 leading-relaxed">
              LoRa is a powerful technology for long-range, low-power IoT applications. By understanding the key parameters, testing thoroughly in your environment, and following best practices, you can build reliable systems that operate for months or years on battery power.
            </p>
            <p className="text-white/80 leading-relaxed">
              Whether you're building a forest fire detection system, environmental sensors, or any other IoT application requiring long range and low power, LoRa deserves serious consideration.
            </p>
          </section>

          <section className="pt-8 border-t border-white/10">
            <p className="text-white/60 italic">
              Have questions about LoRa implementation? Feel free to reach out via the contact page. I'm always happy to discuss IoT projects and embedded systems.
            </p>
          </section>
        </article>

        {/* Related Articles */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
          <div className="space-y-3">
            {[
              { title: "Embedded Linux Systems: Configuration & Optimization", href: "/insights/embedded-linux" },
              { title: "5G Radio Unit Software Optimization", href: "/insights/5g-radio-unit" },
            ].map((article, idx) => (
              <Link key={idx} href={article.href}>
                <div className="p-4 bg-[#232329]/50 hover:bg-[#232329] rounded-lg cursor-pointer transition-all">
                  <p className="text-white/80 hover:text-accent">{article.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
