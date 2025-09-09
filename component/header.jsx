"use client";

import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="">
      <div className="flex justify-between  items-center py-[25px] w-[90%] mx-auto">
        {/* Logo section */}
        <div className="bg-[#263849] w-[40px] relative lg:static   flex justify-center p-[5px] rounded rounded-3xl border border-[#3d9d91] border-3">
          <h2 className="text-[#3d9d91] font-bold font-sans">SA</h2>
        </div>

        {/*navbar section*/}

        <div
          className={` flex-col items-center gap-7 absolute top-[70px] left-0 right-0
          p-[10px]
         lg:static  lg:!flex lg:flex-row lg:justify-between lg:items-center lg:w-[50%] lg:ml-[30px] lg:p-[10px] lg:gap-0 ${
           menuOpen ? "flex " : "hidden"
         }`}
        >
          <Link
            href=""
            className="text-[#bbc6e5] font-sans font-semibold hover:text-[#3d9d91] text-sm"
            onClick={() => setMenuOpen(false)}
          >
            About me
          </Link>
          <Link
            href=""
            onClick={() => setMenuOpen(false)}
            className="text-[#bbc6e5] font-sans font-semibold hover:text-[#3d9d91] text-sm"
          >
            Project/Experience
          </Link>
          <Link
            href=""
            onClick={() => setMenuOpen(false)}
            className="text-[#bbc6e5] font-sans hover:text-[#3d9d91] font-semibold text-sm"
          >
            Contact
          </Link>

          <Link
            href=""
            onClick={() => setMenuOpen(false)}
            className="border border-1 border-[#3d9d91] w-[90px]  text-[#3d9d91] font-bold hover:scale-[1.05] transition-transform font-sans text-center text-sm p-[2px]"
          >
            Resume
          </Link>
        </div>

        <div className="lg:hidden relative ">
          {menuOpen ? (
            <IoMdClose
              onClick={() => setMenuOpen(false)}
              className="text-[#3d9d91] text-3xl"
            />
          ) : (
            <IoIosMenu
              onClick={() => setMenuOpen(true)}
              className="text-[#3d9d91] text-3xl"
            />
          )}

          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Header;
