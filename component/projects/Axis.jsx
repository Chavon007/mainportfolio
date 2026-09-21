
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import axis from "../../public/axis.png";

const tools = [
  { text: "React Native" },
  { text: "Supabase" },
  { text: "AWS EC2" },
  { text: "Express" },
];

const tool1 = [
  { text: "Node.js" },
  { text: "Express.js" },
  { text: "MongoDB" },
  { text: "REST" },
];

const features = [
  {
    title: "Problem",
    description:
      "Travelers in Lagos needed a faster, more reliable way to discover and book hotel rooms across the city.",
  },
  {
    title: "Built",
    description:
      "React Native app with real-time room availability, filterable hotel search, and a Node/Express + Supabase backend deployed on AWS EC2.",
  },
  {
    title: "Result",
    description:
      "Cross-platform mobile experience, live and installable via APK.",
  },
];

const live = [
  {
    text: "Live API",
    link: "https://identity-profile-api-service.vercel.app/",
    icon: <MdArrowOutward />,
  },
  {
    text: "Source",
    link: "https://github.com/Chavon007/identity-profile-api-service",
    icon: <FaGithub />,
  },
];

const api = [
  {
    text: "POST",
    api: "/api/profiles",
    desc: "create · admin",
  },
  {
    text: "GET",
    api: "/api/profiles",
    desc: "filter · sort · paginate",
  },
  {
    text: "GET",
    api: "/api/profiles/search",
    desc: "natural-language query parser",
  },
  {
    text: "GET",
    api: "/api/profiles/export",
    desc: "CSV export",
  },
  {
    text: "DELETE",
    api: "/api/profiles/:id",
    desc: "admin only",
  },
  {
    text: "GET",
    api: "/auth/github",
    desc: "GitHub OAuth + PKCE",
  },
];

const methodColor = {
  GET: "text-green-400",
  POST: "text-blue-400",
  DELETE: "text-red-400",
  PATCH: "text-yellow-400",
};

