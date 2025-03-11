import { useRouter } from "next/router";

import Socials from "../UI/Socials";
import AnalogClock from "../home/AnalogClock";

const codingQuotes = [
  {
    link: "/",
    quotes: "1's and 0's do not lie",
    cite: "https://tceetechnologies-w3fh.vercel.app",
  },
  {
    link: "/tcee-technologies",
    quotes: "Programming is not about typing, it's about thinking",
    cite: "https://dev.to/cleancodestudio/10-insightful-programming-wisdom-quotes-18ba",
  },
  {
    link: "/projects",
    quotes:
      "The first step of any project is to grossly underestimate its complexity and difficulty",
    cite: "https://dev.to/cleancodestudio/10-insightful-programming-wisdom-quotes-18ba",
  }, 
  {
    link: "/code-support",
    quotes:
      "Debugging is like being the detective in a crime movie where you are also the murderer. lol",
    cite: "https://dev.to/cleancodestudio/10-insightful-programming-wisdom-quotes-18ba",
  },
  {
    link: "/about",
    quotes:
      "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
    cite: "https://techvify-software.com/35-best-coding-programming-quotes/#:~:text=Coding%20Quotes%201%20Coding%20like%20poetry%20should%20be,course%2C%20bad%20code%20can%20be%20cleaned%20up.%20",
  },
  {
    link: "/shop",
    quotes:
      "Crafting digital masterpieces line by line, Tcee-tech transforms code into innovation, bytes into brilliance, and algorithms into art. Embrace the elegance of technology with me.",
    cite: "https://tceetechnologies-w3fh.vercel.app/shop",
  },
];
var currentDate = new Date();

var currentYear = currentDate.getFullYear();
const footerText = `©${currentYear} Obichukwu Truth Chinemerem. All Rights Reserved`

const Footer = (props) => {
  const router = useRouter();
  const activeLink = router.pathname;
  return (
    <footer className="relative z-40 ">
      <div className="px-5 md:px-12">
        <Socials />

        {codingQuotes.map((codingQuotesData, index) => (
          <p key={index} className="leading-loose pb-5 italic text-2xl font-extralight text-center md:text-3xl">
            {codingQuotesData.link === activeLink && (
              <q cite={codingQuotesData.cite} >
                {codingQuotesData.quotes}
              </q>
            )}
          </p>
        ))}
      </div>
     <div className="flex justify-center px-5"><AnalogClock /></div> 
      <div className=" py-10 bg-black space-y-2 px-5 text-center">
        <p>{footerText}</p>
        <a href="mailto:truthokoye@gmail.com" className="underline">
        truthokoye@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
