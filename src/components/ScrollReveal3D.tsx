"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

export type Reveal3DType =
  | "rise"       // comes up from below with forward tilt
  | "dive"       // drops in from above tilted back
  | "flipLeft"   // flips in from left side
  | "flipRight"  // flips in from right side
  | "zoom"       // scales in from depth
  | "tiltUp"     // slides up with strong rotateX
  | "fade";      // simple opacity fade (fallback)

interface ScrollReveal3DProps {
  children: ReactNode;
  type?: Reveal3DType;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

const variantMap: Record<Reveal3DType, Variants> = {
  rise: {
    hidden: {
      opacity: 0,
      y: 60,
      rotateX: -18,
      scale: 0.94,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
    },
  },
  dive: {
    hidden: {
      opacity: 0,
      y: -50,
      rotateX: 18,
      scale: 0.94,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
    },
  },
  flipLeft: {
    hidden: {
      opacity: 0,
      rotateY: -22,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
    },
  },
  flipRight: {
    hidden: {
      opacity: 0,
      rotateY: 22,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
    },
  },
  zoom: {
    hidden: {
      opacity: 0,
      scale: 0.75,
      rotateX: 12,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
    },
  },
  tiltUp: {
    hidden: {
      opacity: 0,
      y: 80,
      rotateX: -28,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
    },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

export default function ScrollReveal3D({
  children,
  type = "rise",
  delay = 0,
  duration = 0.75,
  className = "",
  once = false,
  amount = 0.15,
}: ScrollReveal3DProps) {
  const variants = variantMap[type];

  return (
    // perspective wrapper makes rotateX/Y look realistic
    <div style={{ perspective: "1200px" }} className={className}>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount }}
        transition={{
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1], // custom ease-out-expo
          opacity: { duration: duration * 0.8 },
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
