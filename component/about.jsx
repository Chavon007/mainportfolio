"use client";

import Image from "next/image";
import { motion } from "framer-motion";
function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: false }}
      className=" container mx-auto pt-[100px] "
      id="about"
    >
      <div>
        <h2 className="text-center pt-[10px] text-[#ccd6f6] text-3xl font-bold font-sans">
          About Me
        </h2>

        {/*about me */}
        <div className="w-[90%] mx-auto pt-[20px] md:flex md:justify-between md:items-center">
          {/*about info*/}
          <div className=" w-[100%] mx-auto md:w-[50%]">
            <h3 className="w-[100%] md:mx-auto text-sm text-center md:text-1xl font-serif p-[10px] font-semibold text-[#3d9d91]">
              Full-Stack Web Developer
            </h3>
            <p className="text-base pb-2 text-[#8892b0] font-serif">
              I am Salvation, a Full-Stack Web Developer who doesn’t just write
              code. I architect, build, and ship high-performance web solutions
              that speak for themselves.
            </p>
            <p className="text-base pb-2 text-[#8892b0] font-serif">
              With hands-on experience in HTML, CSS, JavaScript, TypeScript,
              React, Next.js, Node.js, Express, and MongoDB, I build full-stack
              applications that are clean, scalable, and fast. I specialize in
              turning complex ideas into responsive, functional, and user-driven
              digital experiences.
            </p>
            <p className="text-base pb-2 text-[#8892b0] font-serif">
              Every project I touch is built with precision, bold energy, and
              zero shortcuts. I work across the stack with confidence, from API
              architecture to pixel-perfect frontends.
            </p>
          </div>
          {/* about image */}
          <div className="w-[80%] mx-auto pt-[10px] md:w-[40%] ">
            <Image
              className="rounded rounded-4xl "
              src="/2.jpg"
              alt=""
              width={100}
              height={100}
              style={{ width: "350px", height: "300px" }}
            />
          </div>
        </div>

        {/*about me skills */}
        <div></div>

        {/*What i do */}

        <div></div>
      </div>
    </motion.div>
  );
}
export default About;
