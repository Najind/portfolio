import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center px-6 py-16"
    >
      <div className="about-head bg-black p-8 rounded-3xl w-full max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="w-full lg:w-1/2 text-center">
            <div className="sectionSubText">Introduction</div>
            <h2 className="sectionHeadText">About Me</h2>
            <img
              src="src/icons/software-engineer.png"
              className="mx-auto w-80 h-80 object-cover mt-3 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 rounded-full mt-5"
              alt="Hero Image"
            />
          </div>
          <ul className="aboutItems">
            <li className="aboutItem flex flex-col items-start gap-4">
              <div className="w-32 h-32 rounded-full bg-white shadow-md flex items-center justify-center transition ease-in-out hover:-translate-y-1 hover:scale-110">
                <img
                  src="src/icons/frontend.png"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
              <div>
                <h3 className="heroSubText text-xl font-semibold mb-2">Frontend Developer</h3>
                <p className="text-base text-gray-300 max-w-md">
                  Designed and developed a responsive web platform using
                  React.js and Next.js, enhancing user interactivity and
                  performance.
                </p>
              </div>
            </li>
            <li className="aboutItem flex flex-col items-start gap-4">
              <div className="w-32 h-32 rounded-full bg-white shadow-md flex items-center justify-center transition ease-in-out hover:-translate-y-1 hover:scale-110">
                <img
                  src="src/icons/backend.png"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>

              {/* หัวข้อ + คำอธิบาย */}
              <div>
                <h3 className="heroSubText text-xl font-semibold mb-2">
                  Backend Developer
                </h3>
                <p className="text-base text-gray-300 max-w-md">
                  Developed RESTful APIs using Express.js and Node.js,
                  integrating with MySQL and PostgreSQL databases to serve
                  dynamic data.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
