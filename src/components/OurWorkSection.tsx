"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import ArrowRightIcon from "@/assets/icons/arrow-right.svg";
import ArrowUp from "@/assets/icons/arrow-up-right.svg";
import { projects } from "@/lib/projects";

export default function OurWorkSection() {
  return (
    <section
      id="work"
      className="lg:py-20 py-10 px-4 lg:px-30 section"
    >
      <div className="w-full mx-auto">
        <div className="mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-[32px] font-normal font-serif leading-[140%] text-[#0f172a]"
          >
            Our Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="text-base font-normal text-[#475569] mt-1"
          >
            Turning ideas into digital brilliance
          </motion.p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full"
            >
              <div className="relative w-full h-59 overflow-hidden mb-2">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              </div>
              <h3 className="text-[24px] font-serif font-normal text-[#0f172a]">
                {project.title}
              </h3>
              <p className="text-base font-normal text-[#475569] mt-2 mb-2 w-full truncate">
                {project.description}
              </p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-4 flex justify-center md:gap-5.75 gap-4"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="bg-primary hover:bg-primary-hover text-white text-nowrap lg:px-5.75 lg:py-2.5 py-1.5 text-sm font-medium w-[50%] lg:h-10 h-8 items-center flex justify-center gap-2.5"
                  style={{
                    background: "var(--blue-700, #1D4ED8)",
                    boxShadow:
                      "0px 3px 7px 0px #B8D3FF1A, 0px 13px 13px 0px #B8D3FF17, 0px 30px 18px 0px #B8D3FF0D, 0px 53px 21px 0px #B8D3FF03, 0px 82px 23px 0px #B8D3FF00",
                  }}
                >
                  <span>Project Detail</span>
                  <Image
                    src={ArrowRightIcon}
                    alt="Arrow Right"
                    width={16}
                    height={16}
                    className="inline-block ml-2"
                  />
                </Link>
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#CBD5E1] text-primary bg-[#EFF6FF] px-6.5 text-nowrap lg:px-5.75 lg:py-2.5 py-1.5 text-sm font-medium w-[50%]  lg:h-10 h-8 items-center flex justify-center gap-2.5"
                >
                  <span>Visit site</span>
                  <Image
                    src={ArrowUp}
                    alt="Arrow Right"
                    width={16}
                    height={16}
                    className="inline-block ml-2"
                  />
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
