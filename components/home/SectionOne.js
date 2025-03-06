import handleWhatsAppClick from "@/helpers/whatsapp";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const skills = [
  "Javascript",
  "Typescript",
  "Phython",
  "HTML",
  "CSS",
  "SCSS",
  "Dart",
  "C++",
];
const sendMessageHandler = () => {
  handleWhatsAppClick(
    "Hello! 👋 I just visited your portfolio and I'm truly inspired by your journey and skills. I'd love to connect and potentially discuss collaboration opportunities or seek advice in the field. Looking forward to chatting with you further! 🚀",
    "+2348105175500"
  );
};

const TextTransition = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState(skills[0]);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);

      setTimeout(() => {
        const newIndex = (currentPhraseIndex + 1) % skills.length;
        setCurrentPhraseIndex(newIndex);
        setCurrentPhrase(skills[newIndex]);
        setIsGlitching(false);
      }, 500); // Delay before updating phase
    }, 1500);

    return () => clearInterval(interval);
  }, [currentPhraseIndex]);

  return (
    <div className="flex items-center justify-center mt-10">
      <h2
        className={`text-4xl font-semibold ${
          isGlitching ? "animate-glitch" : ""
        }`}
      >
        {currentPhrase}
      </h2>
    </div>
  );
};

const SectionOne = () => {
  return (
    <section>
      <div className="relative z-20 text-center flex flex-col h-screen items-center justify-center space-y-8 text-primary1/85 pb-16 px-5 md:px-12 md:pb-0 ">
        <div className="w-full md:w-[95%] pt-5 backdrop-filter backdrop-blur-sm">
          {" "}
          <div className="relative z-30 flex flex-wrap justify-center items-center animate-text-glitch">
            <p className="text-lg font-medium md:text-4xl">
              Greetings, esteemed visitor!{" "}
            </p>
            <div className="h-10 w-10 md:h-20 md:w-20">
              {" "}
              <Image
                src="/images/icon/hi-icon.gif"
                alt="Hello in Vibrant Typography: A Friendly Greeting from Tcee-tech"
                loading="eager"
                priority
                className="h-full w-full bg-transparent"
                width={40}
                height={40}
              />
            </div>
          </div>
          <div className="relative z-30 text-2xl space-y-3  md:text-5xl 2xl:text-6xl">
            <h2 className="shadow-inner leading-tight font-semibold mb-10 animate-text-glitch">
              What took you so long to find me? I'm{" "}
              <span className="text-white font-bold">Obichukwu Truth</span>, my
              expertise lies in the realm of
              <span className="animate-scramble-text text-white font-bold">
                {" "}
                Front End Software Engineering.
              </span>
              {""}
            </h2>
          </div>
        </div>

        <button
          onClick={sendMessageHandler}
          className="shadow-custom-shadow flex items-center bg-black px-5 h-11 text-white rounded-md md:h-14"
        >
          <p className="text-sm md:text-lg">Send Message</p>
          <div className="h-5 w-5 ml-2 rounded-full overflow-hidden md:h-7 md:w-7">
            {" "}
            <Image
              src="/images/icon/send-icon.gif"
              alt="Message Icon: Reach Out and Connect with Tcee tech"
              className="w-full h-full"
              loading="eager"
              priority
              width={16}
              height={16}
            />
          </div>
        </button>
      </div>
      <div className={`bg-primary1 py-6 flex overflow-hidden`}>
        <p
          className={`text-base md:text-xl text-center text-primary px-5`}
        >
         Crafting digital masterpieces line by line, Tcee technologies transforms code into innovation, bytes into brilliance, and algorithms into art. Embrace the elegance of technology with me.
       
        </p>
      </div>
      <TextTransition />
    </section>
  );
};

export default SectionOne;
