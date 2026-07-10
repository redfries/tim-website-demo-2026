"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface CampaignCardProps {
  clientName: string;
  campaignName: string;
  metric: string;
  imageSrc: string;
  videoSrc?: string;
  size: "large" | "medium";
}

export default function CampaignCard({
  clientName,
  campaignName,
  metric,
  imageSrc,
  videoSrc,
  size,
}: CampaignCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden group cursor-pointer w-full border border-black/5 md:border-none ${
        size === "large" ? "aspect-[4/5] md:aspect-[3/4]" : "aspect-square"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Shadow layer for lift effect */}
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

      {/* Media Layer */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={imageSrc}
          alt={campaignName}
          fill
          className={`object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${
            isHovered && videoSrc ? "opacity-0 scale-100" : "opacity-100 group-hover:scale-105"
          }`}
        />
        {videoSrc && (
          <video
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
          />
        )}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20">
        <div className="flex justify-between items-start">
          <span className="text-white text-xs font-bold tracking-widest uppercase bg-black/50 px-3 py-1 backdrop-blur-md">
            {clientName}
          </span>
          <span className="text-[#C9952A] font-medium text-sm bg-black/80 px-3 py-1">
            {metric}
          </span>
        </div>
        
        <div className="transform translate-y-6 opacity-80 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
          <h3 className="text-white font-display text-2xl md:text-3xl font-medium leading-tight drop-shadow-lg">
            {campaignName}
          </h3>
        </div>
      </div>
    </div>
  );
}
