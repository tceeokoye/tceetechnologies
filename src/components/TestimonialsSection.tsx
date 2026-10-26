"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Card3D from "./Card3D";
import OliviaEzekweImage from '@/assets/testimony/1793011963283.jpg'
import MrsPhenomenaNwajaImage from '@/assets/testimony/1793014034188.jpg'
import CajetanImage from "@/assets/testimony/CajetanOnu.webp"
import ScrollReveal3D from "./ScrollReveal3D";

type RevealType = "flipLeft" | "tiltUp" | "flipRight" | "zoom" | "rise";
const REVEAL_TYPES: RevealType[] = ["flipLeft", "tiltUp", "flipRight", "zoom", "rise", "flipLeft"];

const testimonials = [
  { quote: "Working with TCEE TECH was a game changer for our business. I am grateful TCEE TECH built a platform that perfectly aligned with our needs and exceeded our expectations.", name: "Olivia Ezekwe", role: "Communications Lead SSDO", ProfilePicture: OliviaEzekweImage },
  { quote: "Their team's technical expertise is unmatched. They transformed our legacy systems into a modern, highly scalable architecture.", name: "Mrs Phenomena Nwaja", role: "Founder Kidprenuer place" , ProfilePicture: MrsPhenomenaNwajaImage},
  { quote: "The team delivered exceptional results. Their attention to detail and user experience design is outstanding.", name: "Cajetan Onu", role: " Founder, The Global Connect, LLC", ProfilePicture: CajetanImage },
  // { quote: "A truly professional team that understands both business needs and technical constraints. They delivered on time and within budget.", name: "David Smith", role: "Founder at Innovate", ProfilePicture: OliviaEzekweImage },
  // { quote: "Their innovative approach to problem-solving helped us launch our product months ahead of schedule.", name: "Jessica Williams", role: "VP Engineering at CloudScale", ProfilePicture: OliviaEzekweImage },
  // { quote: "The quality of their code and architecture choices provided us with a foundation that will scale for years to come.", name: "Robert Taylor", role: "Director of IT at GlobalTech", ProfilePicture: OliviaEzekweImage },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const nextCard = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevCard = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-play interval for mobile slider
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextCard();
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, nextCard]);

  const current = testimonials[currentIndex];

  // scaleX 1→0→1 pinned to the incoming/outgoing edge = 3D page-turn flip, zero blur
  const cardVariants = {
    enter: (dir: number) => ({
      scaleX: 0,
      opacity: 0.6,
      originX: dir > 0 ? 0 : 1,
    }),
    center: {
      scaleX: 1,
      opacity: 1,
      originX: 0.5,
      transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] },
    },
    exit: (dir: number) => ({
      scaleX: 0,
      opacity: 0.6,
      originX: dir > 0 ? 1 : 0,
      transition: { duration: 0.3, ease: [0.5, 0, 0.75, 0] as [number, number, number, number] },
    }),
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-[#EFF2FA] section px-4 lg:px-30"
    >
      <div className="w-full">
        {/* Heading */}
        <div className="mb-8 max-w-100.5 space-y-2">
          <ScrollReveal3D type="rise" duration={0.7}>
            <h2 className="text-[32px] font-normal font-serif tracking-[-1px] leading-[140%] text-[#0f172a]">
              Trusted by Businesses That Demand Excellence
            </h2>
            <p className="text-base leading-[150%] font-normal text-[#475569]">
              Our success is measured by the success of the businesses we work with
            </p>
          </ScrollReveal3D>
        </div>

        {/* ----------------- MOBILE SINGLE CARD CAROUSEL ( < md ) ----------------- */}
        <div
          className="block md:hidden w-full relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="w-full relative overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x;
                  if (swipe < -100 || offset.x < -50) nextCard();
                  else if (swipe > 100 || offset.x > 50) prevCard();
                }}
                className="w-full cursor-grab active:cursor-grabbing"
              >
                <div className="bg-white p-5 w-full min-h-49.5 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-slate-100/80">
                  <p className="text-base font-normal text-[#475569]">&quot;{current.quote}&quot;</p>
                  <div className="flex items-center gap-2.5 mt-4">
                    <div className="relative w-13.5 h-13.5 overflow-hidden rounded-full shrink-0">
                      <Image src={current.ProfilePicture} alt={current.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-normal font-serif text-[20px] leading-[140%] tracking-[-1px] text-[#0f172a]">{current.name}</h4>
                      <p className="text-xs font-normal leading-[150%] text-[#475569]">{current.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls: Dots + Prev/Next Buttons */}
          <div className="flex items-center justify-between mt-4 px-2">
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`h-2 transition-all duration-300 rounded-full ${
                    idx === currentIndex
                      ? "w-7 bg-primary"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={prevCard}
                className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:bg-slate-50 hover:text-primary transition-all active:scale-95"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextCard}
                className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:bg-slate-50 hover:text-primary transition-all active:scale-95"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* ----------------- DESKTOP GRID LAYOUT ( >= md ) ----------------- */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <ScrollReveal3D
              key={index}
              type={REVEAL_TYPES[index % REVEAL_TYPES.length]}
              delay={index * 0.1}
              duration={0.75}
              className="w-full"
            >
              <Card3D
                maxTilt={6}
                scale={1.02}
                className="bg-white p-5 w-full min-h-49.5 flex flex-col justify-between rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.1)] transition-shadow duration-300"
              >
                <p className="text-base font-normal text-[#475569]">&quot;{t.quote}&quot;</p>
                <div className="flex items-center gap-2.5 mt-4">
                  <div className="relative w-13.5 h-13.5 overflow-hidden">
                    <Image src={t.ProfilePicture} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-normal font-serif text-[20px] leading-[140%] tracking-[-1px] text-[#0f172a]">{t.name}</h4>
                    <p className="text-xs font-normal leading-[150%] text-[#475569]">{t.role}</p>
                  </div>
                </div>
              </Card3D>
            </ScrollReveal3D>
          ))}
        </div>
      </div>
    </section>
  );
}
