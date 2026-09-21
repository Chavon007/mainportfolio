import Exp from "./exp";

const content = {
  description:
    "Built full-stack applications involving payments, authentication, and collaborative engineering workflows.",

  stats: [
    {
      num: "30%",
      desc: "fewer development issues",
    },
    {
      num: "10+",
      desc: "developers in workflow",
    },
    {
      num: "2",
      desc: "full-stack applications",
    },
  ],

  technologies: [
    "React",
    "Next.js",
    "Express",
    "MongoDB",
    "Paystack",
    "JWT",
    "Git",
  ],

  achievements: [
    "Built EventHub with React, Express, MongoDB, and Paystack, implementing event management workflows and payment integration.",

    "Developed FitMuse as a full-stack e-commerce application with React and Node.js, implementing JWT-based authentication and core shopping workflows.",

    "Adopted Git workflows and code reviews across a 10+ developer team, contributing to a 30% reduction in development issues.",

    "Collaborated with other developers to integrate frontend interfaces with REST APIs and backend services.",
  ],
};

function GoMyCode() {
  return (
    <Exp
      description={content.description}
      stats={content.stats}
      technologies={content.technologies}
      achievements={content.achievements}
    />
  );
}

export default GoMyCode;