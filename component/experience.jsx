import { FaGreaterThan } from "react-icons/fa";

function Experience() {
  const experience = [
    {
      name: "CYCLOBOLD",
      position: "Software Engineer Evangelist",
      period: "Aug 2025 – Present",
      mode: "Full Time – On-site ",
      location: "Fadeyi, Lagos",
      resp: [
        "Facilitated software development training, mentoring students who registered for development courses, and guiding them from fundamentals to project execution.",
        "Collaborated with a cross-functional team to develop and deliver client projects that met technical requirements and business goals.",
        "Implemented automation workflows on automation platforms, helping clients streamline processes, reduce manual work, and boost productivity.",
        "Contributed to documentation and knowledge-sharing, ensuring both students and team members had access to clear learning resources and project guidelines.",
        "Authored technology-related blog articles on the company’s website, simplifying complex concepts and promoting awareness of modern tools and practices.",
      ],
    },
    {
      name: "GOMYCODE",
      position: "Software Developer",
      period: "Aug 2024 – Jul 2025",
      mode: "NYSC",
      location: "Yaba, Lagos",
      resp: [
        "Engineered FitMuse, a full-stack e-commerce platform using Next.js, Express.js, and MongoDB, featuring secure JWT authentication, dynamic product pages, and responsive design",
        "Built EventHub, an event ticketing platform integrating secure payment processing and ticket management using HTML, Tailwind CSS, JavaScript, and Express.js",
        "Designed and developed PhotoHub, a lightweight image slider application for smooth, interactive photo viewing",
        "Created Travel Dream, a visually engaging travel agency site showcasing destinations worldwide",
        "Launched JStack, a tech job listing platform for the latest career opportunities",
        "Collaborated in peer code reviews, implemented Git version control workflows, and optimized application performance",
      ],
    },
  ];
  return (
    <div className="w-[90%] lg:w-[60%] mx-auto ">
      {experience.map((experience, index) => (
        <div key={index}>
          <div className="lg:flex lg:justify-between lg:item-center mt-[20px]">
            <div className="text-center lg:w-[35%] lg:text-left">
              <p className="text-[#4f678e] font-bold text-1xl font-serif">
                {experience.mode} | <span>{experience.location}</span>
              </p>
              <p className="text-[#6b7796] font-semibold text-sm font-serif">
                {experience.period}
              </p>
            </div>

            <div className=" mt-[10px] lg:mt-o lg:w-[65%]">
              <h3 className="text-center lg:text-left text-[#97a3c1] text-2xl font-bold font-sans">
                {experience.name}
              </h3>
              <h6 className="text-base font-mons text-[#97a3c1] py-[5px]">
                {experience.position}
              </h6>
              <ul>
                {experience.resp.map((task, i) => (
                  <li
                    key={i}
                    className="py-[5px] text-sm text-[#b8c9ed] flex justify-between items-center"
                  >
                    <span className="pr-[20px] text-[#3d9d91]">
                      <FaGreaterThan />
                    </span>
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;
