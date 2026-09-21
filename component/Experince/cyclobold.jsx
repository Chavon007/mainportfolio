import Exp from "./exp";

const content = {
  description:
    "Built production web, mobile, and backend systems while helping teams automate operations and developers grow their engineering skills.",

  stats: [
    {
      num: "50+",
      desc: "FixDride users onboarded",
    },
    {
      num: "120+ hrs",
      desc: "saved monthly across 5 SMEs",
    },
    {
      num: "20+",
      desc: "developers mentored",
    },
  ],

  technologies: [
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "React Native",
    "Laravel",
    "MongoDB",
    "n8n",
  ],

  achievements: [
    "Built FixDride's cross-platform experience with React Native, React, and Laravel, implementing service-provider matching and real-time status updates; onboarded 50+ users in the first month.",

    "Engineered backend services for SendMe's web and mobile applications using Node.js and Express, developing REST APIs and supporting core application workflows.",

    "Designed n8n automation workflows for 5 SMEs, eliminating repetitive manual processes and saving 120+ operational hours monthly.",

    "Created technical content on React and API architecture, contributing to a 35% increase in organic traffic.",

    "Mentored 20+ junior developers in full-stack engineering, contributing to a 90% course completion rate.",
  ],
};

function Cyclobold() {
  return (
    <Exp
      description={content.description}
      stats={content.stats}
      technologies={content.technologies}
      achievements={content.achievements}
    />
  );
}

export default Cyclobold;