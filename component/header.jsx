"use client";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { LuDownload } from "react-icons/lu";

import { useState } from "react";

const navlink = [
  {
    title: "Work",
    link: "#work",
  },
  {
    title: "Impact",
    link: "#impact",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Stack",
    link: "#stack",
  },
  {
    title: "About",
    link: "#about",
  },
  {
    title: "Contact",
    link: "#contact",
  },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-background">
      <div className="container  flex justify-between  items-center py-6 w-[90%] mx-auto">
        {/* Logo section */}
        <div className="">
          <a className="flex items-center gap-2" href="/">
            <span className="text-text text-sm font-manrope font-bold">SA</span>{" "}
            <span className="bg-text2 rounded-full w-2 h-2 shadow-[0_0_8px_2px_rgba(86,223,148,0.6)]"></span>
          </a>
        </div>

        {/*navbar section*/}
        <div
          className={`flex-col w-[95%] absolute top-full left-1/2 -translate-x-1/2 bg-background1 ${
            menuOpen ? "flex" : "hidden"
          } md:static md:translate-x-0 md:flex md:flex-row md:w-[65%] md:items-center md:justify-between md:bg-transparent`}
        >
          <div className="flex flex-col w-full md:w-auto md:flex-row md:items-center">
            {navlink.map((link) => (
              <a
                className="text-text1/90 hover:text-text2 font-ibm text-[11px] uppercase font-medium py-5 px-4 border-b border-text1/10 md:border-b-0 md:py-0 md:px-3"
                key={link.title}
                href={link.link}
                onClick={() => setMenuOpen(false)}
              >
                {link.title}
              </a>
            ))}
          </div>

          <div className="px-4 py-4 md:p-0">
            <a
              href="https://docs.google.com/document/d/1puF6qj6JfFW5-YyK1m_jDcu_RmydaHwo/edit?usp=drive_link&ouid=105650029138463119659&rtpof=true&sd=true"
              onClick={() => setMenuOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-b border-text hover:border-text2 pb-1 w-fit"
            >
              <span className="text-text font-manrope text-[10px] uppercase font-bold">
                Resume
              </span>
              <span className="text-text text-xs">
                <LuDownload />
              </span>
            </a>
          </div>
        </div>

        <div className="md:hidden relative z-50 border p-2 border-text1/50">
          {menuOpen ? (
            <IoMdClose
              onClick={() => setMenuOpen(false)}
              className="text-text cursor-pointer hover:text-text2 text-xl"
            />
          ) : (
            <IoIosMenu
              onClick={() => setMenuOpen(true)}
              className="text-text cursor-pointer hover:text-text2 text-xl"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
