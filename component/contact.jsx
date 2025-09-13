"use client";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";

function Contact() {
  const [error, setError] = useState("");
  const [success, setSucess] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!email || !subject || !message) {
      setError("Please fill all required fields");
      return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please use a vaild email address");
      return;
    } else {
      setError("");
      setSucess("Email sent successfully");

      setEmail("");
      setSubject("");
      setMessage("");

      setTimeout(() => {
        setSucess("");
      }, 3000);

      return;
    }
  };
  const connect = [
    {
      icon: <FaFacebookF />,
      name: "Facebook",
      link: "https://web.facebook.com/azuh.salvation.1/",
    },
    {
      icon: <FaXTwitter />,
      name: "X ",
      link: "https://x.com/salvationazuh",
    },
    {
      icon: <FaInstagram />,
      name: "Instgram",
      link: "https://www.instagram.com/official_chavon/",
    },
    {
      icon: <FaLinkedinIn />,
      name: "Linkedin",
      link: "https://www.linkedin.com/in/salvation-azuh/",
    },
    {
      icon: <FaGithub />,
      name: "Github",
      link: "https://github.com/Chavon007",
    },
    {
      icon: <MdOutlineEmail />,
      name: "Email",
      link: "mailto:salvationazuh@gmail.com",
    },
    {
      icon: <IoCallOutline />,
      name: "Call me",
      link: "tel:+2348131933895",
    },
    {
      icon: <FaWhatsapp />,
      name: "Whatsapp",
      link: "https://wa.me/2348131933895",
    },
  ];

  return (
    <div className="container mx-auto pt-[70px]" id="contact">
      <div className="w-[90%] mx-auto h-auto pb-[40px] mb-[20px]">
        <div className="text-center mt-[20px]">
          <h2 className="pt-[10px] text-[#ccd6f6] text-3xl font-bold font-sans">
            Get In Touch
          </h2>
        </div>

        <div className="lg:flex lg:justify-between lg:items-center">
          <div className="lg:w-[40%] flex flex-col h-[50vh]">
            <form
              onSubmit={handlesubmit}
              className=" flex flex-col gap-3 p-[10px]"
            >
              <h2 className="w-[100%] md:mx-auto text-sm text-center md:text-1xl font-serif p-[10px] font-semibold text-[#3d9d91]">
                Send email
              </h2>
              <div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                {success && <p className="text-green-500 text-sm">{success}</p>}
              </div>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Enter Your Email"
                className="rounded rounded-1xl bg-[#b7e2dc] p-[5px] placeholder:text-xs placeholder:font-serif focus:outline-none"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                name="subject"
                value={subject}
                placeholder="Email Subject"
                className="rounded rounded-1xl bg-[#b7e2dc] p-[5px] placeholder:text-xs placeholder:font-serif focus:outline-none"
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                name="message"
                value={message}
                placeholder="Enter Your Message"
                className="rounded rounded-1xl bg-[#b7e2dc] p-[5px] placeholder:text-xs placeholder:font-serif focus:outline-none h-[20vh]"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button className="border border-1 border-[#3d9d91]  w-[40%] mx-auto text-[#3d9d91] font-bold hover:scale-[1.05] transition-transform font-sans flex justify-center items-center text-sm p-[4px]">
                Send Message
              </button>
            </form>
          </div>

          <div className="w-[90%] mx-auto">
            <h2 className="w-[100%]  text-sm text-center md:text-1xl font-serif p-[10px] font-semibold text-[#3d9d91]">
              Social links
            </h2>

            <div className="md:w-[100%] md:flex md:items-center lg:w-[100%] lg:flex lg:items-center ">
              {connect.map((mainLink, index) => (
                <div
                  className="links flex-col items-center md:w-[90%] justify-center"
                  key={index}
                >
                  <h3 className="flex p-[8px] md:flex-col justify-between  mr-[10px] md:justify-center items-center">
                    <small className="text-[#3d9d91] text-1xl">
                      {mainLink.icon}
                    </small>{" "}
                    <span className="text-xs lg:text-sm md:mt-[10px] w-[80%] mx-auto text-[#ccd6f6] flex justify-center font-serif hover:text-[#99aceb]">
                      <Link href={mainLink.link}>{mainLink.name}</Link>
                    </span>{" "}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
