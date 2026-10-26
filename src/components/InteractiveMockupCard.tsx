"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { DualPhoneMockup } from "@/lib/projects";

interface InteractiveMockupCardProps {
  mockup: DualPhoneMockup;
  rounded?: boolean;
}

export default function InteractiveMockupCard({
  mockup,
  rounded = true,
}: InteractiveMockupCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse tilt motion values
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const mouseXSpring = useSpring(x, { stiffness: 240, damping: 22 });
  const mouseYSpring = useSpring(y, { stiffness: 240, damping: 22 });

  // 3D smooth tilt rotations
  const rotateX = useTransform(mouseYSpring, [0, 1], [5, -5]);
  const rotateY = useTransform(mouseXSpring, [0, 1], [-5, 5]);

  // Subtle depth parallax for the single preview image
  const imageY = useTransform(mouseYSpring, [0, 1], [3, -3]);
  const imageX = useTransform(mouseXSpring, [0, 1], [3, -3]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width;
    const mouseY = (e.clientY - rect.top) / rect.height;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 45, rotateX: 8, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1200 }}
      className="w-full flex justify-center  h-fit"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.015 }}
        transition={{ scale: { duration: 0.3, ease: "easeOut" } }}
        className={`w-full bg-[#F5F5F5] h-157.5 max-w-146.5 flex items-center justify-center  transition-shadow duration-500 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.07)] ${
          rounded ? "rounded-[17.4px]" : ""
        }`}
      >
        <div
          style={{ transform: "translateZ(15px)", transformStyle: "preserve-3d" }}
          className="flex items-center justify-center w-full max-w-[523.88px] h-[531.84px] px-[31.05px] py-[49.08px]"
        >
          <motion.div
            style={{
              x: imageX,
              y: imageY,
              transform: "translateZ(25px)",
            }}
            className="relative w-full h-full"
          >
            <Image
              src={mockup.leftImage}
              alt="Project mockup preview"
              fill
              sizes="(max-width: 640px) calc(100vw - 94px), 462px"
              className="object-contain"
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
