import React, { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-col md:flex-row items-start justify-center gap-10">
        
        <div className="text-center md:text-left">
          <h1 className="heroHeadText text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Hello, I'm <span className="text-[#16c734]">NON</span>
          </h1>
          <p className="heroSubText mt-2 text-white-100">I'm a Developer.</p>
          <p className="typewriter-line line1 text-base text-white/70 mt-2">
            I am a Computer Science student with a genuine passion for software
          </p>
          <p className="typewriter-line line2 text-base text-white/70 mt-2">
            development. I am committed to continuously learning and exploring
          </p>
          <p className="typewriter-line line3 text-base text-white/70 mt-2">
            new technologies to create effective and valuable solutions.
          </p>

          <div className="mt-5 flex items-center justify-center">
            <img
              src="/img/received_4490008484429687.jpeg"
              className={`w-120 h-70 object-cover rounded-lg transition-all duration-1000 ease-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 mt-3 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              alt="Fade In"
            />
          </div>
        </div>

        <div
          className={`flex-shrink-0 transition-all duration-1000 ease-out mt-3 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <img
            src="/img/InternShip.JPG"
            className="w-100 h-150 object-cover rounded-lg hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-1000"
            alt="Hero Right Image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
