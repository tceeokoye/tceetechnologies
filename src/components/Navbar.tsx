"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo/logo.svg";
import MobileLogo from "@/assets/logo/mobileLogo.svg";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 lg:px-[198.28px] px-4"
    >
      {/* Header Container — sharp unrounded edges, smoothly expands on mobile when open */}
      <div className="w-full bg-white mt-11.25 md:mt-7.5 backdrop-blur-md mx-auto px-5 sm:px-6 lg:px-8 shadow-[0px_4px_20px_rgba(0,0,0,0.06)] overflow-hidden transition-all duration-300">
        {/* Top Navbar Row */}
        <div className="md:h-18 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={Logo}
              alt="Logo"
              width={174.44}
              height={31.32}
              className={` md:block ${isOpen? "flex" :"hidden"}`}
            />
            <Image
              src={MobileLogo}
              alt="Logo"
              width={40}
              height={31.33}
              className={`md:hidden ${isOpen? "hidden" :"flex"}`}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-10.25 justify-between text-base font-normal text-[#475569]">
            <Link href="/#work" className="hover:text-primary transition-colors">
              Our Work
            </Link>
            <Link
              href="/#testimonials"
              className="hover:text-primary transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="/#contact"
              className="hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Action Button & Mobile Hamburger Toggle */}
          <div className="flex gap-3 items-center">
            <Link
              href="/#contact"
              className={`bg-primary hover:bg-primary-hover text-white px-5 text-nowrap lg:px-5 lg:py-2.5 py-1.5 text-sm font-medium w-30 lg:w-38.25 lg:h-10 h-8 items-center  justify-center gap-2 transition-transform active:scale-95 ${isOpen? "hidden":"flex"}`}
              style={{
                background: "var(--blue-700, #1D4ED8)",
                boxShadow:
                  "0px 3px 7px 0px #B8D3FF1A, 0px 13px 13px 0px #B8D3FF17, 0px 30px 18px 0px #B8D3FF0D, 0px 53px 21px 0px #B8D3FF03, 0px 82px 23px 0px #B8D3FF00",
              }}
            >
              <span>Let’s talk</span>
              <Image
                src={ArrowRightIcon}
                alt="Arrow Right"
                width={16}
                height={16}
                className="inline-block ml-1"
              />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden h-8 w-8 bg-[#EFF6FF] flex items-center justify-center cursor-pointer transition-all active:scale-95 border border-[#CBD5E1] ${
                isOpen ? "text-[#3B82F6]" : "text-[#475569]"
              }`}
              style={{
                boxShadow:
                  "0px 3px 7px 0px #B8D3FF1A, 0px 13px 13px 0px #B8D3FF17, 0px 30px 18px 0px #B8D3FF0D, 0px 53px 21px 0px #B8D3FF03, 0px 82px 23px 0px #B8D3FF00",
              }}
              aria-label="Toggle mobile menu"
            >
              <motion.svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                stroke="currentColor"
                initial="closed"
                animate={isOpen ? "open" : "closed"}
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  variants={{
                    closed: { d: "M4 6L20 6" },
                    open: { d: "M6 18L18 6" },
                  }}
                  transition={{ duration: 0.25 }}
                />
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 12L20 12"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  variants={{
                    closed: { d: "M4 18L20 18" },
                    open: { d: "M6 6L18 18" },
                  }}
                  transition={{ duration: 0.25 }}
                />
              </motion.svg>
            </button>
          </div>
        </div>

        {/* Integrated Mobile Dropdown Tray — expands/collapses directly inside header */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
              className="md:hidden flex flex-col pb-6  "
            >
              <div className="flex flex-col gap-4 font-normal text-base text-[#475569] my-8 leading-[150%]">
                <Link
                  href="/#work"
                  onClick={closeMenu}
                  className="py-1 hover:text-primary transition-colors"
                >
                  Our Work
                </Link>
                <Link
                  href="/#testimonials"
                  onClick={closeMenu}
                  className="py-1 hover:text-primary transition-colors"
                >
                  Testimonial
                </Link>
                <Link
                  href="/#contact"
                  onClick={closeMenu}
                  className="py-1 hover:text-primary transition-colors"
                >
                  About
                </Link>
              </div>

              <div className="">
                <Link
                  href="/#contact"
                  onClick={closeMenu}
                  className="w-full bg-primary hover:bg-primary-hover text-white py-2.5 text-sm font-medium items-center flex justify-center gap-2 transition-transform active:scale-98"
                  style={{
                    background: "var(--blue-700, #1D4ED8)",
                    boxShadow:
                      "0px 3px 7px 0px #B8D3FF1A, 0px 13px 13px 0px #B8D3FF17, 0px 30px 18px 0px #B8D3FF0D, 0px 53px 21px 0px #B8D3FF03, 0px 82px 23px 0px #B8D3FF00",
                  }}
                >
                  <span>Let’s talk</span>
                  <Image
                    src={ArrowRightIcon}
                    alt="Arrow Right"
                    width={16}
                    height={16}
                  />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
