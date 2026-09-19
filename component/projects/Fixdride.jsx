import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";
import fixdride from "../../public/fixdride.png";
const features = [
  {
    title: "Problem",
    description:
      "Connecting vehicle owners to reliable auto service providers in Lagos with a smoother way to request and manage vehicle services.",
  },
  {
    title: "Built",
    description: (
      <>
        React web platform and React Native cross-platform mobile app, PHP
        Laravel REST API backend, service provider matching, and real-time
        status updates.
      </>
    ),
  },
  {
    title: "Result",
    description: (
      <>
        Reached <span className="text-text2">50+</span> users in its first month
        of launch, providing a connected experience across web and mobile.
      </>
    ),
  },
];

const tools = [
  {
    text: "React",
  },
  {
    text: "React native",
  },
  {
    text: "laravel",
  },
  {
    text: "MySql",
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

function Fixdride() {
  return (
    <div className="flex items-center justify-between mt-20   border-b border-text1/50 pb-20">
      <div className="w-[40%] flex flex-col gap-5">
        <small className="text-text1/90 font-ibm text-[10px] tracking-wider font-light">
          PROJECT / 03 — Auto Service Mobile & Web Platform
        </small>
        <h3 className="font-manrope text-6xl font-bold text-text">FixDRide</h3>
        <p className=" text-text text-2xl font-light font-manrope">
          Connecting vehicle owners to reliable auto service providers.
          Co-developed the cross-platform mobile and web experience that hit 50+
          users in its first month of launch.
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
        <div className="flex justify-between items-center w-[300px] gap-2">
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
          src={fixdride}
          alt="fixdride"
          width={1000}
          height={1000}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}

export default Fixdride;
