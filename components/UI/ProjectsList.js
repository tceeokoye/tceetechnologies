import Image from "next/image";
import Counter from "./Counter";
import { useInView } from "react-intersection-observer";

const ProjectsList = (props) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const { projectData } = props;
  return (
    <div
      ref={ref}
      className="w-full my-8 flex space-y-2 flex-col items-center justify-center text-center  md:mx-5 md:w-44"
    >
      <div className="h-24 w-24 bg-white overflow-hidden rounded-full p-1">
        <Image
          src={`/images/icon/${projectData.image}`}
          alt={projectData.alt}
          className="w-full h-full"
          loading="eager"
          priority
          width={200}
          height={200}
        />
      </div>
      {inView && <Counter percentage={projectData.number} />}
      <p className="font-light text-lg">{projectData.title}</p>
    </div>
  );
};

export default ProjectsList;
