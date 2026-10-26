"use client";

import Image from "next/image";
import Icon1 from "@/assets/icons/pointer.svg";
import Link from "next/link";
import ArrowUp from "@/assets/icons/arrow-up-right.svg";
import Icon2 from "@/assets/icons/dev.svg";
import Icon3 from "@/assets/icons/square.svg";
import Icon4 from "@/assets/icons/icon1.svg";
import Icon5 from "@/assets/icons/icon2.svg";
import Icon6 from "@/assets/icons/icon3.svg";
import Icon7 from "@/assets/icons/icon4.png";
import Card3D from "./Card3D";
import ScrollReveal3D from "./ScrollReveal3D";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-4 lg:px-30 bg-[#3B82F6] relative overflow-hidden section"
    >
      <div>
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left — text content flips in from the left */}
          <div className="lg:w-1/2 text-white">
            <ScrollReveal3D type="flipLeft" duration={0.7}>
              <div className="flex bg-linear-to-b rounded-lg from-[#334155] to-[#1E293B] items-center justify-center gap-1 backdrop-blur-md h-10 w-59 mb-8 shadow-[0px_1px_0px_0px_#FFFFFF1A_inset,0px_4px_12px_0px_#0F172A4D,0px_0px_0px_1px_#FFFFFF14]">
                {[
                  { src: Icon1, w: 14, h: 14 }, { src: Icon2, w: 16, h: 16 }, { src: Icon3, w: 14, h: 14 },
                  { src: Icon4, w: 14, h: 14 }, { src: Icon5, w: 10, h: 20 }, { src: Icon6, w: 26, h: 28 }, { src: Icon7, w: 14, h: 14 },
                ].map((icon, i) => (
                  <div key={i} className="h-7 w-7 flex items-center justify-center">
                    <Image src={icon.src} alt="dev" width={icon.w} height={icon.h} />
                  </div>
                ))}
              </div>
            </ScrollReveal3D>

            <ScrollReveal3D type="rise" delay={0.15} duration={0.7}>
              <h2 className="text-[32px] font-normal font-serif tracking-[-1] leading-[140%]">
                Let&apos;s Build Something Exceptional
              </h2>
              <p className="mt-2 text-primary-50 text-base font-normal leading-[150%]">
                Have a project in mind? We&apos;d love to learn more about your goals
                and explore how we can help bring your vision to life.
              </p>
            </ScrollReveal3D>
          </div>

          {/* Right — form flips in from the right */}
          <div className="lg:w-1/2 w-full">
            <ScrollReveal3D type="flipRight" delay={0.25} duration={0.8}>
              <Card3D maxTilt={4} scale={1.01} className="w-full">
                <div className="bg-white p-6 shadow-2xl">
                  <form className="space-y-10.5 text-[18px] font-normal font-serif">
                    <div>
                      <label htmlFor="name" className="sr-only leading-[140%] tracking-[-1]">Your name</label>
                      <input type="text" id="name" placeholder="Your name" className="w-full border-b-2 border-slate-200 py-3 px-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="email" className="sr-only leading-[140%] tracking-[-1]">Your email</label>
                      <input type="email" id="email" placeholder="Your email" className="w-full border-b-2 border-slate-200 py-3 px-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="message" className="sr-only leading-[140%] tracking-[-1]">Project description</label>
                      <textarea id="message" rows={4} placeholder="Project description" className="w-full border-b-2 border-slate-200 py-3 px-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
                    </div>
                    <div className="flex  justify-center gap-4 w-full">
                      <Link
                        href="#contact"
                        className="bg-primary hover:bg-primary-hover text-white text-nowrap lg:px-5.75 lg:py-2.5 py-1.5 text-sm font-medium w-[50%] h-10 items-center flex justify-center gap-2.5 transition-transform duration-200 hover:-translate-y-0.5"
                        style={{ background: "var(--blue-700, #1D4ED8)", boxShadow: "0px 3px 7px 0px #B8D3FF1A, 0px 13px 13px 0px #B8D3FF17, 0px 30px 18px 0px #B8D3FF0D, 0px 53px 21px 0px #B8D3FF03, 0px 82px 23px 0px #B8D3FF00" }}
                      >
                        <span>Project Detail</span>
                      </Link>
                      <Link
                        href="#contact"
                        className="border border-[#CBD5E1] text-primary bg-[#EFF6FF] px-6.5 text-nowrap lg:px-5.75 lg:py-2.5 py-1.5 text-sm font-medium w-[50%]  h-10 items-center flex justify-center gap-2.5 transition-transform duration-200 hover:-translate-y-0.5"
                      >
                        <span>Send message</span>
                        <Image src={ArrowUp} alt="Arrow Right" width={16} height={16} className="inline-block" />
                      </Link>
                    </div>
                  </form>
                </div>
              </Card3D>
            </ScrollReveal3D>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4"></div>
    </section>
  );
}
