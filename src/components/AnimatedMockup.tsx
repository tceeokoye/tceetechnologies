"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import BgGredient from "@/assets/images/animation.svg"

import OverlayImageBg from "@/assets/images/bgOverlay.jpeg"
const Cursor = ({
  color,
  textColor,
  name,
  initialPos,
  animatePos,
  animateRotate,
  delay = 0,
  fillOverride,
  strokeOverride,
  transitionOverride,
}: any) => {
  const rotateArr = animateRotate || [-15, -15, -15, -15, -15, -15, -15, -15];

  return (
    <motion.div
      className="absolute   z-20 pointer-events-none"
      initial={initialPos}
      animate={animatePos}
      transition={transitionOverride}
    >
      <motion.svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=" relative"
        style={{ left: "-6px", top: "-4px", transformOrigin: "12px 12px" }}
        initial={{ rotate: rotateArr[0] }}
        animate={{ rotate: rotateArr }}
        transition={transitionOverride}
      >
        <path
          d="M5.5 3.5L19.5 10.5L12 12L10.5 19.5L5.5 3.5Z"
          fill={fillOverride || color}
          stroke={strokeOverride || "white"}
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </motion.svg>
      <div
        className="px-2.5 py-1  w-26 text-[9.8px] font-medium  absolute top-2.5 left-2.5"
        style={{ backgroundColor: color, color: textColor }}
      >
        {name}
      </div>
    </motion.div>
  );
};

