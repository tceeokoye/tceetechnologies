import Head from "next/head";
import { useRouter } from "next/router";

import SectionOne from "@/components/home/SectionOne";
//import OpenSourceCode from "@/components/home/OpenSourceCode";
import SectionTwo from "@/components/home/SectionTwo";
import MyServices from "@/components/home/MyServices";
import SuccessfulProjects from "@/components/home/SuccessfulProjects";
import Portal from "@/components/UI/Portal";
import Footer from "@/components/layouts/Footer";
import SkillSet from "@/components/home/SkillSet";

const commonStyle = "absolute w-[200px] h-[200px] flex items-center justify-center text-[20px]"


export default function Home() {
const router = useRouter();
  return (
    <>
      <Head>
        <title>tcee-tech | Front End Software Engineer Portfolio</title>
        <meta
          property="title"
          content="tcee-tech | Front End Software Engineer Portfolio"
        />{" "}
        <meta
          name="description"
          content="Welcome to tcee-tech's portfolio! Want a website? Want an App? I'm available for you, Explore a collection of projects showcasing Front End Software Engineering expertise."
        />
        <meta
          name="keywords"
          content="tcee-tech, Portfolio, Front End Software Engineer, Web Development, Mobile Application Development, Back End Development"
        />
        <meta name="author" content="Obichukwu Truth Chinemerem" />
        <meta
          property="og:title"
          content="tcee-tech | Front End Software Engineer Portfolio"
        />
        <meta
          property="og:description"
          content="Want a website? Want an App? I'm available for you, Discover a portfolio of Front End Software Engineering projects by Obichukwu Truth Chinemerem. Explore web and application development expertise."
        />
      </Head> 
      <Portal>
      <div className="flex flex-col items-center justify-center rounded-tl-[8px] rounded-bl-[8px] overflow-hidden stainless-steel-2 fixed z-40 right-0 h-32 w-7 top-1/3 transform -translate-y-1/2 bg-black text-white md:top-1/2 md:h-40 md:w-10">
        <button
        onClick={() => router.push("/projects")}
         className="-rotate-90 h-7 w-32 text-black text-sm text-center md:text-base md:h-max md:w-max">
          View_Projects
        </button>
      </div>
      </Portal>
      <SectionOne />
   
  
     <div className="flex justify-center  mt-20"> <div className="cube h-[15rem] w-[200px] relative">
      <div className={`${commonStyle} front`}>4 years experience</div>
      <div className={`${commonStyle} back`}>4 years experience</div>
      <div className={`${commonStyle} left`}>4 years experience</div>
      <div className={`${commonStyle} right`}>4 years experience</div>
      <div className={`${commonStyle} top`}>4 years experience</div>
      <div className={`${commonStyle} bottom`}>4 years experience</div>
    </div>
    </div>



      <MyServices />
      <SkillSet />
      <SuccessfulProjects />
      {/* <OpenSourceCode /> */}
      <SectionTwo />
     <Footer />
    </>
  );
}
