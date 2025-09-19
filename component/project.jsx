import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function Project() {
  const projectcard = [
    {
      image: "/fitmuse.JPG",
      name: "FITMUSE - Full-Stack E-Commerce Website",
      desc: "A complete fitness-themed e-commerce platform where users can browse, search, and purchase gym wear and accessories.",
      stack: ["Next.js", "Express.js", "MongoDB", "CSS"],
      link: "https://fitmuse.vercel.app/",
    },
    {
      image: "/Healet.JPG",
      name: "Healet – Jewelry Store Website",
      desc: "A stylish and modern jewelry storefront built with Next.js, designed to highlight elegant products and deliver a smooth shopping experience.",
      stack: ["Next.js", "CSS"],
      link: "https://jewellery-app-two.vercel.app/",
    },
    {
      image: "/eventhub.png",
      name: "EventHub – Ticket Booking App",
      desc: "A simple web app where users can browse upcoming events view event details, and book tickets",
      stack: ["HTML", "Tailwind CSS", "JavaScript", "Express.js", "MongoDB"],
      link: "https://eventhub-eight-gamma.vercel.app/",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <div className="w-[90%] lg:w-[55%] mx-auto" id="projects">
        {projectcard.map((project, index) => (
          <div key={index} className="mt-[30px]">
            <Image
              src={project.image}
              alt={project.image}
              width={1000}
              height={1000}
              style={{ width: "100%", height: "60%" }}
            />
            <div className="mt-[10px] lg:text-center">
              <h2 className="text-1xl text-[#97a3c1] font-bold font-serif">
                {project.name}
              </h2>
              <p className="text-sm text-[#3d9d91] font-serif p-[10px]">
                {project.desc}
              </p>
              <ul className="flex justify-center  items-center">
                {project.stack.map((stack, i) => (
                  <li
                    key={i}
                    className="ml-[10px] text-center text-sm font-sans italic text-[#b8c9ed] "
                  >
                    {stack}
                  </li>
                ))}
              </ul>

              <div className="mt-[10px]">
                <Link
                  href={project.link}
                  className="bg-[#3d9d91] flex justify-center items-center text-[#b8c9ed] max-w-[150px] mx-auto p-[6px] hover:bg-[#379187] text-sm font-serif"
                >
                  See Project
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
export default Project;
