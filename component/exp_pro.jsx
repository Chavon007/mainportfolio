"use client";
import { useState } from "react";
import Experience from "./experience.jsx";
import Project from "./project.jsx";
import { motion } from "framer-motion";

function Main() {
  const [activeBar, setActiveBar] = useState("experience");
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: false }}
      className="container mx-auto pt-[80px]"
      id="exp_pro"
    >
      <div>
        <div className="">
          <h2 className="text-center pt-[30px] text-[#ccd6f6] text-3xl font-bold font-sans">
            Project & Experience
          </h2>
        </div>

        <div className="w-[60%] mt-[30px] mx-auto flex justify-between items-center">
          <button
            className="w-[50%] pb-[5px] text-2xl font-serif font-semibold"
            onClick={() => setActiveBar("experience")}
            style={{
              color: activeBar === "experience" ? "#7594ebff" : "#3d9d91",
              borderBottom:
                activeBar === "experience" ? "2px solid #7594ebff" : "none",
            }}
          >
            Experience
          </button>
          <button
            className="w-[50%] ml-[30px] md:ml-0 pb-[5px] text-[#3d9d91] text-2xl font-serif font-semibold"
            onClick={() => setActiveBar("project")}
            style={{
              color: activeBar === "project" ? "#7594ebff" : "#3d9d91",
              borderBottom:
                activeBar === "project" ? "2px solid #7594ebff" : "none",
            }}
          >
            Projects
          </button>
        </div>

        <div>
          {activeBar === "experience" && <Experience />}
          {activeBar === "project" && <Project />}
        </div>
      </div>
    </motion.div>
  );
}

export default Main;
