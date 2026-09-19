import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import pingcast from "../../public/pingcast.webp";

const tools = [
  {
    text: "React",
  },
  {
    text: "laravel",
  },
  {
    text: "PostgreSQL",
  },
  {
    text: "supabase",
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
    <div className="flex items-center justify-between mt-20 border-b border-text1/50 pb-20">
      <div className="w-[55%]">
        <Image
          src={pingcast}
          alt="frootify"
          width={1000}
          height={1000}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="w-[40%] flex flex-col gap-5">
        <small className="text-text1/90 font-ibm text-[10px] tracking-wider font-light">
          PROJECT / 02 — AI + AUTOMATION
        </small>
        <h3 className="font-manrope text-6xl font-bold text-text">Pingcast</h3>
        <p className="text-text w-[350px] text-2xl font-semi-bold font-manrope">
          A weather concierge that turns forecast data into useful, scheduled
          daily guidance.
        </p>
        <p className="text-text1/90 font-manrope w-[350px] font-medium">
          Built with React, Laravel, and PostgreSQL. Open-Meteo supplies
          forecast data; Groq generates personalized recommendations; automated
          scheduling handles delivery.
        </p>
        <div className="bg-background1 border-l-2 border-text2 p-5 flex flex-col gap-2">
          <h5 className=" text-text1 font-manrope font-medium text-[12px]">
            TECHNICAL DECISION
          </h5>
          <p className=" text-text1 font-manrope text-[11px] font-medium">
            Separate weather data from recommendation generation so each
            integration can evolve independently.
          </p>
        </div>

        <div className="flex justify-between items-center w-[450px] gap-2">
          {tools.map((t) => (
            <p
              className="text-text1 font-ibm font-light text-[10px] border border-text1/50 p-2"
              key={t.text}
            >
              {t.text}
            </p>
          ))}
        </div>
        <a
          href="https://www.pingcast.site/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center w-[120px] gap-1 hover:text-text2 pb-2 font-ibm border-b border-text/50 text-sm font-semibold text-text tracking-wide"
        >
          pingcast.site
          <span>
            <MdArrowOutward/>
          </span>
        </a>
      </div>
    </div>
  );
}

export default Pingcast;
