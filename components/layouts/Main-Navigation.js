import { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import Typewriter from "typewriter-effect";

import MobileNavigation from "./MobileNavigation";
import Portal from "../UI/Portal";

let navAnimationClass = "";

const navLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Projects",
    link: "/projects",
  },
  {
    title: "Shop",
    link: "/shop",
  },
  
  {
    title: "Code Support",
    link: "/code-support",
  },{
    title: "About",
    link: "/about",
  },
];

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const activeLink = router.pathname;


  const toggleDrawer = () => {
    if (isOpen) {
      navAnimationClass = "";
      setIsOpen((prevExpenses) => {
        return !prevExpenses;
      });
    } else {
      navAnimationClass = "open";
      setIsOpen((prevExpenses) => {
        return !prevExpenses;
      });
    }
  };

  const companyName = "<Tcee-Technologies/>";
  return (
    <>
      {" "}
     
      <header className="sticky top-0 backdrop-filter backdrop-blur-xl z-40 flex justify-between items-center h-max py-3 px-5 md:py-7 md:px-8">
        <div className="relative z-30" >
          <h1 className="animate-shimmering-silver-text leading-none text-lg font-bold md:text-4xl">
            {companyName}
          </h1>
          <div className="italic pl-12 text-[8.5px] md:pl-20 md:text-base">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.pauseFor(1500)
                  .typeString(
                    '<span className="italic">God inspires,  the code flows from my hands</span>'
                  )
                  .start();
              }}
              options={{
                typeSpeed: 100,
                cursor: '<span class="text-[9px] md:text-base">|</span>',
                html: false,
              }}
            />
          </div>
        </div>
        <nav className="hidden text-sm space-x-1 lg:flex xl:space-x-4 xl:text-lg">
          {navLinks.map((linkData, index) => {
            const navLinkStyle =
              activeLink === linkData.link
                ? "border border-primary1 rounded-md flex items-center px-4 py-3 animate-flicker-neon"
                : "flex items-center px-5";
            return (
              <Link
              key={index}
               className={navLinkStyle} href={linkData.link}>
                {linkData.title}
              </Link>
            );
          })}
        </nav>
        <button
          className={`${navAnimationClass} z-0 block hamburger lg:hidden focus:outline-none`}
          type="button"
          onClick={toggleDrawer}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </header>
      <Portal>
        <div
          className={` fixed inset-y-0 h-screen w-screen z-50 lg:hidden transform  ${
            isOpen ? "translate-y-0" : "-translate-y-[120%] opacity-60"
          } transition-transform duration-1000 ease-in-out`}
        >
          <MobileNavigation
            navAnimationClass={navAnimationClass}
            onClick={toggleDrawer}
          />
        </div>
      </Portal>
    </>
  );
};

export default MainNavigation;
