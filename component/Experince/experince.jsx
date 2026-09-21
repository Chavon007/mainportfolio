"use client";

import Frootify from "./frootify";
import GoMyCode from "./gomycode";
import Cyclobold from "./cyclobold";
import { useState } from "react";

const experience = [
  {
    id: "frootify",
    title: "Software Engineer",
    company: "Frootify Tech",
    year: "APR 2026 - PRESENT",
    component: Frootify,
  },
  {
    id: "cyclobold",
    title: "Software Engineer Evangelist",
    company: "Cyclobold Tech",
    year: "AUG 2025 - FEB 2026",
    component: Cyclobold,
  },
  {
    id: "gomycode",
    title: "Full-Stack Developer Intern",
    company: "GOMYCODE",
    year: "AUG 2024 - JUL 2025",
    component: GoMyCode,
  },
];

function Experience() {
  const [activeExperience, setActiveExperience] = useState("frootify");

  const active = experience.find((item) => item.id === activeExperience);
  const ActiveComponent = active.component;

  return (
    <section className="bg-background min-h-screen w-full py-20">
      <div className="w-[90%] md:w-[90%] mx-auto">
        <small className="w-full md:w-[25%] text-text2 font-ibm font-medium text-[10px] uppercase tracking-widest">
          03 / Experience log
        </small>

        <div className="mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-[380px_1fr] border-t border-text/10">
          {/* Experience tabs */}
          <div className="border-b md:border-b-0 md:border-r border-text/10 md:sticky md:top-24 md:self-start">
            {experience.map((item) => {
              const isActive = activeExperience === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveExperience(item.id)}
                  className={`w-full text-left focus:outline-none px-6 py-8 md:px-10 md:py-10 border-b border-text/10 border-l-2 transition-colors duration-300 flex flex-col gap-2 ${
                    isActive
                      ? "border-l-text2 bg-text2/5"
                      : "border-l-transparent hover:bg-text/[0.02]"
                  }`}
                >
                  <span
                    className={`font-ibm text-[10px] uppercase tracking-widest ${
                      isActive ? "text-text2" : "text-text1/40"
                    }`}
                  >
                    {item.year}
                  </span>
                  <span
                    className={`font-manrope font-bold text-lg ${
                      isActive ? "text-text" : "text-text1/40"
                    }`}
                  >
                    {item.company}
                  </span>
                  <span
                    className={`font-manrope text-sm ${
                      isActive ? "text-text1" : "text-text1/30"
                    }`}
                  >
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active experience */}
          <div className="px-0 md:px-16 py-10 md:py-16">
            <ActiveComponent />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
