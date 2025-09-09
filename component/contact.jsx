import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";

function Contact() {
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
    <div className="container mx-auto">
      <div className="">
        <div>
          <h2>Get In Touch</h2>
        </div>

        <div>
          <div>
            <form action="">
              <input type="email" placeholder="Enter Your Email" />
              <input type="text" placeholder="Email Subject" />
              <textarea placeholder="Enter Your Message"></textarea>
              <button>Send Message</button>
            </form>
          </div>

          <div>
            {connect.map((mainLink, index) => (
              <div className="links" key={index}>
                <h3>
                  <small>{mainLink.icon}</small>{" "}
                  <span>
                    <Link href={mainLink.link}>{mainLink.name}</Link>
                  </span>{" "}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
