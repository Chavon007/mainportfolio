"use client";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { ImLocation } from "react-icons/im";

const content = [
  {
    text: "LinkedinIn",
    link: "https://www.linkedin.com/in/salvation-azuh/",
    icon: <FaLinkedinIn />,
  },
  {
    text: "Github",
    link: "https://github.com/Chavon007",
    icon: <FaGithub />,
  },
  {
    text: "Email",
    link: "mailto:salvationazuh@gmail.com",
    icon: <MdOutlineEmail />,
  },
  {
    text: "Whatsapp",
    link: "https://wa.me/2348131933895",
    icon: <FaWhatsapp />,
  },
];

function Contact() {
  const year = new Date().getFullYear();
  return (
    <div
      id="contact"
      className="bg-text2 min-h-auto w-full pb-10 overflow-hidden flex flex-col"
    >
      <div className="w-[95%] md:w-[90%] mx-auto flex-1 flex flex-col pt-16 md:pt-24">
        <small className="text-background font-ibm font-medium text-[10px] uppercase tracking-widest">
          06 / Start a conversation
        </small>

        <h2 className="mt-8 md:mt-12 font-manrope font-bold text-background text-5xl sm:text-6xl md:text-8xl leading-[1.05]">
          Have a product
          <br />
          <span className="inline-block border-b-[6px] md:border-b-[8px] border-background pb-2">
            to build?
          </span>
        </h2>

        <a
          href="mailto:salvationazuh@gmail.com"
          className="group mt-14 md:mt-20 flex items-center justify-between gap-4 border-t border-background/30 py-8 md:py-10"
        >
          <span className="font-manrope font-normal text-background text-base md:text-3xl  break-all">
            salvationazuh@gmail.com
          </span>
          <MdArrowOutward className="shrink-0 text-background text-2xl transition-transform duration-300 group-hover:rotate-45" />
        </a>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-background/30 py-8 lg:py-10">
          <h3 className="flex items-center gap-2 text-background font-ibm text-xs uppercase tracking-widest">
            <ImLocation />
            <span>Lagos, Nigeria</span>
          </h3>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            {content.map((c) => (
              <a
                key={c.text}
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-background font-ibm text-xs uppercase tracking-widest hover:opacity-60 transition-opacity duration-200"
              >
                <span>{c.icon}</span>
                <span>{c.text}</span>
              </a>
            ))}
          </div>
        </div>

        <p className="mt-auto flex flex-col md:flex-row md:items-center md:justify-between gap-2 border-t border-background/30 pt-8 text-background/70 font-ibm text-[10px] md:text-[11px]  uppercase tracking-widest">
          <span>
            &copy; {year}. All rights reserved by Salvation Enyioma Azuh
          </span>
          <span>Engineered to ship.</span>
        </p>
      </div>
    </div>
  );
}

export default Contact;
