"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileInput, Cog, Cpu, FileOutput } from "lucide-react";

const steps = [
  { icon: FileInput, label: "Input", desc: "CAD files, specs & parameters", color: "#b8860b" },
  { icon: Cog, label: "Configure", desc: "Rules, templates & logic", color: "#d4a017" },
  { icon: Cpu, label: "Automate", desc: "Smart scripts process your design", color: "#f0c946" },
  { icon: FileOutput, label: "Output", desc: "Drawings, BOMs & production files", color: "#e6b800" },
];

export default function WorkflowDiagram() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative py-8">
      <div className="absolute top-1/2 left-0 right-0 hidden md:block">
        <motion.div
          className="h-px mx-16"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
          style={{ transformOrigin: "left", background: "linear-gradient(to right, #b8860b, #d4a017, #f0c946, #e6b800)" }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.2 }}
          >
            <motion.div
              className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-card border border-card-border mb-4 cursor-pointer shadow-lg"
              whileHover={{
                scale: 1.15,
                rotate: 8,
                boxShadow: `0 20px 40px ${step.color}20`,
                borderColor: step.color,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <step.icon className="h-8 w-8" style={{ color: step.color }} />
            </motion.div>
            <h3 className="text-base font-bold text-foreground mb-1">{step.label}</h3>
            <p className="text-sm text-muted">{step.desc}</p>

            {i < steps.length - 1 && (
              <motion.div
                className="md:hidden w-px h-8 mt-4"
                style={{ backgroundColor: step.color }}
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.2 }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
