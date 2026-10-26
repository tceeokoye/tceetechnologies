"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg";
import AnimatedMockup from "./AnimatedMockup";
import CountUp from "react-countup";
import Card3D from "./Card3D";
import ScrollReveal3D from "./ScrollReveal3D";

export default function HeroSection() {
  return (
    <section className="relative px-4 pt-32 pb-20 lg:pt-38 lg:pb-28 overflow-hidden">
      <div className="w-full mx-auto tracking-[-1px] text-center">
        {/* Headline — dives in from above on load */}
        <motion.h1
          initial={{ y: -30, opacity: 0, rotateX: 15 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
          className="text-[42px] lg:text-[42px] font-normal font-serif mx-auto tracking-[-1px] leading-[140%]"
        >
          Engineering Digital Products That Drive Business Growth
        </motion.h1>

        {/* Subtitle rises up */}
        <motion.p
          initial={{ y: 30, opacity: 0, rotateX: -10 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
          className="mt-4 text-lg font-normal text-[#475569] max-w-[500.77px] mx-auto leading-[150%]"
        >
          From scalable web platforms to enterprise-grade software, Tcee
          Technologies helps businesses launch faster, operate smarter, and grow
          without limits.
        </motion.p>

        {/* Buttons zoom up */}
        <motion.div
          initial={{ y: 20, opacity: 0, scale: 0.92 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 flex justify-center gap-5.75"
        >
          <Link
            href="#contact"
            className="bg-primary hover:bg-primary-hover text-white px-6.5 text-nowrap lg:px-5 lg:py-2.5 py-1.5 text-sm font-medium w-33 lg:w-38.25 lg:h-10 h-8 items-center flex justify-center gap-2 transition-transform duration-200 hover:-translate-y-0.5"
            style={{
              background: "var(--blue-700, #1D4ED8)",
              boxShadow:
                "0px 3px 7px 0px #B8D3FF1A, 0px 13px 13px 0px #B8D3FF17, 0px 30px 18px 0px #B8D3FF0D, 0px 53px 21px 0px #B8D3FF03, 0px 82px 23px 0px #B8D3FF00",
            }}
          >
            <span>Start a project</span>
            <Image src={ArrowRightIcon} alt="Arrow Right" width={16} height={16} className="inline-block ml-2" />
          </Link>
          <Link
            href="/#work"
            className="border border-[#CBD5E1] text-primary bg-[#EFF6FF] px-6.5 text-nowrap lg:px-5 lg:py-2.5 py-1.5 text-sm font-medium w-33 lg:w-38.75 lg:h-10 h-8 items-center flex justify-center gap-2 transition-transform duration-200 hover:-translate-y-0.5"
          >
            View our Work
          </Link>
        </motion.div>

        {/* Mockup — tilts up from below like a screen being lifted */}
        <motion.div
          initial={{ y: 80, opacity: 0, rotateX: -22, scale: 0.92 }}
          animate={{ y: 0, opacity: 1, rotateX: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
          className="mt-16 md:mt-12 relative w-full mx-auto"
        >
          <div className="w-full relative h-102.75">
            <Card3D maxTilt={5} scale={1.01} className="w-full h-full shadow-[0_20px_60px_-15px_rgba(16,65,213,0.15)] rounded-2xl overflow-hidden">
              <AnimatedMockup />
            </Card3D>
          </div>
        </motion.div>
      </div>

      {/* Stats — each rises in with stagger */}
      <div className="mt-12 flex flex-wrap justify-center gap-10 md:gap-24 text-slate-900">
        {[
          { end: 50, label: "Projects Delivered" },
          { end: 20, label: "Happy Clients" },
          { end: 6, label: "Years of Exp." },
        ].map((stat, i) => (
          <ScrollReveal3D key={stat.label} type="rise" delay={0.1 + i * 0.12} duration={0.6}>
            <motion.div
              whileHover={{ y: -4, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex flex-col items-center gap-1 cursor-default"
            >
              <span className="text-[24px] font-normal">
                <CountUp enableScrollSpy={true} scrollSpyOnce={true} end={stat.end} />+
              </span>
              <span className="text-[13px] text-[#475569] font-normal">{stat.label}</span>
            </motion.div>
          </ScrollReveal3D>
        ))}
      </div>
    </section>
  );
}
