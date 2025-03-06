import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [nextSlide, setNextSlide] = useState(0);
  const comments = ["", "", "", "", ""];

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [nextSlide]);

  const goToNextSlide = () => {
    setNextSlide((prevIndex) => (prevIndex + 1) % comments.length);
  };

  const goToPrevSlide = () => {
    setNextSlide(
      (prevIndex) => (prevIndex - 1 + comments.length) % comments.length
    );
  };

  return (
    <div className="relative px-5 mb-48 mx-auto">
      <div className="overflow-hidden mb-8 rounded-2xl">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${nextSlide * (100 / comments.length)}%)`,
            width: `${comments.length * 390}px`,
          }}
        >
          {comments.map((comment, index) => (
            <div
              key={index}
              className="flex border  items-start w-full h-40 md:h-96"
            >
              <div className="w-[350px] flex-shrink-0 bg-white mx-5 px-1 bg-blue-2 pr-20 h-full overflow-y-auto pt-2 rounded-tr-2xl rounded-br-2xl md:pt-10 md:px-9">
                <p className="text-gray-2 mb-2 text-sm md:mb-14 md:text-lg">
                  {comment}
                </p>
                <div className="font-semibold text-xl text-blue-0">
                  Obichukwu Truth
                </div>
              </div>
            </div>
          ))}
        </div>{" "}
      </div>

      <div className="flex justify-center space-x-2">
        {comments.map((comments, index) => {
          const color = index === nextSlide ? "bg-blue-0" : "bg-gray-3";
          return (
            <div key={index} className={`h-5 w-5 rounded-full ${color}`}></div>
          );
        })}
      </div>

      <button
        className="absolute top-1/3 -translate-y-1/2 -translate-y-1/2 right-3 bg-blue-0 py-1 px-2 md:py-3 md:px-4"
        onClick={goToPrevSlide}
      >
        Prev
      </button>

      <button
        className="absolute top-1/2 mt-2 -translate-y-1/2 right-3 bg-blue-0  py-1 px-2 md:py-3 md:px-4"
        onClick={goToNextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