function Axis() {
  return (
    <div className="w-full border-b border-text1/20 py-10 md:py-20">
      <div className="grid md:grid-cols-2 gap-5">
        {/* ================= AXIS ================= */}
        <article className="border border-text1/20 bg-background1/40 overflow-hidden flex flex-col">
          {/* HEADER */}
          <div className="flex items-center justify-between border-b border-text1/20 px-5 py-4">
            <p className="font-ibm text-[10px] tracking-[0.18em] text-text1">
              PROJECT / 04
            </p>

            <p className="font-ibm text-[10px] tracking-[0.18em] text-text1">
              MOBILE + CLOUD
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative flex items-center justify-center bg-[#07100b] h-[390px] overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-30" />

            <div className="absolute w-52 h-52 rounded-full bg-text2/10 blur-[90px]" />

            <Image
              src={axis}
              alt="AXIS hotel booking app"
              width={428}
              height={604}
              className="relative z-10 h-[340px] w-auto drop-shadow-[0_25px_45px_rgba(0,0,0,0.6)] transition-transform duration-700 hover:scale-[1.03]"
            />

            <div className="absolute left-4 bottom-4 border border-text1/20 bg-background/80 backdrop-blur-md px-3 py-2">
              <p className="font-ibm text-[9px] tracking-widest text-text1">
                AXIS / MOBILE
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-5 md:p-7 flex flex-col flex-1">
            <div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-ibm text-[9px] tracking-[0.2em] text-text2 mb-3">
                    HOTEL RESERVATIONS
                  </p>

                  <h3 className="font-manrope text-4xl md:text-5xl font-semibold text-text">
                    AXIS
                  </h3>
                </div>

                <span className="font-ibm text-3xl text-text1/20">
                  04
                </span>
              </div>

              <p className="font-manrope text-sm md:text-base text-text1 leading-6 mt-4">
                Cross-platform hotel reservations for Lagos, built around
                real-time room discovery and a faster booking experience.
              </p>
            </div>

            {/* FEATURES */}
            <div className="mt-7">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="border-t border-text1/20 py-4 grid grid-cols-[35px_1fr] gap-3"
                >
                  <span className="font-ibm text-[9px] text-text2">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h4 className="font-ibm text-[9px] tracking-wider text-text uppercase">
                      {feature.title}
                    </h4>

                    <p className="font-manrope text-xs text-text1 leading-5 mt-1.5">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* STACK */}
            <div className="mt-auto pt-6">
              <p className="font-ibm text-[9px] tracking-[0.2em] text-text1 uppercase mb-3">
                Stack
              </p>

              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool.text}
                    className="border border-text1/20 px-2.5 py-1.5 font-ibm text-[9px] text-text1 hover:border-text2/50 hover:text-text2 transition-colors"
                  >
                    {tool.text}
                  </span>
                ))}
              </div>

              <a
                href="https://www.pingcast.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 flex items-center justify-between w-[150px] border-b border-text1/20 pb-2.5 font-ibm text-[10px] text-text hover:text-text2 transition-colors"
              >
                <span>DOWNLOAD APK</span>

                <MdArrowOutward className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>
        </article>

        {/* ================= IDENTITY API ================= */}
        <article className="border border-text1/20 bg-background1/40 overflow-hidden flex flex-col">
          {/* HEADER */}
          <div className="flex items-center justify-between border-b border-text1/20 px-5 py-4">
            <p className="font-ibm text-[10px] tracking-[0.18em] text-text1">
              PROJECT / 05
            </p>

            <p className="font-ibm text-[10px] tracking-[0.18em] text-text1">
              BACKEND SERVICE
            </p>
          </div>

          {/* TERMINAL */}
          <div className="p-4 md:p-5 bg-[#020403]">
            <div className="border border-text1/20 rounded-sm overflow-hidden">
              {/* TERMINAL BAR */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-text1/20 bg-background1">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-text1/30" />
                  <span className="w-2 h-2 rounded-full bg-text1/30" />
                  <span className="w-2 h-2 rounded-full bg-text1/30" />
                </div>

                <span className="font-ibm text-[9px] text-text1">
                  identity-api
                </span>

                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-text2" />

                  <span className="font-ibm text-[8px] text-text2">
                    SECURED
                  </span>
                </div>
              </div>

              {/* ENDPOINTS */}
              <div className="p-4 md:p-5 space-y-4">
                {api.map((item) => (
                  <div key={item.text + item.api}>
                    <div className="flex items-center gap-2">
                      <span
                        className={`font-ibm font-bold text-[9px] w-10 ${
                          methodColor[item.text] || "text-text1"
                        }`}
                      >
                        {item.text}
                      </span>

                      <span className="font-ibm text-[10px] text-text">
                        {item.api}
                      </span>
                    </div>

                    <p className="font-ibm text-[8px] text-text1/60 ml-12 mt-1">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* API FOOTER */}
              <div className="border-t border-text1/20 px-4 py-4 space-y-2">
                <div className="flex gap-2">
                  <FaLongArrowAltRight className="text-text2 mt-0.5 shrink-0 text-xs" />

                  <span className="font-ibm text-[9px] leading-4 text-text1">
                    3 external demographic APIs enriched
                  </span>
                </div>

                <div className="flex gap-2">
                  <FaLongArrowAltRight className="text-text2 mt-0.5 shrink-0 text-xs" />

                  <span className="font-ibm text-[9px] leading-4 text-text1">
                    RBAC · CSRF protected refresh tokens · rate limiting
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-5 md:p-7 flex flex-col flex-1">
            <div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-ibm text-[9px] tracking-[0.2em] text-text2 mb-3">
                    BACKEND / API
                  </p>

                  <h3 className="font-manrope text-3xl md:text-4xl font-semibold text-text">
                    Identity Profile API
                  </h3>
                </div>

                <span className="font-ibm text-3xl text-text1/20">
                  05
                </span>
              </div>

              <p className="font-manrope text-sm md:text-base text-text1 leading-6 mt-4">
                A profile enrichment service integrating three external
                demographic APIs with MongoDB search and role-based access
                control.
              </p>
            </div>

            {/* STACK */}
            <div className="mt-auto pt-8">
              <p className="font-ibm text-[9px] tracking-[0.2em] text-text1 uppercase mb-3">
                Stack
              </p>

              <div className="flex flex-wrap gap-2">
                {tool1.map((tool) => (
                  <span
                    key={tool.text}
                    className="border border-text1/20 px-2.5 py-1.5 font-ibm text-[9px] text-text1 hover:border-text2/50 hover:text-text2 transition-colors"
                  >
                    {tool.text}
                  </span>
                ))}
              </div>

              {/* LINKS */}
              <div className="flex flex-col gap-3 mt-6">
                {live.map((item) => (
                  <a
                    key={item.text}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between w-[170px] border-b border-text1/20 pb-2.5 font-ibm text-[10px] text-text hover:text-text2 transition-colors"
                  >
                    <span>{item.text}</span>

                    <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                      {item.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Axis;
