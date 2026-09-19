import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";
import frootify from "../../public/frootify.webp";
const features = [
  {
    title: "Problem",
    description:
      "Vendor onboarding and dashboard operations needed less friction and faster data access",
  },
  {
    title: "Built",
    description: (
      <>
        Multi-step registration, 
        <span className="text-text2">15+</span> secure APIs,
        optimized queries, newsletter automation with mautic paltform, and
        production features.
      </>
    ),
  },
  {
    title: "Result",
    description: (
      <>
        <span className="text-text2 ">35%</span> onboarding
        efficiency · <span className="text-text2">25%</span>{" "}
        dashboard performance.
        <span className="text-text2 ">95+</span> Lighthouse
      </>
    ),
  },
];

const tools = [
  {
    text: "React",
  },
  {
    text: "Nextjs",
  },
  {
    text: "laravel",
  },
  {
    text: "PostgreSQL",
  },
  {
    text: "Docker",
  },
  {
    text: "Mautic",
  },
];
const live = [
  {
    text: "frootify.tech ",
    link: "https://frootify.tech/",
    icon: <MdArrowOutward />,
  },
  {
    text: "dashboard.frootify.tech ",
    link: "https://dashboard.frootify.tech/",
    icon: <MdArrowOutward />,
  },
];

function Frootify() {
  return (
    <div className="flex items-center justify-between  border-b border-text1/50 pb-20">
      <div className="w-[40%] flex flex-col gap-5">
        <small className="text-text1/90 font-ibm text-[10px] tracking-wider font-light">
          PROJECT / 01 — PRODUCTION ECOSYSTEM
        </small>
        <h3 className="font-manrope text-6xl font-bold text-text">Frootify</h3>
        <p className=" text-text text-2xl font-light font-manrope">
          Preventive healthcare, made operational from acquisition through
          vendor management.
        </p>
        <div className=" flex flex-col gap-2 pt-6">
          {features.map((f) => (
            <div
              className="border-t  border-text1/50 text-center flex  gap-5 justify-between p-3"
              key={f.title}
            >
              <h4 className="text-[11px]  font-ibm text-text1 font-light ">
                {f.title}
              </h4>
              <p className="text-[14px] font-manrope text-text/90 w-[70%]  text-start font-light tracking-wider leading-6">
                {f.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center w-[250px] gap-2">
          {tools.map((t) => (
            <p
              className="text-text1 font-ibm font-light text-[10px] border border-text1/50 p-2"
              key={t.text}
            >
              {t.text}
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-4 mt-2">
          {live.map((l) => (
            <a
              key={l.text}
              href={l.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-[200px] gap-1 hover:text-text2 pb-2 font-ibm border-b border-text/50 text-sm font-semibold text-text tracking-wide"
            >
              <span>{l.text}</span> <span>{l.icon}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="w-[55%]">
        <Image
          src={frootify}
          alt="frootify"
          width={1000}
          height={1000}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}       

export default Frootify;
