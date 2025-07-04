import React from "react";

const Project = () => {
  return (
    <section id="project" className="relative w-full min-h-screen flex items-center justify-center">
      <div className="about-head px-8 py-6">
        <div className="sectionHeadText mb-8">Project</div>

        {/* การ์ด */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 ">
          {/* การ์ดที่ 1 */}
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white transition ease-in-out hover:-translate-y-1 hover:scale-110">
            <div className="w-full h-[200px]">
              <img
                className="w-full h-full object-cover"
                src="/img/Car.png"
                alt="Sunset in the mountains"
              />
            </div>
            <div className="px-6 py-4">
              <div className="text-gray-700 text-base font-bold text-xl mb-2">
                Develop and compare license plate detection algorithms
              </div>
              <p className="text-gray-700 text-base">
                This is a duo project my friend and I did to compare our custom
                algorithms with selected algorithms, evaluating performance
                under different conditions (e.g. distance, light, camera angle)
                to identify strengths and appropriate use cases for each
                algorithm.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Computer Vision
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Python
              </span>
            </div>
          </div>

          {/* การ์ดที่ 2 */}
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white transition ease-in-out hover:-translate-y-1 hover:scale-110">
            <div className="w-full h-[230px]">
              <img
                className="w-full h-full object-cover"
                src="/img/game1.jpg"
                alt="Sunset in the mountains"
              />
            </div>
            <div className="px-6 py-4">
              <div className="text-gray-700 text-base font-bold text-xl mb-2">
                Create a 3D game
              </div>
              <p className="text-gray-700 text-base">
                It is a project to create a 3D game. This project is the final
                project of the game programming course. In this format, the
                created game involves clearing levels. The format for clearing
                levels is different. This game is inspired by the retro 2D game
                Circus Charlie.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Unity
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #C#
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white transition ease-in-out hover:-translate-y-1 hover:scale-110">
            <div className="w-full h-[250px]">
              <img
                className="w-full h-full object-cover"
                src="/img/unpung.png"
                alt="Sunset in the mountains"
              />
            </div>
            <div className="px-6 py-4">
              <div className="text-gray-700 text-base font-bold text-xl mb-2">
                Create character animations
              </div>
              <p className="text-gray-700 text-base">
                It is a project to create character models that can move. This
                project is the final project of the course. I chose to create a
                character model that was based on the Anpanman cartoon and was
                able to move in 3D.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Blender
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
