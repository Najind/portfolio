import React, { useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Project", href: "#project" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [current, setCurrent] = useState("");

  const handleClick = (item) => {
    setCurrent(item.name);
    const section = document.querySelector(item.href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Disclosure as="nav" className="bg-indigo-500 fixed w-full z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset">
              <Bars3Icon className="block h-6 w-6" />
            </DisclosureButton>
          </div>

          <div className="flex flex-1 items-center justify-between">
            {/* Logo อยู่ซ้ายสุด */}
            <div className="flex-shrink-0">
              <a href="" className="flex-shrink-0">
                <h1 className="text-white text-2xl font-bold">MySite</h1>
              </a>
            </div>
            {/* Desktop Menu อยู่ขวาสุด */}
            <div className="hidden sm:flex space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleClick(item)}
                  className={classNames(
                    current === item.name
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "rounded-md px-3 py-2 text-lg font-medium"
                  )}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navItems.map((item) => (
            <DisclosureButton
              key={item.name}
              as="button"
              onClick={() => handleClick(item)}
              className={classNames(
                current === item.name
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
