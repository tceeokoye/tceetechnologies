import { useInView } from "react-intersection-observer";
import ProgressBar from "./ProgessBar";


const skillSet = [
  { skill: "Flutter", percentage: 80 },
  { skill: "React", percentage: 100 },
  { skill: "Next.js", percentage: 100 },
  { skill: "Tailwind CSS", percentage: 100 },
  { skill: "Arduino", percentage: 80 },
];

const SkillSet = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-50px', //triggers when the div is -50px up 
  });

  return (
    <section className="bg-black/20 px-5  lg:px-[42px] xl:px-32 h-max py-16">
      <div className="flex pb-14 flex-col justify-between items-center h-full md:pb-0 md:flex-row" ref={ref}>
        <div
          className={`mb-7 mt-14 w-full md:mb-0 md:mt-0 md:w-max transform transition-all duration-1000 ${
            inView
              ? "scale-100 translate-y-0 opacity-100"
              : "scale-95 translate-y-96 opacity-0"
          }`}
        >
          <h3 className="text-[15px] text-primary-0 font-medium md:text-[15px]">SKILL-SET</h3>
          <p className="text-[22px] font-semibold max-w-[380px] md:text-[30px]">
            Professional Experience on These Areas
          </p>
        </div>
        <div
          className={`w-full space-y-14 md:w-1/2 transform transition-all duration-1000  ${
            inView
              ? "scale-100 translate-y-0 opacity-100"
              : "scale-95 translate-y-96 opacity-0"
          }`}
        >
          {inView &&
            skillSet.map((skillData, index) => (
              <div className="space-y-14" key={index}>
                <ProgressBar
                  label={skillData.skill}
                  percentage={skillData.percentage}
                />{" "}
              </div>
            ))}
        </div>{" "}
      </div>
    </section>
  );
};

export default SkillSet;