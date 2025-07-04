import React from 'react';

const Contact = () => {
  return (
    <footer
      className="text-white bg-indigo-500 flex flex-col md:flex-row justify-evenly w-screen px-[10%] py-[58px] gap-[10px]"
    >
      <div className="flex flex-col items-center md:items-start">
        <h2 className="text-[80px] font-bold tracking-[4px]">Thank You</h2>
        <p className="text-[30px] font-bold tracking-[4px]">for the <span className="text-[#16c734]">opportunity </span>given🙏</p>
      </div>

      <ul className="flex flex-col items-center md:items-start list-none gap-[26px]">
        <li className="flex items-center gap-[25px]">
          <img
            src="/icons/gmail.png"
            alt="Email icon"
            className="w-8 h-8"
          />
          <a
            href="mailto:jindasak@gmail.com"
            className="text-white no-underline text-[25px] font-normal tracking-[1.5px]"
          >
            jindasak@gmail.com
          </a>
        </li>

        <li className="flex items-center gap-[25px]">
          <img
            src="/icons/phone-call.png"
            alt="Phone icon"
            className="w-8 h-8"
          />
          <span className="text-white text-[25px] font-normal tracking-[1.5px]">
            094-593-5491
          </span>
        </li>

        <li className="flex items-center gap-[25px]">
          <img
            src="/icons/communication.png"
            alt="Profile icon"
            className="w-8 h-8"
          />
          <span className="text-white text-[25px] font-normal tracking-[1.5px]">
            Non Jinda
          </span>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
