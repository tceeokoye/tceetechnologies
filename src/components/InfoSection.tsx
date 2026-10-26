"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollReveal3D from "./ScrollReveal3D";

const slides = [
  {
    id: 1,
    src: "/portfolio_dashboard.png",
    alt: "Dashboard",
    bgClass: "bg-primary/10",
  },
  {
    id: 2,
    src: "/portfolio_mobile.png",
    alt: "Mobile App",
    bgClass: "bg-primary/5",
  },
  {
    id: 3,
    src: "/portfolio_app.png",
    alt: "Web App",
    bgClass: "bg-primary/10",
  },
  {
    id: 4,
    src: "/hero_dashboard.png",
    alt: "Platform",
    bgClass: "bg-primary/5",
  },
];

export default function InfoSection() {
  return (
    <section className="py-24 px-4 lg:px-30 md:section">
      <div>
        <div className="flex flex-col lg:flex-row gap-y-10 gap-6.25 justify-center">
          {/* Left column — heading + carousel */}
          <div className="h-fit w-full">
            <div className="w-full relative max-w-100.5">
              {/* "( About )" label flips in from above */}
              <ScrollReveal3D type="dive" duration={0.55}>
                <h2 className="text-base hidden md:flex w-15.25 absolute top-1 -right-2 font-normal text-[#2563EB] leading-[140%] tracking-[-1px]">
                  ( About )
                </h2>
              </ScrollReveal3D>
              {/* Main heading rises with 3D tilt */}
              <ScrollReveal3D type="rise" delay={0.1} duration={0.75}>
                <h2 className="text-[32px] font-normal font-serif leading-[140%] tracking-[-1px] w-full text-[#0f172a]">
                  Built for Businesses That Want More Than Just Software{" "}
                  <span className="text-base md:hidden  w-15.25  font-normal text-[#2563EB] leading-[140%] tracking-[-1px]">
                    ( About )
                  </span>
                </h2>
              </ScrollReveal3D>
            </div>
            {/* Image carousel — bleeds to edges on mobile via negative margin */}
            <div className="w-full lg:max-w-126.25 -mx-4 lg:mx-0">
              <div className="relative w-full overflow-hidden mt-3.75">
                <motion.div
                  className="flex gap-6 pr-6 w-max"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  {[...slides, ...slides].map((slide, index) => (
                    <motion.div
                      key={`${slide.id}-${index}`}
                      whileHover={{ scale: 1.08, y: -2 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className={`relative w-37.75 h-28 shrink-0 overflow-hidden  hover:shadow-lg transition-shadow duration-300 ${slide.bgClass}`}
                    >
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right column — body text flips in from right */}
          <div className="w-full ">
            <ScrollReveal3D type="flipRight" delay={0.2} duration={0.75}>
              <div className="space-y-8 text-[#475569] text-base">
                <p>
                  I run Tcee Technologies, a software engineering company
                  focused on designing and building high-performance digital
                  products for businesses worldwide.
                </p>
                <p>
                  I combine strategy, design, and technology to create
                  solutions that solve real business problems, streamline
                  operations, and unlock new growth opportunities.
                </p>
                <p>
                  Whether you&apos;re launching a startup, modernizing an
                  existing                   system, or scaling an enterprise platform, I provide
                  the expertise needed to turn ideas into reliable digital
                  products.
                </p>
              </div>
            </ScrollReveal3D>
          </div>
        </div>
      </div>
    </section>
  );
}
