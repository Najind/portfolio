import React from "react";

const Experence = () => {
  return (
    <section
      id="experience"
      className="relative w-full min-h-screen flex items-center justify-center px-4 py-12"
    >
      <div className="w-full max-w-screen-xl">
        <h2 className="sectionHeadText mb-8 text-center md:text-left">Experience</h2>

        {/* Layout responsive */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Skill icons */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              {[
                "html-5",
                "js",
                "css-3",
                "typescript",
                "nextjs-icon",
                "programing",
                "Taiwinds",
                "Bootstrap",
                "mysql",
                "Postgres",
                "nodejs",
              ].map((icon, idx) => (
                <div
                  key={idx}
                  className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white shadow-md flex items-center justify-center transition-transform hover:-translate-y-1 hover:scale-110"
                >
                  <img
                    src={`/icons/${icon}.png`}
                    className="w-1/2 h-1/2 object-contain"
                    alt={icon}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 text-white text-base leading-relaxed">
            <ul className="aboutItems space-y-6">
              <li className="aboutItem flex flex-col sm:flex-row items-start gap-4">
                <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center shrink-0 transition hover:-translate-y-1 hover:scale-110">
                  <img
                    src="/icons/SoftSquare.png"
                    alt="Soft Square"
                    className="w-[80%] h-[80%] object-contain"
                  />
                </div>
                <div>
                  <h2 className="heroSubText text-lg font-semibold">
                    Software Developer, Soft Square International
                  </h2>
                  <h3 className="heroSubText text-sm text-gray-300">
                    Nov, 2024 - March, 2025 (Internship)
                  </h3>
                  <p className="mt-1">
                    Assigned to develop an intelligent document management system
                    using Next.js and TypeScript.
                  </p>
                  <ul className="list-disc list-inside mt-2 text-white/90 space-y-1">
                    <li>Create pages assigned by Figma</li>
                    <li>Create a RESTful API</li>
                    <li>Fix Issue Log</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experence;
