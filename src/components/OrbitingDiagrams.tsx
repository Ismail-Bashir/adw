"use client";

import { motion } from "framer-motion";
import { Cog, Ruler, PenTool, Layers, Box, FileText, Wrench, Compass } from "lucide-react";

const orbits = [
  {
    radius: 120,
    duration: 20,
    direction: 1,
    items: [
      { icon: Cog, color: "#0EA5E9", size: 22 },
      { icon: Ruler, color: "#38BDF8", size: 20 },
      { icon: PenTool, color: "#0284C7", size: 20 },
      { icon: Layers, color: "#7DD3FC", size: 22 },
    ],
  },
  {
    radius: 200,
    duration: 30,
    direction: -1,
    items: [
      { icon: Box, color: "#38BDF8", size: 18 },
      { icon: FileText, color: "#7DD3FC", size: 18 },
      { icon: Wrench, color: "#0284C7", size: 18 },
      { icon: Compass, color: "#0EA5E9", size: 18 },
      { icon: Cog, color: "#38BDF8", size: 16 },
      { icon: Layers, color: "#0EA5E9", size: 16 },
    ],
  },
  {
    radius: 280,
    duration: 40,
    direction: 1,
    items: [
      { icon: PenTool, color: "#0EA5E9", size: 14 },
      { icon: Box, color: "#38BDF8", size: 14 },
      { icon: Ruler, color: "#0284C7", size: 14 },
      { icon: Compass, color: "#7DD3FC", size: 14 },
      { icon: FileText, color: "#0EA5E9", size: 14 },
      { icon: Wrench, color: "#38BDF8", size: 14 },
      { icon: Cog, color: "#0284C7", size: 14 },
      { icon: Layers, color: "#7DD3FC", size: 14 },
    ],
  },
];

export default function OrbitingDiagrams() {
  return (
    <div className="relative w-full aspect-square max-w-[620px] mx-auto">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="relative">
          <div className="absolute -inset-4 rounded-full bg-accent/20 blur-xl animate-pulse-glow" />
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-card border-2 border-accent/30 glow-blue">
            <span className="text-2xl font-black text-accent">ADW</span>
          </div>
        </div>
      </div>

      {orbits.map((orbit, orbitIdx) => (
        <div key={orbitIdx}>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]"
            style={{ width: orbit.radius * 2, height: orbit.radius * 2 }}
          />

          <motion.div
            className="absolute top-1/2 left-1/2"
            style={{ width: 0, height: 0 }}
            animate={{ rotate: 360 * orbit.direction }}
            transition={{ duration: orbit.duration, repeat: Infinity, ease: "linear" }}
          >
            {orbit.items.map((item, itemIdx) => {
              const angle = (360 / orbit.items.length) * itemIdx;
              const rad = (angle * Math.PI) / 180;
              const x = Math.round(Math.cos(rad) * orbit.radius);
              const y = Math.round(Math.sin(rad) * orbit.radius);

              return (
                <motion.div
                  key={itemIdx}
                  className="absolute"
                  style={{ left: `${x}px`, top: `${y}px`, transform: "translate(-50%, -50%)" }}
                  animate={{ rotate: -360 * orbit.direction }}
                  transition={{ duration: orbit.duration, repeat: Infinity, ease: "linear" }}
                >
                  <motion.div
                    className="flex items-center justify-center rounded-xl backdrop-blur-sm cursor-pointer"
                    style={{
                      width: Math.round(item.size * 2.2),
                      height: Math.round(item.size * 2.2),
                      backgroundColor: `${item.color}12`,
                      border: `1px solid ${item.color}25`,
                    }}
                    whileHover={{
                      scale: 1.5,
                      boxShadow: `0 0 25px ${item.color}40`,
                      borderColor: `${item.color}60`,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <item.icon style={{ color: item.color, width: item.size, height: item.size }} />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      ))}

      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 620 620">
        <defs>
          <radialGradient id="centerGlow">
            <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="310" cy="310" r="60" fill="url(#centerGlow)" />
      </svg>
    </div>
  );
}
