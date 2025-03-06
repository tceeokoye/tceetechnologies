import { useEffect, useState } from "react";

const ProgressBar = (props) => {
    const {label, percentage} = props;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => { 
      if (progress < percentage) {
        setProgress(progress + 1);
      } else {
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [progress]);
  return (
    <div>
      <p className="text-[14px] mb-1 text-primary1 md:text-lg font-medium">{label}</p>
      <div className="flex justify-between w-full h-[10px] items-center md:h-[14px]">
        {" "}
        <div className="relative w-full h-full w-[92%] mr-2 bg-primary rounded-lg overflow-hidden">
          <div
            className="absolute h-full bg-primary1 rounded-lg"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className=" text-primary1 text-[14px] font-medium md:text-base">{progress}%</div>
      </div>{" "}
    </div>
  );
};

export default ProgressBar;