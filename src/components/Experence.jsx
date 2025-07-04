import React from "react";

const Experence = () => {
  return (
    <section id="experience" className="relative w-full min-h-screen flex items-center justify-center">
  <div className="about-head px-8 py-6">
    <div className="sectionHeadText mb-8">Experience</div>

    <div className="flex gap-10">
      <div className="w-1/2">
        <div className="flex gap-6 flex-wrap">
          <div className="w-40 h-40 rounded-full bg-white shadow-md flex items-center justify-center transition ease-in-out hover:-translate-y-1 hover:scale-110">
            <img src="/icons/html-5.png" className="w-[50%] h-[50%] object-cover" />
          </div>
          <div className="w-40 h-40 rounded-full bg-white shadow-md flex items-center justify-center transition ease-in-out hover:-translate-y-1 hover:scale-110">
            <img src="/icons/js.png" className="w-[50%] h-[50%] object-contain" />
          </div>
          <div className="w-40 h-40 rounded-full bg-white shadow-md flex items-center justify-center transition ease-in-out hover:-translate-y-1 hover:scale-110">
            <img src="/icons/css-3.png" className="w-[50%] h-[50%] object-contain" />
          </div>
          <div className="w-40 h-40 rounded-full bg-white shadow-md flex items-center justify-center transition ease-in-out hover:-translate-y-1 hover:scale-110">
            <img src="/icons/typescript.png" className="w-[50%] h-[50%] object-contain" />
          </div>

          <div className="w-40 h-40 rounded-full bg-white shadow-md flex items-center justify-center transition ease-in-out hover:-translate-y-1 hover:scale-110">
            <img src="/icons/nextjs-icon.png" className="w-[50%] h-[50%] object-cover" />
          </div>
          <div className="w-40 h-40 rounded-full bg-white shadow-md flex items-center justify-center transition ease-in-out hover:-translate-y-1 hover:scale-110">
            <img src="/icons/programing.png" className="w-[50%] h-[50%] object-contain" />
          </div>
          <div className="w-40 h-40 rounded-full bg-white shadow-md flex items-center justify-center transition ease-in-out hover:-translate-y-1 hover:scale-110">
            <img src="/icons/Taiwinds.png" className="w-[50%] h-[50%] object-contain" />
          </div>
          <div className="w-40 h-40 rounded-full bg-white shadow-md flex items-center justify-center transition ease-in-out hover:-translate-y-1 hover:scale-110">
            <img src="/icons/Bootstrap.png" className="w-[70%] h-[70%] object-contain" />
          </div>

          <div className="w-40 h-40 rounded-full bg-white shadow-md flex items-center justify-center transition ease-in-out hover:-translate-y-1 hover:scale-110">
            <img src="/icons/mysql.png" className="w-[70%] h-[70%] object-cover" />
          </div>
          <div className="w-40 h-40 rounded-full bg-white shadow-md flex items-center justify-center transition ease-in-out hover:-translate-y-1 hover:scale-110">
            <img src="/icons/Postgres.png" className="w-[60%] h-[60%] object-contain" />
          </div>
          <div className="w-40 h-40 rounded-full bg-white shadow-md flex items-center justify-center transition ease-in-out hover:-translate-y-1 hover:scale-110">
            <img src="/icons/nodejs.png" className="w-[70%] h-[70%] object-contain" />
          </div>
        </div>
      </div>

<div className="w-1/2 text-white text-base leading-relaxed">
  <ul className="aboutItems space-y-6">
    <li className="aboutItem flex items-start gap-4">
      <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center shrink-0 transition ease-in-out hover:-translate-y-1 hover:scale-110">
        <img
          src="/icons/SoftSquare.png"
          alt="Soft Square"
          className="w-[80%] h-[80%] object-contain"
        />
      </div>

      <div>
        <h2 className="heroSubText text-lg font-semibold">Software Developer, Soft Square International</h2>
        <h3 className="heroSubText text-sm text-gray-300">Nov, 2024 - March, 2025 (Internship)</h3>
        <p className="mt-1">
          Assigned to develop an intelligent document management system for storing and analyzing documents. The website uses Next.js (React Framework) with TypeScript (TSX) language to manage the structure and display according to the assigned topics.
        </p>
        <p className="mt-5">
          -Create pages assigned by figma
        </p>
        <p>
          -Create a RESTful API
        </p>
        <p>
          -Fix Issue Log
        </p>
      </div>
    </li>
    {/* <li className="aboutItem flex items-start gap-4">
      <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center shrink-0 transition ease-in-out hover:-translate-y-1 hover:scale-110">
        <img
          src="/icons/computer.png"
          alt="Soft Square"
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
      <div>
        <h2 className="heroSubText text-lg font-semibold">Develop and compare license plate detection algorithms </h2>
        <h3 className="heroSubText text-sm text-gray-300">Project 2024</h3>
        <p className="mt-1 text-white/90">
          This is a duo project my friend and I did to compare our custom algorithms with selected algorithms, evaluating performance under different conditions (e.g. distance, light, camera angle) to identify strengths and appropriate use cases for each algorithm.
        </p>
      </div>
    </li>
    <li className="aboutItem flex items-start gap-4">
      <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center shrink-0 transition ease-in-out hover:-translate-y-1 hover:scale-110">
        <img
          src="/icons/game-development.png"
          alt="Soft Square"
          className="w-[60%] h-[60%] object-contain"
        />
      </div>

      <div>
        <h2 className="heroSubText text-lg font-semibold">Create a 3D game</h2>
        <h3 className="heroSubText text-sm text-gray-300">Project 2023</h3>
        <p className="mt-1 text-white/90">
          It is a project to create a 3D game. This project is the final project of the game programming course. In this format, the created game involves clearing levels. The format for clearing levels is different. This game is inspired by the retro 2D game Circus Charlie.
        </p>
      </div>
    </li> */}
  </ul>
</div>

    </div>
  </div>
</section>
  );
};

export default Experence;
