import Image from "next/image";

import handleWhatsAppClick from "@/helpers/whatsapp";
import Head from "next/head";
import Footer from "@/components/layouts/Footer";

const sendMessageHandler = () => {
  handleWhatsAppClick(
    "I'm reaching out through your portfolio website as I've encountered a coding issue and believe you could provide valuable assistance.",
    "+2348105175500"
  );
};
const CodeSupport = () => {
  return (
    <>
      <Head>
        <title>Code Debugging Services - tcee-tech</title>
        <meta
          name="description"
          content="Get professional code debugging assistance from tcee-tech. Unlock solutions to coding issues, errors, and challenges to enhance your projects."
        />
        <meta
          name="keywords"
          content="tcee-tech, Code Debugging, Developer Support, Front End Software Engineer"
        />
        <meta name="author" content="Obichukwu Truth Chinemerem" />
        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Code Debugging Services - tcee-tech"
        />
        <meta
          property="og:description"
          content="Unlock solutions to coding issues and errors with professional debugging assistance by Obichukwu Truth Chinemerem. Enhance your projects today."
        />
        {/* Add more Open Graph tags as needed */}
      </Head>{" "}
      <section>
        {" "}
        <div className="relative rounded-tl rounded-tr overflow-hidden flex items-center mt-8 ml-5 md:mt-20 md:ml-12 ">
          {" "}
          <div className="z-10 flex-shrink-0 h-10 w-10 rounded-full overflow-hidden">
            {" "}
            <Image
              src="/images/icon/code-support-icon.gif"
              alt="Code Debugging Zone: Unraveling Complexities with tcee-tech"
              className="h-full w-full"
              loading="eager"
              priority
              width={40}
              height={40}
            />
          </div>
          <p className="absolute -left-[38rem] z-0 animate-slideFromLeft font-semibold text-xl md:text-3xl">Code Doctor</p>
        </div>
        <div className="pt-8 px-5 flex flex-col items-center md:pt-20 md:px-12">
          <p className="text-center mb-8 text-primary1 leading-loose text-base md:text-lg">
            "Ah, it seems like you've encountered a stubborn bug within your
            code. But don't fret, there's no need to worry - I'm here to help!
            These sorts of challenges are right up my alley, and I'm confident
            that together we can work through it. Just consider me your trusty
            problem-solving companion. To get started, all you need to do is
            send me a message by clicking on the button below. Once you do that,
            I'll be able to dive into your code and take a closer look at what
            might be causing the issue. Remember, no problem is too big or too
            small for us to tackle together. Bugs can be a bit tricky to pin
            down sometimes, but with your insights into the context and my
            analytical capabilities, we can uncover the root cause of the
            problem. Whether it's a syntax error, a logic flaw, or something
            else entirely, I'm here to assist you in identifying it and
            suggesting a solution. So go ahead and click that button, and let's
            embark on a journey to debug and troubleshoot your code. By working
            together, we'll not only squash this bug but also enhance your
            coding skills in the process. Looking forward to our collaboration!"
          </p>
          <button
            onClick={sendMessageHandler}
            className="shadow-custom-shadow2 flex items-center bg-black px-5 py-3 text-white rounded-lg"
          >
            Reach out
            <Image
              src="/images/icon/arrow-right.svg"
              alt="Code SOS: Tap for Instant WhatsApp Assistance from tcee-tech"
              loading="eager"
              priority
              className="h-4 w-4 ml-2"
              width={16}
              height={16}
            />
          </button>
        </div> 
      </section>
      <Footer />
    </>
  );
};

export default CodeSupport;
