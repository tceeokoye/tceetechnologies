import { useEffect, useState } from "react";

const companyName = "<Tcee Technologies/>";

const Onboarding = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isThirdText, setIsThirdText] = useState(false);

  useEffect(() => {
    setIsPageLoaded(true);
    document.body.classList.add("overflow-hidden");
    const interval2 = setInterval(() => {
      setIsThirdText(true);
    }, 3000);
    const interval = setInterval(() => {
      setIsVisible(false);
      document.body.classList.remove("overflow-hidden");
    }, 6200);
    return () => {
      clearInterval(interval);
      clearInterval(interval2);
    };
  }, []);

  return (
    <div
      className={`fixed inset-y-0 z-50 bg-primary h-screen w-screen flex flex-col items-center justify-center transform  ${
        isVisible ? "translate-x-0" : "-translate-x-full opacity-90"
      } transition-transform duration-1000 ease-in-out`}
    >
      {isPageLoaded && (
        <div className="h-56 flex flex-col items-center justify-center">
          {" "}
          <div className="flex flex-col overflow-x-hidden w-max z-50 items-end justify-center h-max animate-zoom-out">
            <h1 className="animate-rainbow-gradient-text leading-none text-xl font-bold md:text-6xl">
              {companyName}
            </h1>
            <div className="flex w-max flex-end border pr-10 -mr-96 border-white">
              {" "}
              <p className="animate-slide-left italic text-[8.5px] pr-3 md md:text-lg">
              God inspires,  the code flows from my hands.
              </p>
            </div>
          </div>
         <div className="h-10"> {isThirdText && (
            <p className="animate-shimmering-silver-text text-sm mt-1 animate-fade-in-up-text md:mt-5 md:text-2xl">
              Front End Software Engineer
            </p>
          )} </div>
        </div>
      )}
    </div>
  );
};

export default Onboarding;
