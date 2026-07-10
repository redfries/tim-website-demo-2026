"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      initial={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
      animate={{
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
        boxShadow: isScrolled ? "0 4px 20px rgba(0, 0, 0, 0.05)" : "none",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-10 flex items-center">
          <Image
            src="/images/ui/tim-logo.png"
            alt="Times Influential Media"
            width={160}
            height={50}
            className="w-auto h-10 object-contain"
          />
        </Link>

        {/* Links */}
        <nav className="hidden md:flex items-center space-x-10">
          {["Work", "Services", "About", "Clients"].map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm tracking-wide font-medium text-[#0A0A0A] hover:text-[#C9952A] transition-colors relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C9952A] transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block relative z-10">
          <Link
            href="#contact"
            className="bg-[#0A0A0A] text-white px-8 py-3.5 text-sm tracking-wide font-medium hover:bg-[#C9952A] hover:text-[#0A0A0A] transition-colors duration-300 flex items-center gap-2 group"
          >
            Let's Talk
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
        
        {/* Mobile menu button (simplified) */}
        <button className="md:hidden text-[#0A0A0A]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </motion.header>
  );
}
