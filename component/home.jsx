"use client";
import Link from "next/link";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <div className="container mx-auto pt-[100px]">
        <div className=" pt-[40px] md:w-[70%] mx-auto md:flex flex-col md:justify-center md:items-center md:h-[70vh]">
          <h5 className="w-[90%] mx-auto text-sm text-center md:text-2xl font-serif tracking-[5px] p-[10px] md:font-semibold text-[#3d9d91]">
            Hi, my name is{" "}
          </h5>
          <h2 className="w-[100%]  text-1.5xl text-center md:text-4xl lg:text-6xl p-[10px] text-[#ccd6f6] font-bold font-serif">
            Azuh Salvation Enyioma
          </h2>
          <h4 className="text-[#8892b0] text-center  md:text-3xl font-semibold font-sans">
            Full-stack Developer
          </h4>
          <p className=" text-base  max-w-[800px] md:max-w-[750px] p-[15px] md:text-base text-[#8892b0] mx-auto text-center">
            I build responsive websites, modern user interfaces, and full-stack
            applications. Whether it’s creating from scratch or optimizing an
            existing project, I focus on clean code, great performance, and
            seamless user experience.
          </p>
          <p className="flex justify-center mt-[20px]">
            <Link
              href="#exp_pro"
              className=" text-center border border-1 border-[#3d9d91] w-[150px]  text-[#3d9d91] font-bold hover:scale-[1.05] transition-transform font-sans  text-sm p-[10px]"
            >
              My Projects
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
export default Home;
