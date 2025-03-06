import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Typewriter from "typewriter-effect";
import handleWhatsAppClick from "@/helpers/whatsapp";

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



const MobileNavigation = (props) => {
  const router = useRouter();
  const activeLink = router.pathname;

  const companyName = "<tcee-tech/>";

  const sendMessageHandler = () => { 
    handleWhatsAppClick(
      "Hello! 👋 I just visited your portfolio and I'm truly inspired by your journey and skills. I'd love to connect and potentially discuss collaboration opportunities or seek advice in the field. Looking forward to chatting with you further! 🚀",
      "+2348105175500"
    );
  };

  return (
    <div className="flex flex-col overflow-y-auto bg-white text-white w-full h-full">
      
      <div className="bg-primary flex justify-between items-center py-8 px-5">
      <div>
          <h1 className="animate-shimmering-silver-text font-poppins leading-none text-xl font-bold text-medium md:text-4xl">
            {companyName}
          </h1>
         <div className="italic pl-12 text-[10px] md:pl-28 md:text-base"><Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  '<span className="italic">God inspires,  the code flows from my hands.</span>'
                )
                .start();
            }}
            options={{
              typeSpeed: 100,
              cursor: '<span class="text-[9px]">|</span>',
              html: false,
            }}
          /></div> 
         
        </div>
        <button
          className={`${props.navAnimationClass} block hamburger 2xl:hidden focus:outline-none`}
          type="button"
          onClick={props.onClick}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      <div className="overflow-y-auto flex-1 pb-8">
        {" "}
       <div> {navLinks.map((linkData, index) => {
          const textColor =
            activeLink === linkData.link
              ? "text-primary text-medium animate-flicker-neon"
              : "text-primary1";
          return <Link
              onClick={props.onClick}
              key={index}
              className={`${textColor} my-5 text-lg block py-5 border-b w-full text-center`}
              href={linkData.link}
            >
              {linkData.title}
            </Link>
        })}{" "} </div>
        <button 
        onClick={sendMessageHandler}
        className="flex items-center mx-auto bg-black px-5 py-3 text-white rounded-md">
         <p> Send Message</p>
          
          <Image
            src="/images/icon/arrow-right.svg"
            alt="Message Icon: Reach Out and Connect with tcee-tech"
            className="h-4 w-4 ml-2"
            width={16}
            height={16}
          />
        </button>
         </div>
     
    </div>
  );
};

export default MobileNavigation;
