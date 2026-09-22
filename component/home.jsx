"use client";
import { FaArrowDownLong } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
const buttonContent = [
  {
    text: "View past works",
    link: "#work",
    icon: <FaArrowDownLong />,
    background: "bg-text2",
    textColor: "text-background",
    hover: "",
  },
  {
    text: "Let's Talk",
    link: "#contact",
    icon: <MdArrowOutward />,
    background: "bg-transparent",
    textColor: "text-text",
    hover: "hover:border-text2 hover:text-text2",
  },
];

const pipeline = [
  {
    id: "01",
    title: "Idea",
    text: "Ready",
    color: "text-text1",
  },
  {
    id: "02",
    title: "Interface",
    text: "Ready",
    color: "text-text1",
  },
  {
    id: "03",
    title: "API",
    text: "Ready",
    color: "text-text1",
  },
  {
    id: "04",
    title: "Database",
    text: "Ready",
    color: "text-text1",
  },
  {
    id: "05",
    title: "Deployment",
    text: "Ready",
    color: "text-text1",
  },
  {
    id: "06",
    title: "Product",
    text: "Shipped",
    color: "text-text2",
  },
];
function Home() {
  return (
    <div className="bg-background pt-32 pb-20 grid-bg w-full min-h-screen p-2 flex items-center justify-center overflow-hidden">
      <div className="container w-[95%] lg:w-[90%] mx-auto flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between items-center h-auto">
        {/*  */}
        <div className="w-full lg:w-[50%] flex flex-col gap-5">
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-text2 shadow-[0_0_8px_2px_rgba(86,223,148,0.6)]"></span>{" "}
            <span className="text-text1/90 hover:text-text2 font-ibm text-[9px] md:text-[11px] uppercase font-light">
              Lagos, Nigeria
            </span>{" "}
            <span className="text-text1/90 hover:text-text2 font-ibm text-[9px] md:text-[11px] uppercase font-light">
              /
            </span>{" "}
            <span className="text-text1/90 hover:text-text2 font-ibm text-[11px] uppercase font-light">
              Available for engineering teams
            </span>
          </p>
          <small className="text-text2 font-ibm text-[11px] font-normal uppercase">
            Full Stack Software Engineer
          </small>
          <h2 className="text-text font-manrope font-bold text-6xl md:text-8xl max-w-[500px] leading-15 md:leading-22">
            Building products that <span className="text-text2">work.</span>
          </h2>
          <p className="text-text1/90 font-light font-manrope max-w-[600px] text-sm  md:text-base tracking-wider">
            I take features from an understood problem to a production
            release—across interfaces, APIs, data, integrations, and deployment.
          </p>
          <div className="flex flex-col focus:outline-none md:flex-row md:items-center md:justify-between w-full md:max-w-[400px] gap-2">
            {buttonContent.map((b) => (
              <a
                key={b.text}
                href={b.link}
                className={`font-ibm text-xs w-full rounded-xl md:w-[200px]  flex items-center justify-center gap-3  p-3 border border-text1/30 hover:scale-105 transition-transform  ${b.background} ${b.textColor} ${b.hover}`}
              >
                <span>{b.text}</span> <span>{b.icon}</span>
              </a>
            ))}
          </div>

          <small className=" hidden md:flex md:font-ibm md:text-[8px] md:text-text1">
            ENGINEERED TO SHIP®
          </small>
        </div>
        {/* product pipeline */}
        <div className=" w-full lg:w-[35%] lg:max-w-[350px] h-auto border border-text1/30">
          <div className="flex justify-between items-center border-b border-text1/30 px-5 py-4">
            <h4 className="text-[10px] font-ibm text-text1 font-semibold">
              PRODUCT PIPELINE
            </h4>
            <p className="text-[10px] font-ibm text-text2 font-semibold">
              Live
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {pipeline.map((p, index) => (
              <div
                key={p.title}
                className="pipeline-row flex justify-between px-5 py-3 border-b border-text1/30 items-center"
                style={{ animationDelay: `${index * 0.7}s` }}
              >
                <h6 className="flex items-center gap-6">
                  <span className="font-ibm text-text1 text-[10px] font-normal">
                    {p.id}
                  </span>
                  <span className="font-manrope text-[14px] text-text font-bold">
                    {p.title}
                  </span>
                </h6>
                <p
                  className={`text-[10px] font-ibm font-normal text-text1 ${p.color}`}
                >
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
