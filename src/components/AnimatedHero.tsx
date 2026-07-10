"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const IMAGES = [
  "/images/works/poster-1.jpg",
  "/images/personalities/ms-dhoni.jpg",
  "/images/works/other-4.png",
  "/images/personalities/ahaana-krishna.jpg",
  "/images/works/poster-2.jpg",
];

// Randomly scattered positions across the screen
const SCATTER = [
  { top: "15%", left: "10%", rotate: -14, width: "28vw", height: "45vh" },
  { top: "50%", left: "65%", rotate: 12, width: "32vw", height: "35vh" },
  { top: "5%", left: "55%", rotate: 8, width: "25vw", height: "30vh" },
  { top: "55%", left: "5%", rotate: -8, width: "22vw", height: "40vh" },
];

export default function AnimatedHero() {
  const [phase, setPhase] = useState<"shuffle" | "settled">("shuffle");

  useEffect(() => {
    // 1.8 seconds of chaotic scattered popping in before settling
    const timer = setTimeout(() => {
      setPhase("settled");
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      
      {/* Intro Overlay Container - takes up the full screen to block background elements while shuffling */}
      <AnimatePresence>
        {phase === "shuffle" && (
          <motion.div 
            className="absolute inset-0 z-50 flex items-center justify-center bg-[#F8F6F1]"
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
          >
            {/* Scattered Images Popping In */}
            {SCATTER.map((pos, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.2, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0, rotate: pos.rotate }}
                exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                transition={{ 
                  duration: 0.6, 
                  delay: idx * 0.25, // Staggered zig-zag entry
                  ease: [0.25, 1, 0.5, 1]
                }}
                className="absolute shadow-2xl overflow-hidden border-8 border-white"
                style={{
                  top: pos.top,
                  left: pos.left,
                  width: pos.width,
                  height: pos.height,
                  zIndex: 40 + idx
                }}
              >
                <Image src={IMAGES[idx + 1]} alt="Scatter" fill className="object-cover" />
              </motion.div>
            ))}

            {/* The main central image that will morph into the right column layout */}
            <motion.div 
              layoutId="hero-media"
              className="relative w-[90vw] h-[50vh] md:w-[50vw] md:h-[60vh] shadow-[0_30px_60px_rgba(0,0,0,0.4)] overflow-hidden z-[60] border-8 border-white"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.0, ease: [0.25, 1, 0.5, 1] }}
            >
              <Image 
                src={IMAGES[0]} 
                alt="Main Intro" 
                fill 
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content (revealed after shuffle settles) */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Text 60% */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: phase === "settled" ? 1 : 0, y: phase === "settled" ? 0 : 40 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
          >
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#767676] mb-8">
              01 — INFLUENCER MARKETING
            </p>
            <h1 className="font-display text-6xl md:text-8xl lg:text-[110px] leading-[0.9] tracking-tighter font-semibold text-[#0A0A0A] mb-8 uppercase text-balance">
              India's Most <br />
              <span className="text-[#C9952A]">Ambitious</span> <br />
              Media Agency.
            </h1>
            <p className="text-xl md:text-2xl text-[#0A0A0A] max-w-lg mb-12 font-medium leading-relaxed">
              We put your brand in the room where culture is made.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#work" className="bg-[#0A0A0A] text-white px-8 py-4 text-sm font-bold tracking-widest hover:bg-[#C9952A] hover:text-[#0A0A0A] transition-colors duration-300 inline-flex justify-center items-center gap-3 uppercase group">
                View Our Work
                <span className="group-hover:translate-y-1 transition-transform">↓</span>
              </a>
              <button className="bg-transparent border border-[#0A0A0A] text-[#0A0A0A] px-8 py-4 text-sm font-bold tracking-widest hover:bg-[#0A0A0A] hover:text-white transition-colors duration-300 inline-flex justify-center items-center gap-3 uppercase">
                Watch Reel
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Visual Composition 40% */}
        <div className="lg:col-span-5 relative h-[600px] w-full hidden lg:block">
          {phase === "settled" && (
            <motion.div 
              layoutId="hero-media"
              className="relative w-full h-full overflow-hidden"
              transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
              style={{
                maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
              }}
            >
              {/* Vertical Marquee */}
              <div className="flex flex-col gap-4 animate-[marquee-v_20s_linear_infinite]">
                 {/* Duplicate array for infinite scroll */}
                 {[...IMAGES, ...IMAGES].map((img, idx) => (
                    <div key={idx} className="relative w-full h-[400px] shrink-0 bg-gray-200">
                      <Image src={img} alt="Marquee" fill className="object-cover" />
                    </div>
                 ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
