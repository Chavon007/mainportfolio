"use client";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

const content = [
  {
    num: "01",
    title: "Interface",
    tools: ["React", "Next.js", "TypeScript", "Tailwind"],
    desc: "Building responsive web interfaces, dashboards, landing pages, and user flows with a focus on clean UI, usability, and performance.",
  },
  {
    num: "02",
    title: "Backend",
    tools: ["Node.js", "Express", "PHP", "Laravel", "REST APIs"],
    desc: "Building REST APIs, authentication flows, business logic, third-party integrations, and backend services that support real product workflows.",
  },
  {
    num: "03",
    title: "Data",
    tools: ["PostgreSQL", "MySQL", "MongoDB", "Supabase"],
    desc: "Working with relational and document databases for user data, products, orders, bookings, payments, and other application workflows.",
  },
  {
    num: "04",
    title: "Mobile",
    tools: ["React Native", "Expo"],
    desc: "Building cross-platform mobile applications for service, transport, and other real-world experiences while sharing product logic across platforms.",
  },
  {
    num: "05",
    title: "Delivery",
    tools: ["Docker", "AWS EC2", "Vercel", "Git", "CI/CD"],
    desc: "Containerizing applications, deploying production services, managing team workflows, and taking features from development to release.",
  },
];

function Stack() {
  const [openItem, setOpenItem] = useState(content[0].num);

  const toggle = (num) => {
    setOpenItem((prev) => (prev === num ? null : num));
  };

  return (
    <div id="stack" className="bg-background1 w-full py-24 md:py-32">
      <div className="container w-[95%] md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-16 md:gap-24">
        {/* intro block */}
        <div className="flex flex-col gap-5 md:sticky md:top-24 md:self-start">
          <span className="text-text2 font-ibm text-xs tracking-wide">
            04 / Working stack
          </span>

          <h3 className="font-manrope font-bold text-4xl md:text-6xl leading-[1.05] text-text max-w-[360px]">
            Tools in <span className="text-text2">context.</span>
          </h3>

          <p className="text-text1/60 font-manrope font-light text-[15px] leading-relaxed max-w-[360px]">
            Not a logo collection. A map of where each technology fits in the
            systems I build, from the interface a user touches to the
            infrastructure that ships it.
          </p>
        </div>

        {/* stack list */}
        <div className="relative">
          {/* connecting spine — the stack, made literal */}
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-text/10" />

          {content.map((c) => {
            const isOpen = openItem === c.num;

            return (
              <div key={c.title} className="relative pl-10 pb-10 last:pb-0">
                {/* node */}
                <div
                  className={`absolute left-0 top-1 w-[31px] h-[31px] rounded-full border flex items-center justify-center font-ibm text-[10px] transition-colors duration-300 ${
                    isOpen
                      ? "border-text2 text-text2 bg-text2/10"
                      : "border-text/15 text-text1/40"
                  }`}
                >
                  {c.num}
                </div>

                <button
                  onClick={() => toggle(c.num)}
                  className="w-full text-left flex items-start justify-between gap-4 group"
                >
                  <div className="flex flex-col gap-3">
                    <h4
                      className={`font-manrope font-bold text-xl md:text-2xl transition-colors duration-300 ${
                        isOpen
                          ? "text-text"
                          : "text-text1/70 group-hover:text-text"
                      }`}
                    >
                      {c.title}
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {c.tools.map((tool) => (
                        <span
                          key={tool}
                          className="font-ibm text-[11px] text-text1/60 border border-text/10 rounded-full px-2.5 py-1"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <HiChevronDown
                    className={`shrink-0 mt-2 text-text2 text-lg transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="font-manrope text-sm text-text1/70 leading-relaxed max-w-[520px]">
                      {c.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Stack;
