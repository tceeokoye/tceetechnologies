import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo/logo.svg";
import MobileLogo from "@/assets/logo/mobileLogo.svg";
import LinkdinIcon from "@/assets/socialIcon/linkdin.svg";
import TwitterXIcon from "@/assets/socialIcon/x.svg";
import FacebookIcon from "@/assets/socialIcon/facebook.svg";
import TicktockIcon from "@/assets/socialIcon/tiktock.svg";
import GitHUbIcon from "@/assets/socialIcon/github.svg";
import ScrollReveal3D from "./ScrollReveal3D";

export default function Footer() {
  return (
    <footer className="bg-[#EFF2FA] md:pt-20 pt-10  section relative overflow-hidden px-30">
      <div className="  relative z-10 ">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center border-b-[5px] border-slate-50 pb-5 mb-5">
          <ScrollReveal3D type="flipLeft" duration={0.7} className="space-y-4 md:mb-0">
            <Link href="/" className="flex items-center ">
              <Image
                src={Logo}
                alt="Logo"
                width={168.43}
                height={31.33}
                className=""
              />
              {/* <Image
                src={MobileLogo}
                alt="Logo"
                width={40}
                height={31.33}
                className="md:hidden"
              /> */}
            </Link>
            <div className="text-base font-normal text-[#475569] max-w-xs  mt-4 mb-6 md:mb-0">
              Building scalable software solutions for businesses worldwide.
            </div>
          </ScrollReveal3D>

          <ScrollReveal3D type="flipRight" delay={0.15} duration={0.7} className="">
            <p className="font-medium text-sm tracking-[-0.2px] leading-[140%]">
              Lets connect🔥
            </p>
            <div className="flex gap-1.75 mt-4">
              {[
                { icon: LinkdinIcon, alt: "LinkedIn", w: 22.88, h: 22.88 },
                { icon: TwitterXIcon, alt: "X", w: 24, h: 24 },
                { icon: TicktockIcon, alt: "TikTok", w: 16.29, h: 18.75 },
                { icon: GitHUbIcon, alt: "GitHub", w: 20, h: 19.52 },
                { icon: FacebookIcon, alt: "Facebook", w: 10.15, h: 18.25 },
              ].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white flex items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:scale-105 active:scale-95"
                >
                  <Image
                    src={item.icon}
                    alt={item.alt}
                    width={item.w}
                    height={item.h}
                  />
                </a>
              ))}
            </div>
          </ScrollReveal3D>
        </div>

        <div className="md:text-center text-[#0F172A] text-[18px] font-normal">
          &copy; {new Date().getFullYear()} TCEETECH
        </div>
      </div>

      {/* Huge watermark text */}
      <div className=" w-full text-center z-0 pointer-events-none overflow-hidden select-none -mb-1 mt-5 px-4 md:px-0">
        <Image
          src={Logo}
          alt="Logo"
          width={1280}
          height={238.15}
          className="opacity-10 w-full"
        />
      </div>
    </footer>
  );
}
