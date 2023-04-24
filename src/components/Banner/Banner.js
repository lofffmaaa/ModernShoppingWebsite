import React, { useState } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2029235/pexels-photo-2029235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2668314/pexels-photo-2668314.jpeg",
    "https://images.pexels.com/photos/2337491/pexels-photo-2337491.jpeg",
    "https://images.pexels.com/photos/4123714/pexels-photo-4123714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };

  return (
    <div
      className={"w-screen h-[650px] relative overflow-x-hidden select-none"}
    >
      <div
        style={{
          transform: `translateX(-${currentSlide * 100}vw)`,
        }}
        className={"w-[400vw] h-full flex transition-transform duration-1000"}
      >
        <img
          src={data[0]}
          alt="ImgOne"
          className={"w-screen h-full object-cover"}
          loading="priority"
        />
        <img
          src={data[1]}
          alt="ImgOne"
          className={"w-screen h-full object-cover"}
          loading="priority"
        />
        <img
          src={data[2]}
          alt="ImgOne"
          className={"w-screen h-full object-cover"}
          loading="priority"
        />
        <img
          src={data[3]}
          alt="ImgOne"
          className={"w-screen h-full object-cover"}
          loading="priority"
        />
      </div>
      <div
        className={"absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44"}
      >
        <div
          className={
            "w-14 h-12 border-[1px] border-white flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300 "
          }
          onClick={prevSlide}
        >
          <HiArrowLeft className={"text-white"} />
        </div>
        <div
          className={
            "w-14 h-12 border-[1px] border-white-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          }
          onClick={nextSlide}
        >
          <HiArrowRight className={"text-white"} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
