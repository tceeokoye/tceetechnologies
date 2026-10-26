import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ArrowUp from "@/assets/icons/arrow-up-right.svg";
import ScrollReveal3D from "@/components/ScrollReveal3D";
import InteractiveMockupCard from "@/components/InteractiveMockupCard";
import InteractiveHeroCard from "@/components/InteractiveHeroCard";
import ArrowLeftIcon from "@/assets/arrow-left.svg"
import ArrowRight from "@/assets/arrow-right.svg"
import {
  projects,
  getProjectBySlug,
  getPrevNextProjects,
} from "@/lib/projects";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { prev, next } = getPrevNextProjects(slug);

  return (
    <main className="min-h-screen bg-[#F5F5F5]">
      <Navbar />

      {/* ─────────────────────────────────────────────────────────────
          1. HERO / PROJECT HEADER
      ───────────────────────────────────────────────────────────── */}
      <section className="pt-32 ">
        <div className="w-full">
          <div className="w-full max-w-154 m-auto pb-15.5 px-4 sm:px-0">
            {/* Title - Smooth 3D Entrance */}
            <ScrollReveal3D type="dive" duration={0.7}>
              <h1 className="text-[42px] w-full font-normal font-serif leading-[140%] tracking-tight text-[#0f172a]">
                {project.title}
              </h1>
            </ScrollReveal3D>

            {/* Tagline / Subtitle */}
            <ScrollReveal3D type="rise" delay={0.1} duration={0.65}>
              <p className="text-[#475569] text-lg font-normal mt-2 leading-[150%]">
                {project.tagline}
              </p>
            </ScrollReveal3D>

            {/* Year / Date */}
            <ScrollReveal3D type="fade" delay={0.18} duration={0.5}>
              <p className="mt-2 mb-6 text-sm md:text-base font-normal text-[#3B82F6] leading-[140%]">
                {project.date}
              </p>
            </ScrollReveal3D>

            {/* Hero Cover Image Card with 3D Tilt */}
            <InteractiveHeroCard src={project.image} alt={project.title} />

            {/* View Live Button */}
            <div className="flex justify-start">
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#CBD5E1] text-primary bg-[#EFF6FF] px-6.5 text-nowrap lg:px-5.75 lg:py-2.5 py-1.5 text-sm font-medium w-56 h-10 items-center flex justify-center gap-2.5 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md active:scale-95"
              >
                <span>View Live</span>
                <Image
                  src={ArrowUp}
                  alt="Arrow Up Right"
                  width={14}
                  height={14}
                  className="inline-block ml-1"
                />
              </Link>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              2. ABOUT PROJECT SECTION (Contains 3 Mockups)
          ───────────────────────────────────────────────────────────── */}
          <div className="bg-[#FFFFFF] w-full pt-10 ">
            <div className="max-w-148.5 m-auto px-4 sm:px-0">
              <ScrollReveal3D type="rise" duration={0.7}>
                <h2 className="text-[32px] font-normal font-serif text-[#000000] leading-[140%] tracking-tight">
                  About Project
                </h2>
                <p className="text-[#475569] text-base md:text-lg font-normal mt-2 leading-[150%]">
                  {project.about.text}
                </p>
              </ScrollReveal3D>

              {/* Stacked 3D Interactive Mockups for About Section */}
              <div className="pt-6.25 space-y-6.25 ">
                {/* About Mockup 1 - No rounded corners */}
                <InteractiveMockupCard
                  mockup={project.about.mockup1}
                  rounded={false}
                />

                {/* About Mockup 2 - Rounded 17.4px */}
                <InteractiveMockupCard
                  mockup={project.about.mockup2}
                  rounded={true}
                />

                {/* About Mockup 3 - Rounded 17.4px */}
                <InteractiveMockupCard
                  mockup={project.about.mockup3}
                  rounded={true}
                />
              </div>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              3. CHALLENGE SECTION (Contains 1 Mockup)
          ───────────────────────────────────────────────────────────── */}
          <div className="bg-[#FFFFFF] w-full pt-6.25">
            <div className="max-w-148.5 m-auto px-4 sm:px-0">
              <ScrollReveal3D type="rise" duration={0.7}>
                <h2 className="text-[32px] font-normal font-serif text-[#000000] leading-[140%] tracking-tight">
                  {project.challenge.title}
                </h2>
                <p className="text-[#475569] text-base md:text-lg font-normal mt-2 leading-[150%]">
                  {project.challenge.text}
                </p>
              </ScrollReveal3D>

              {/* Challenge Mockup with 3D Depth */}
              <div className="pt-6.25 ">
                <InteractiveMockupCard
                  mockup={project.challenge.mockup}
                  rounded={true}
                />
              </div>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              4. SOLUTION & NAVIGATION SECTION
          ───────────────────────────────────────────────────────────── */}
          <div className="bg-[#FFFFFF] w-full pt-6.25">
            <div className="max-w-148.5 m-auto px-4 sm:px-0">
              <ScrollReveal3D type="rise" duration={0.7}>
                <h2 className="text-[32px] font-normal font-serif text-[#000000] leading-[140%] tracking-tight">
                  {project.solution.title}
                </h2>
                <p className="text-[#475569] text-base md:text-lg font-normal mt-2 leading-[150%]">
                  {project.solution.text}
                </p>
              </ScrollReveal3D>

              {/* Previous / Next Navigation Buttons with 3D Scroll Reveal */}
              <ScrollReveal3D type="rise" delay={0.15} duration={0.65}>
                <div className="pt-6.25 pb-20 flex items-center justify-between gap-4">
                  {/* Previous Project Button */}
                    <Link
                 href={`/projects/${prev.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#CBD5E1] text-primary bg-[#EFF6FF] px-6.5 text-nowrap lg:px-5.75 lg:py-2.5 py-1.5 text-sm font-medium w-56 h-10 items-center flex justify-center gap-2.5 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md active:scale-95"
              >
                <span>{prev.title}</span>
                <Image
                  src={ArrowLeftIcon}
                  alt="Arrow  Right"
                  width={14}
                  height={14}
                  className="inline-block ml-1"
                />
              </Link>
                  

                  {/* Next Project Button */}
                  <Link
                    href={`/projects/${next.slug}`}
                    className="bg-[#1D4ED8] hover:bg-[#1e40af] text-white px-6 sm:px-8 py-2.5 text-sm font-medium transition-all flex items-center gap-2 hover:-translate-y-0.5 active:scale-95"
                    style={{
                      background: "var(--blue-700, #1D4ED8)",
                      boxShadow:
                        "0px 3px 7px 0px #B8D3FF1A, 0px 13px 13px 0px #B8D3FF17, 0px 30px 18px 0px #B8D3FF0D, 0px 53px 21px 0px #B8D3FF03",
                    }}
                  >
                    <span>{next.title} →</span>
                  </Link>
                </div>
              </ScrollReveal3D>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}

