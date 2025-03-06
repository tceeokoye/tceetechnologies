

import ProjectsList from "../UI/ProjectsList";

const projects = [
  {
    title: "Happy Clients",
    alt: "Amobi Victor Happy Clients Icon",
    number: 400,
    image: "happy-clients-icon.png",
  },
  {
    title: "Software Projects",
    alt: "Amobi Victor Software Projects Icon",
    number: 74,
    image: "software-projects-icon.jpg",
  },
  {
    title: "Hardware Projects",
    alt: "Amobi Victor Hardware Projects Icon",
    number: 42,
    image: "hardware-projects-icon.png",
  },
  {
    title: "Developers Bugs Fixed",
    number: "212",
    alt: "Amobi Victor Hardware Bugs Solved Icon",
    image: "bugs-solved-icon.jpg",
  },
];

const SuccessfulProjects = () => {
 
  return (
    <section className="z-0">
      <div className="bg-black-50 py-16 flex">
      <div className=" flex flex-col justify-center max-w-[120rem] mx-auto lg:justify-evenly lg:flex-row">
        {projects.map((projectData, index) => (
          <span key={index}>
            <ProjectsList projectData={projectData} />
          </span>
        ))}{" "}
      </div>
      
      </div>
      <div className="relative px-3 max-w-4xl mx-auto bg-black-50 overflow-hidden flex justify-between items-center h-[20rem] md:px-12">
        <div className="absolute -top-32 -left-12 bg-primary rounded-[80px] -rotate-12 h-[30rem] w-1/2 md:-left-24"></div>
<p className="absolute bottom-2 right-2 text-sm opacity-30">tcee-tech</p>
        <p className="leading-normal w-1/2 z-20 flex flex-col justify-center  font-bold text-xl md:text-4xl">
          My Gurantee
        </p>

        <div className="w-1/2 z-20 flex flex-col text-2xl md:text-5xl justify-center font-bold">
          <p className="text-7xl -mb-10">''</p>
          <p className="leading-normal ">
            I'll give you, <br />
            The best of myself
          </p>
        </div>
      </div>
    </section>
  );
};

export default SuccessfulProjects;
