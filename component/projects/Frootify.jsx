
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";
import frootify from "../../public/frootify.webp";

const features = [
  {
    title: "Problem",
    description:
      "Vendor onboarding and dashboard operations needed less friction and faster data access.",
  },
  {
    title: "Built",
    description: (
      <>
        Multi-step registration, <span className="text-text2">15+</span> secure
        APIs, optimized queries, newsletter automation with Mautic, and
        production features.
      </>
    ),
  },
  {
    title: "Result",
    description: (
      <>
        <span className="text-text2">35%</span> onboarding efficiency ·{" "}
        <span className="text-text2">25%</span> dashboard performance ·{" "}
        <span className="text-text2">95+</span> Lighthouse.
      </>
    ),
  },
];

const tools = [
  { text: "React" },
  { text: "Next.js" },
  { text: "Laravel" },
  { text: "PostgreSQL" },
  { text: "Docker" },
  { text: "Mautic" },
];

const live = [
  {
    text: "frootify.tech",
    link: "https://frootify.tech/",
    icon: <MdArrowOutward />,
  },
  {
    text: "dashboard.frootify.tech",
    link: "https://dashboard.frootify.tech/",
    icon: <MdArrowOutward />,
  },
];

function Frootify() {
  return (
    <div className="w-full border-b border-text1/20 py-20 md:py-28">
      <div className="border border-text1/20 bg-background1/40 overflow-hidden">
        {/* PROJECT HEADER */}
        <div className="flex items-center justify-between border-b border-text1/20 px-5 md:px-8 py-4">
          <p className="font-ibm text-[10px] tracking-[0.18em] text-text1">
            PROJECT / 01
          </p>

          <p className="font-ibm text-[10px] tracking-[0.18em] text-text1">
            PRODUCTION ECOSYSTEM
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
          {/* IMAGE */}
          <div className="relative flex items-center justify-center min-h-[420px] md:min-h-[600px] bg-[#07100b] border-b lg:border-b-0 lg:border-r border-text1/20 overflow-hidden">
            {/* GRID */}
            <div className="absolute inset-0 grid-bg opacity-40" />

            {/* GLOW */}
            <div className="absolute w-80 h-80 rounded-full bg-text2/10 blur-[120px]" />

            <Image
              src={frootify}
              alt="Frootify production ecosystem"
              width={1000}
              height={1000}
              className="relative z-10 w-[92%] md:w-[90%] h-auto object-contain transition-transform duration-700 hover:scale-[1.02]"
            />

            <div className="absolute left-5 bottom-5 z-20 border border-text1/20 bg-background/80 backdrop-blur-md px-3 py-2">
              <p className="font-ibm text-[9px] tracking-widest text-text1">
                FROOTIFY / PRODUCTION
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="font-ibm text-[10px] tracking-[0.2em] text-text2 mb-4">
                    HEALTHCARE / OPERATIONS
                  </p>

                  <h3 className="font-manrope text-5xl md:text-6xl font-semibold tracking-tight text-text">
                    Frootify
                  </h3>
                </div>

                <span className="font-ibm text-4xl md:text-5xl text-text1/20">
                  01
                </span>
              </div>

              <p className="font-manrope text-lg md:text-xl text-text1 leading-relaxed mt-6 max-w-xl">
                Preventive healthcare, made operational from acquisition
                through vendor management.
              </p>
            </div>

            {/* CASE STUDY */}
            <div className="mt-10 space-y-0">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="border-t border-text1/20 py-5 grid grid-cols-[45px_1fr] md:grid-cols-[55px_1fr] gap-4"
                >
                  <span className="font-ibm text-[10px] text-text2">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h4 className="font-ibm text-[10px] tracking-wider text-text uppercase">
                      {feature.title}
                    </h4>

                    <p className="font-manrope text-sm text-text1 leading-6 mt-2">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* STACK */}
            <div className="mt-7">
              <p className="font-ibm text-[9px] tracking-[0.2em] text-text1 uppercase mb-3">
                Stack
              </p>

              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool.text}
                    className="border border-text1/20 bg-background/40 px-3 py-2 font-ibm text-[10px] text-text1 transition-colors hover:border-text2/50 hover:text-text2"
                  >
                    {tool.text}
                  </span>
                ))}
              </div>
            </div>

            {/* LINKS */}
            <div className="flex flex-col gap-3 mt-8">
              {live.map((item) => (
                <a
                  key={item.text}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between w-full md:w-[250px] border-b border-text1/20 pb-3 font-ibm text-[11px] text-text transition-colors hover:text-text2"
                >
                  <span>{item.text}</span>

                  <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    {item.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frootify;

