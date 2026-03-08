"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  src: string;
  alt: string;
  caption: string;
  sub: string;
}

const slides: Slide[] = [
  { src: "/kitchen-layout-diagram.png", alt: "Kitchen Layout CAD Drawing", caption: "Kitchen Layout Automation", sub: "Multi-configuration commercial kitchen layouts generated in SolidWorks" },
  { src: "/stairlift-diagram.png", alt: "Stair Lift CAD Drawing", caption: "Stair Lift Engineering", sub: "Parameter-driven rail systems with dimension-accurate technical drawings" },
  { src: "/cabinet-assembly-diagram.png", alt: "Cabinet Assembly CAD", caption: "Parametric Cabinet Assemblies", sub: "Modular countertop and cabinet configurations driven by design tables" },
  { src: "/batch-drawings-diagram.png", alt: "Batch Drawing Automation", caption: "Batch Drawing Automation", sub: "Automated production files — BOMs, section views, and title blocks" },
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0, scale: 0.95 }),
  };

  return (
    <div className="relative w-full overflow-hidden group">
      {/* Image area */}
      <div className="relative aspect-[3/1] overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].src}
              alt={slides[current].alt}
              fill
              className="object-cover"
              priority={current === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Caption overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <p className="text-2xl sm:text-3xl font-black text-white mb-1">{slides[current].caption}</p>
              <p className="text-base text-white/50">{slides[current].sub}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Nav arrows */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-navy/60 border border-white/10 text-white/70 hover:text-white hover:bg-navy/80 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-10"
          aria-label="Previous"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-navy/60 border border-white/10 text-white/70 hover:text-white hover:bg-navy/80 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-10"
          aria-label="Next"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Progress dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
            className="relative h-1.5 rounded-full overflow-hidden transition-all"
            style={{ width: i === current ? 32 : 8 }}
            aria-label={`Go to slide ${i + 1}`}
          >
            <div className="absolute inset-0 bg-white/10 rounded-full" />
            {i === current && (
              <motion.div
                className="absolute inset-0 bg-accent rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 4.5, ease: "linear" }}
                style={{ transformOrigin: "left" }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
