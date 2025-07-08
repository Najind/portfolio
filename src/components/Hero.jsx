import React, { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 md:px-10 ">
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-10">

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="heroHeadText text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Hello, I'm <span className="text-[#16c734]">NON</span>
          </h1>
          <p className="heroSubText mt-2 text-white-100 text-lg sm:text-xl">I'm a Developer.</p>

          <p className="typewriter-line line1 text-sm sm:text-base text-white/70 mt-2">
            I am a Computer Science student with a genuine passion for software
          </p>
          <p className="typewriter-line line2 text-sm sm:text-base text-white/70 mt-2">
            development. I am committed to continuously learning and exploring
          </p>
          <p className="typewriter-line line3 text-sm sm:text-base text-white/70 mt-2">
            new technologies to create effective and valuable solutions.
          </p>

          {/* Left Image (ใน mobile อยู่ใต้ text, desktop อยู่ซ้าย) */}
          {/* <div className="mt-5 flex justify-center md:justify-start">
            <img
              src="/img/received_4490008484429687.jpeg"
              className={`w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg object-cover transition-all duration-1000 ease-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              alt="Fade In"
            />
          </div> */}
        </div>
        <div
          className={`w-full md:w-1/2 flex justify-center transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <img
            src="/img/InternShip.JPG"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto rounded-lg object-cover hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-1000"
            alt="Hero Right Image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