const BoundingBox = ({
  color,
  width = "108px",
  height = "36px",
  opacityArray = [0, 0, 0, 1, 1, 1, 0, 0],
  top = "-3px",
  left = "-3px",
}: {
  color: string;
  width?: string;
  height?: string;
  opacityArray?: number[];
  top?: string;
  left?: string;
}) => (
  <motion.div
    className="absolute pointer-events-none z-10 "
    style={{
      width,
      height,
      top,
      left,
      border: `1px solid ${color}`,
    }}
    animate={{ opacity: opacityArray }}
    transition={{
      duration: 10,
      times: [0, 0.3, 0.4, 0.5, 0.7, 0.8, 0.9, 1],
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <div
      className="absolute w-1 h-1 bg-white border "
      style={{ top: "-2px", left: "-2px", borderColor: color }}
    />
    <div
      className="absolute w-1 h-1 bg-white border "
      style={{ top: "-2px", right: "-2px", borderColor: color }}
    />
    <div
      className="absolute w-1 h-1 bg-white border "
      style={{ bottom: "-2px", left: "-2px", borderColor: color }}
    />
    <div
      className="absolute w-1 h-1 bg-white border "
      style={{ bottom: "-2px", right: "-2px", borderColor: color }}
    />
  </motion.div>
);

export default function AnimatedMockup() {
  const globalTransition = {
    duration: 6.6,
    times: [0, 0.303, 0.333, 0.636, 0.666, 0.97, 1],
    repeat: Infinity,
    ease: "easeInOut" as const,
  };

  return (
    <div
      className="relative    overflow-hidden bg-[#FFFFFF] w-full h-105.5 px-3 select-none"
      // style={{
      //   boxShadow:
      //     "0px 140px 220px -60px #1041D54D, 0px 80px 160px -40px #1041D526, 0px 48px 100px -20px #1041D51F, 0px 24px 48px -12px #1041D51A, 0px 8px 16px -4px #1041D514, 0px 0px 0px 1px #1041D50A, 0px 1px 0px 0px #FFFFFFCC inset",
      // }}
    >
      <div
        className="bg-[#F9FCFF] px-6 relative overflow-hidden"
        style={{ borderTop: "1px solid var(--color-blue-456, #1041D50F)" }}
      >
        <div className="h-px w-full my-4 bg-[#E0E5F1]" />
        <div className="w-full h-full flex flex-col gap-8 relative py-6">
          <div className="flex flex-1 gap-5  items-center justify-center w-full h-47">
            <div className="flex-1  flex flex-col gap-3 h-35  ">
              <div className="w-62 h-3.5 bg-[#C8D3EA] rounded-sm" />
              <div className="w-54.25 h-3.5 bg-[#C8D3EA] rounded-sm" />
              <div className="w-46.5 h-3 mt-1 bg-[#E0E5F1] rounded-sm" />
              <div className="w-62 h-3 bg-[#E0E5F1] rounded-sm" />

              <div className=" relative mt-1 h-9 flex items-center w-26.5 ">
                <div className=" left-0 pl-2 text-[10px] text-[#94A3B8] text-left font-mono tracking-widest z-0 ">
                  &lt;H1____&lt;H1&gt;
                </div>

                <motion.div
                  className="absolute left-0 right-0 mx-auto top-0 bottom-0 my-auto w-25 bg-[#EFF2FA] h-7 z-10 border border-[#C8D3EA] border-t-[#33415580] rounded-md"
                  animate={{ y: [0, 0, 24, 24, 0, 0, 0] }}
                  transition={{
                    duration: 6.6,
                    times: [0, 0.303, 0.333, 0.636, 0.666, 0.97, 1],
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <BoundingBox
                    color="var(--color-azure-2750, #33415580)"
                    width="108px"
                    height="36px"
                    top="-5px"
                    left="-5px"
                    opacityArray={[1, 1, 1, 1, 1, 1, 1, 1]}
                  />
                </motion.div>

                <motion.div
                  className="w-25 h-7 rounded-md bg-[#EFF2FA] border border-[#C8D3EA] border-t-[#33415580] absolute left-0 right-0 mx-auto top-0 bottom-0 my-auto z-20"
                  animate={{ y: [0, 0, 24, 24, 0, 0, 0] }}
                  transition={{
                    duration: 6.6,
                    times: [0, 0.303, 0.333, 0.636, 0.666, 0.97, 1],
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <Cursor
                  name="Developer"
                  color="#0F172A"
                  textColor="#FFFFFF"
                  initialPos={{ left: "calc(60% + 6.5px)", top: "0px" }}
                  animatePos={{
                    left: [
                      "calc(60% + 6.5px)",
                      "calc(60% + 6.5px)",
                      "calc(110% + 8px)",
                      "calc(110% + 8px)",
                      "calc(100% + 6.5px)",
                      "calc(100% + 6.5px)",
                      "calc(60% + 6.5px)",
                    ],
                    top: [
                      "-2px",
                      "-2px",
                      "18px",
                      "18px",
                      "40px",
                      "40px",
                      "-2px",
                    ],
                  }}
                  animateRotate={[-30, -30, -30, -30, -110, -110, -30]}
                  transitionOverride={{
                    duration: 6.6, // 6 seconds of pausing + 0.6 seconds of moving
                    times: [
                      0,
                      0.303, // (PAUSE) Stays at Point A for exactly 2 seconds
                      0.333, // (FAST MOVE) Darts to Point B in 0.2 seconds
                      0.636, // (PAUSE) Stays at Point B for exactly 2 seconds
                      0.666, // (FAST MOVE) Darts to Point C in 0.2 seconds
                      0.97, // (PAUSE) Stays at Point C for exactly 2 seconds
                      1, // (FAST MOVE) Darts back to Point A in 0.2 seconds
                    ],
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>

            <motion.div
              className="flex-1 rounded-xl md:flex items-center justify-center h-35 w-full hidden  relative"
              animate={{
                backgroundColor: [
                  "#EFF2FA",
                  "#EFF2FA",
                  "#fafaef",
                  "#fafaef",
                  "#FFEDD5",
                  "#FFEDD5",
                  "#EFF2FA",
                ],
              }}
              transition={globalTransition}
            >
              <BoundingBox
                color="var(--color-blue-4540, #1041D666)"
                height="calc(100% + 10px)"
                width="calc(100% + 10px)"
                top="-5px"
                left="-5px"
                opacityArray={[1, 1, 1, 1, 1, 1, 1, 1]}
              />

              <div className=" rounded-lg font-medium text-sm bg-[#F9FCFF] w-46.5 h-16"></div>
            </motion.div>
          </div>

          {/* <div className="flex flex-col  gap-6 border-t border-[#E0E5F1] pt-6">
            <div className="w-24 h-3 bg-[#C8D3EA] rounded-full" />
            <div className="grid grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-32 bg-[#F1F5F9] rounded-xl border border-[#E0E5F1] p-4 flex flex-col gap-3"
                >
                  <div className="w-8 h-8 bg-[#C8D3EA]/60 rounded-md" />
                  <div className="w-full h-2 bg-[#E0E5F1] rounded-full mt-2" />
                  <div className="w-2/3 h-2 bg-[#E0E5F1] rounded-full" />
                </div>
              ))}
            </div>
          </div> */}
        </div>

        <Cursor
          name="Founder"
          color="#A3A3A3"
          textColor="#EFF6FF"
          fillOverride="#FFFFFF"
          strokeOverride="#94A3B8"
          initialPos={{ left: "23.5%", top: "2%" }}
          animatePos={{
            left: ["23.5%", "23.5%", "37.5%", "37.5%", "43%", "43%", "23.5%"],
            top: ["2%", "2%", "9%", "9%", "25%", "25%", "2%"],
          }}
          animateRotate={[-30, -30, -30, -30, -30, -30, -30]}
          transitionOverride={globalTransition}
        />

        <Cursor
          name="Design"
          color="#7DD3FC"
          fillOverride="#2255E8"
          textColor="#6E757D"
          initialPos={{ left: "60%", top: "29%" }}
          animatePos={{
            left: ["60%", "60%", "54%", "54%", "75%", "75%", "60%"],
            top: ["29%", "29%", "13%", "13%", "38%", "38%", "29%"],
          }}
          animateRotate={[-30, -30, -30, -30, -30, -30, -30]}
          transitionOverride={globalTransition}
        />
        
        <div className="w-full h-36.75 border-t border-t-[#E0E5F1] mt-9 relative ">
          {/* <div className="h-2.5 w-25 rounded-sm bg-[#C8D3EA] mt-5" />
          <div className="flex gap-3 relative">
            <div className="w-[206.67px] h-25 bg-[#EFF2FA] p-4 rounded-lg mt-4 space-y-2">
              <div className="h-6 w-6 bg-[#F9FCFF] border border-[#E0E5F1] " />

              <div className="h-2 w-[122.5px] rounded-sm bg-[#C8D3EA] " />
              <div className="h-1.5 w-[157.19px] rounded-sm bg-[#E0E5F1] " />
              <div className="h-1.5 w-[104.78px] rounded-sm bg-[#E0E5F1] " />
            </div>
            <div className="w-[206.67px] h-25 bg-[#EFF2FA] hidden md:block p-4 rounded-lg mt-4 space-y-2">
              <div className="h-6 w-6 bg-[#F9FCFF] border border-[#E0E5F1] " />

              <div className="h-2 w-[122.5px] rounded-sm bg-[#C8D3EA] " />
              <div className="h-1.5 w-[157.19px] rounded-sm bg-[#E0E5F1] " />
              <div className="h-1.5 w-[104.78px] rounded-sm bg-[#E0E5F1] " />
            </div>
            <div className="w-[206.67px] h-25 hidden md:block bg-[#EFF2FA] p-4 rounded-lg mt-4 space-y-2">
              <div className="h-6 w-6 bg-[#F9FCFF] border border-[#E0E5F1] " />

              <div className="h-2 w-[122.5px] rounded-sm bg-[#C8D3EA] " />
              <div className="h-1.5 w-[157.19px] rounded-sm bg-[#E0E5F1] " />
              <div className="h-1.5 w-[104.78px] rounded-sm bg-[#E0E5F1] " />
            </div>
          <Image src={OverlayImageBg} alt="bg image" height={350}  width={500} className="w-full h-87.5 md:hidden absolute -top-40 opacity-[30%] right-0 "/>
          <Image src={BgGredient} fill alt="bg"/>
            <div
              className="h-45 w-full  absolute bottom-0"
              // style={{
              //   background:
              //     "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 30%, rgba(255, 255, 255, 0.7) 60%, #FFFFFF 100%)",
              // }}
            />
            <Image src={BgGredient} fill alt="bg"/>
          </div> */}
          
         
        </div>
          <Image src={OverlayImageBg} alt="bg image" height={350}  width={657} className="w-173.5 h-36.75 absolute -bottom-4 -left-2 "  />
      </div>
    </div>
  );
}
