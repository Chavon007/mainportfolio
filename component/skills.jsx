"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

function Skills() {
  const myskill = [
    {
      image: "/html.png",
      name: "html",
    },
    {
      image: "/css.png",
      name: "css",
    },
    {
      image: "/tailwind.png",
      name: "tailwind",
    },
    {
      image: "/javascript.png",
      name: "javascript",
    },
    {
      image: "/typescript.png",
      name: "typescript",
    },
    {
      image: "/react.jpeg",
      name: "react",
    },
    {
      image: "/next.png",
      name: "next",
    },
    {
      image: "/node.png",
      name: "node",
    },
    {
      image: "/express.png",
      name: "express",
    },
    {
      image: "/mongodb.png",
      name: "mongodb",
    },
  ];
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 6,
    cssEase: "linear",
    autoplaySpeed: 0,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      <div className="container mx-auto">
        <h2 className="text-center pt-[30px] text-[#ccd6f6] text-3xl font-bold font-sans">
          My Skills
        </h2>
        <Slider className="w-[90%] mx-auto" {...settings}>
          {myskill.map((newskill, index) => (
            <div key={index} className="mt-[70px]">
              <Image
                src={newskill.image}
                alt={newskill.name}
                width={50}
                height={50}
              />
              <p className="pl-[2px] text-[#8892b0] text-sm">{newskill.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
export default Skills;
