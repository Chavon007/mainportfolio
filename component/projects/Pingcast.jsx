
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import pingcast from "../../public/pingcast.webp";

const tools = [
  {
    text: "React",
  },
  {
    text: "Laravel",
  },
  {
    text: "PostgreSQL",
  },
  {
    text: "Supabase",
  },
  {
    text: "Groq AI",
  },
  {
    text: "Open-Meteo API",
  },
];

function Pingcast() {
  return (
    <div className="w-full border-b border-text1/20 py-20 md:py-28">
      <div className="border border-text1/20 bg-background1/40 overflow-hidden">
        {/* PROJECT HEADER */}
        <div className="flex items-center justify-between border-b border-text1/20 px-5 md:px-8 py-4">
          <p className="font-ibm text-[10px] tracking-[0.18em] text-text1">
            PROJECT / 02
          </p>

          <p className="font-ibm text-[10px] tracking-[0.18em] text-text1">
            AI + AUTOMATION
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
              src={pingcast}
              alt="Pingcast weather concierge"
              width={1000}
              height={1000}
              className="relative z-10 w-[92%] md:w-[90%] h-auto object-contain transition-transform duration-700 hover:scale-[1.02]"
            />

            <div className="absolute left-5 bottom-5 z-20 border border-text1/20 bg-background/80 backdrop-blur-md px-3 py-2">
              <p className="font-ibm text-[9px] tracking-widest text-text1">
                PINGCAST / AI
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="font-ibm text-[10px] tracking-[0.2em] text-text2 mb-4">
                    WEATHER / AI
                  </p>

                  <h3 className="font-manrope text-5xl md:text-6xl font-semibold tracking-tight text-text">
                    Pingcast
                  </h3>
                </div>

                <span className="font-ibm text-4xl md:text-5xl text-text1/20">
                  02
                </span>
              </div>

              <p className="font-manrope text-lg md:text-xl text-text1 leading-relaxed mt-6 max-w-xl">
                A weather concierge that turns forecast data into useful,
                scheduled daily guidance.
              </p>
            </div>

            {/* DESCRIPTION */}
            <div className="border-t border-text1/20 mt-10 pt-6">
              <p className="font-ibm text-[10px] tracking-wider text-text uppercase">
                Overview
              </p>

              <p className="font-manrope text-sm md:text-base text-text1 leading-6 mt-3 max-w-xl">
                Built with React, Laravel, and PostgreSQL. Open-Meteo supplies
                forecast data; Groq generates personalized recommendations;
                automated scheduling handles delivery.
              </p>
            </div>

            {/* TECHNICAL DECISION */}
            <div className="mt-6 bg-background1 border-l-2 border-text2 p-5">
              <p className="font-ibm text-[10px] tracking-wider text-text uppercase">
                Technical decision
              </p>

              <p className="font-manrope text-sm text-text1 leading-6 mt-2">
                Separate weather data from recommendation generation so each
                integration can evolve independently.
              </p>
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

            {/* LINK */}
            <a
              href="https://www.pingcast.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 flex items-center justify-between w-[150px] border-b border-text1/20 pb-3 font-ibm text-[11px] text-text transition-colors hover:text-text2"
            >
              <span>pingcast.site</span>

              <MdArrowOutward className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pingcast;
