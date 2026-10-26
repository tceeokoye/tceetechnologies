"use client";

import { motion } from "framer-motion";
import ReactIcon from "@/assets/icons/reactIcon.svg";
import NextJsIcon from "@/assets/icons/lineicons_nextjs.svg";
import TypeScriptIcon from "@/assets/icons/devicon_typescript.svg";
import TailwindIcon from "@/assets/icons/tailwindIcon.svg";
import NodejsIcon from "@/assets/icons/material-icon-theme_nodejs.svg";
import ExpressIcon from "@/assets/icons/express.svg";
import NextBackendIcon from "@/assets/icons/Nextjs.svg";
import PostQIcon from "@/assets/icons/postQ.svg";
import MongoDbIcon from "@/assets/icons/devicon_mongodb.svg";
import FireBaseIcon from "@/assets/icons/vscode-icons_file-type-firebase.svg";
import AwsIcon from "@/assets/icons/skill-icons_aws-dark.svg";
import VercelIcon from "@/assets/icons/vercel.svg";
import DigitalOcIcon from "@/assets/icons/devicon_digitalocean.svg";
import BackGrdImage from "@/assets/images/bgImage.svg";

import Image from "next/image";
import ScrollReveal3D from "./ScrollReveal3D";

const technologies = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: ReactIcon, width: 24, height: 24 },
      { name: "Next.js", icon: NextJsIcon, width: 24, height: 24 },
      { name: "TypeScript", icon: TypeScriptIcon, width: 20, height: 20 },
      { name: "Tailwind CSS", icon: TailwindIcon, width: 20, height: 12.03 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: NodejsIcon, width: 24, height: 24 },
      { name: "Express.js", icon: ExpressIcon, width: 24, height: 24 },
      { name: "NestJS", icon: NextBackendIcon, width: 24, height: 24 },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "PostgreSQL", icon: PostQIcon, width: 24, height: 24 },
      { name: "MongoDB", icon: MongoDbIcon, width: 24, height: 24 },
      { name: "Firebase", icon: FireBaseIcon, width: 24, height: 24 },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: AwsIcon, width: 24, height: 24 },
      { name: "Vercel", icon: VercelIcon, width: 24, height: 24 },
      { name: "DigitalOcean", icon: DigitalOcIcon, width: 24, height: 24 },
    ],
  },
];

export default function TechnologiesSection() {
  return (
    <section
      id="technologies"
      className="lg:px-30 px-4 flex items-center bg-white min-h-159.25 py-20 relative overflow-hidden technogiesSection section pb-8.5"
    >
      {/* Decorative vector graphic covering the entire height on the right */}
      <div className="block absolute inset-y-0 right-0 h-full w-full sm:w-1/2 lg:w-1/3 pointer-events-none">
        <Image
          src={BackGrdImage}
          alt="Technology decoration"
          fill
          className="object-cover object-right"
        />
      </div>

      <div className="w-full max-w-148.75 relative z-10">
        {/* Heading — flips in from right */}
        <div className="mb-8">
          <ScrollReveal3D type="flipRight" duration={0.75}>
            <h2 className="text-[32px] font-normal font-serif tracking-[-1px] leading-[140%] text-[#0f172a]">
              Powered by Industry-Leading Technologies
            </h2>
            <p className="text-base mt-2 font-normal text-[#475569]">
              We carefully select modern technologies that ensure performance,
              scalability, security, and long-term maintainability.
            </p>
          </ScrollReveal3D>
        </div>

        {/* Tech rows — each slides in from left with stagger */}
        <div className="space-y-8">
          {technologies.map((tech, index) => (
            <ScrollReveal3D
              key={tech.category}
              type="flipLeft"
              delay={index * 0.14}
              duration={0.7}
            >
              <h3 className="text-base font-normal font-serif text-[#0f172a] mb-4">
                {tech.category}
              </h3>
              <div className="flex flex-wrap gap-6">
                {tech.items.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.08, y: -2, rotateZ: 0.5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="flex items-center gap-1.5 cursor-pointer py-1 px-2 -mx-2 rounded-lg hover:bg-slate-100/60 transition-colors duration-200"
                  >
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={item.width}
                      height={item.height}
                    />
                    <span className="font-normal text-[#475569] text-base leading-[150%]">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal3D>
          ))}
        </div>
      </div>
    </section>
  );
}
