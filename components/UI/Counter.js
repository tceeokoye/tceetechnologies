import { useEffect, useState } from "react";

const Counter = (props) => {
    const { percentage} = props;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => { 
      if (progress < percentage) {
        setProgress(progress + 1);
      } else {
        clearInterval(interval);
      }
    }, 7);

    return () => clearInterval(interval);
  }, [progress]);
  return <p className="font-bold text-3xl">{progress}+</p>;
};

export default Counter;
