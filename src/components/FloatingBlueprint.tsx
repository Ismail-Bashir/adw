"use client";

import { motion } from "framer-motion";

export default function FloatingBlueprint() {
  return (
    <div className="relative w-full h-80 overflow-hidden rounded-2xl bg-gradient-to-br from-[#060a14] to-[#0c1222] border border-white/5 shadow-2xl shadow-primary/5">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(212,160,23,0.06)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 320" xmlns="http://www.w3.org/2000/svg">
        <motion.rect
          x="80" y="60" width="180" height="120" rx="4"
          fill="none" stroke="#d4a017" strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.line x1="100" y1="90" x2="240" y2="90" stroke="#d4a017" strokeWidth="0.8" strokeDasharray="4 4" strokeOpacity="0.4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.5 }} />
        <motion.line x1="100" y1="120" x2="240" y2="120" stroke="#d4a017" strokeWidth="0.8" strokeDasharray="4 4" strokeOpacity="0.4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.7 }} />
        <motion.line x1="100" y1="150" x2="240" y2="150" stroke="#d4a017" strokeWidth="0.8" strokeDasharray="4 4" strokeOpacity="0.4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.9 }} />

        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.5 }}>
          <line x1="80" y1="200" x2="260" y2="200" stroke="#d4a017" strokeWidth="1" strokeOpacity="0.7" />
          <polygon points="80,196 80,204 72,200" fill="#d4a017" fillOpacity="0.7" />
          <polygon points="260,196 260,204 268,200" fill="#d4a017" fillOpacity="0.7" />
          <text x="150" y="218" fill="#d4a017" fontSize="11" fontFamily="monospace" textAnchor="middle" opacity="0.8">180.00mm</text>
        </motion.g>

        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7, duration: 0.5 }}>
          <line x1="280" y1="60" x2="280" y2="180" stroke="#d4a017" strokeWidth="1" strokeOpacity="0.7" />
          <polygon points="276,60 284,60 280,52" fill="#d4a017" fillOpacity="0.7" />
          <polygon points="276,180 284,180 280,188" fill="#d4a017" fillOpacity="0.7" />
          <text x="300" y="125" fill="#d4a017" fontSize="11" fontFamily="monospace" opacity="0.8">120.00mm</text>
        </motion.g>

        <motion.g animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "400px 100px" }}>
          <circle cx="400" cy="100" r="25" fill="none" stroke="#d4a017" strokeWidth="1.5" opacity="0.3" />
          <circle cx="400" cy="100" r="18" fill="none" stroke="#d4a017" strokeWidth="1" opacity="0.2" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <line key={angle} x1={400 + 18 * Math.cos((angle * Math.PI) / 180)} y1={100 + 18 * Math.sin((angle * Math.PI) / 180)} x2={400 + 28 * Math.cos((angle * Math.PI) / 180)} y2={100 + 28 * Math.sin((angle * Math.PI) / 180)} stroke="#d4a017" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
          ))}
        </motion.g>

        <motion.g animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "420px 220px" }}>
          <circle cx="420" cy="220" r="18" fill="none" stroke="#d4a017" strokeWidth="1.5" opacity="0.3" />
          <circle cx="420" cy="220" r="12" fill="none" stroke="#d4a017" strokeWidth="1" opacity="0.2" />
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <line key={angle} x1={420 + 12 * Math.cos((angle * Math.PI) / 180)} y1={220 + 12 * Math.sin((angle * Math.PI) / 180)} x2={420 + 20 * Math.cos((angle * Math.PI) / 180)} y2={220 + 20 * Math.sin((angle * Math.PI) / 180)} stroke="#d4a017" strokeWidth="2.5" strokeLinecap="round" opacity="0.3" />
          ))}
        </motion.g>

        <motion.line x1="60" y1="0" x2="60" y2="320" stroke="url(#scanGradient)" strokeWidth="1" animate={{ x1: [60, 460, 60], x2: [60, 460, 60] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
        <defs>
          <linearGradient id="scanGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d4a017" stopOpacity="0" />
            <stop offset="50%" stopColor="#d4a017" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#d4a017" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute top-3 left-4 flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[10px] font-mono text-white/25">BLUEPRINT_v2.4</span>
      </div>
      <div className="absolute bottom-3 right-4">
        <span className="text-[10px] font-mono text-white/15">ADW AUTOMATION ENGINE</span>
      </div>
    </div>
  );
}
