"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileInput, Cog, Cpu, FileOutput } from "lucide-react";

const steps = [
  { icon: FileInput, label: "Input", desc: "CAD files, specs & parameters", color: "#2563eb" },
  { icon: Cog, label: "Configure", desc: "Rules, templates & logic", color: "#0891b2" },
  { icon: Cpu, label: "Automate", desc: "Smart scripts process your design", color: "#7c3aed" },
  { icon: FileOutput, label: "Output", desc: "Drawings, BOMs & production files", color: "#059669" },
];

export default function WorkflowDiagram() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative py-8">
      {/* Connection line */}
      <div className="absolute top-1/2 left-0 right-0 hidden md:block">
        <motion.div
          className="h-0.5 bg-gradient-to-r from-[#2563eb] via-[#7c3aed] to-[#059669] mx-16"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
          style={{ transformOrigin: "left" }}
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
              className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-lg border border-gray-100 mb-4 cursor-pointer"
              whileHover={{
                scale: 1.15,
                rotate: [0, -5, 5, 0],
                boxShadow: `0 20px 40px ${step.color}25`,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <step.icon className="h-8 w-8" style={{ color: step.color }} />
              <motion.div
                className="absolute -inset-1 rounded-2xl opacity-0"
                style={{ border: `2px solid ${step.color}` }}
                whileHover={{ opacity: 0.5, scale: 1.05 }}
              />
            </motion.div>
            <h3 className="text-base font-bold text-foreground mb-1">
              {step.label}
            </h3>
            <p className="text-sm text-muted">{step.desc}</p>

            {i < steps.length - 1 && (
              <motion.div
                className="md:hidden w-0.5 h-8 mt-4"
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
