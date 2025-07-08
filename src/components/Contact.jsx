import React from 'react';

const Contact = () => {
  return (
    <div className="w-full bg-indigo-500">
      <footer className="text-white flex flex-col md:flex-row justify-evenly items-center md:items-start max-w-screen-xl mx-auto px-4 sm:px-10 lg:px-[10%] py-10 gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-4xl sm:text-6xl lg:text-[80px] font-bold tracking-wide">Thank You</h2>
          <p className="text-xl sm:text-2xl lg:text-[30px] font-bold tracking-wide mt-2">
            for the <span className="text-[#16c734]">opportunity</span> given 🙏
          </p>
        </div>

        <ul className="flex flex-col items-center md:items-start list-none gap-6 text-center md:text-left">
          <li className="flex items-center gap-4">
            <img
              src="/icons/gmail.png"
              alt="Email icon"
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
            <a
              href="mailto:jindasak@gmail.com"
              className="text-white no-underline text-base sm:text-lg lg:text-[25px] font-normal tracking-wide"
            >
              jindasak@gmail.com
            </a>
          </li>

          <li className="flex items-center gap-4">
            <img
              src="/icons/phone-call.png"
              alt="Phone icon"
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
            <span className="text-white text-base sm:text-lg lg:text-[25px] font-normal tracking-wide">
              094-593-5491
            </span>
          </li>

          <li className="flex items-center gap-4">
            <img
              src="/icons/communication.png"
              alt="Profile icon"
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
            <span className="text-white text-base sm:text-lg lg:text-[25px] font-normal tracking-wide">
              Non Jinda
            </span>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Contact;
