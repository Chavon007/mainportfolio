import Exp from "./exp";

const content = {
  description:
    "Built and improved production features across vendor onboarding, dashboards, APIs, and internal operations.",

  stats: [
    {
      num: "35%",
      desc: "faster vendor onboarding",
    },
    {
      num: "25%",
      desc: "dashboard performance improvement",
    },
    {
      num: "15+",
      desc: "Laravel API endpoints",
    },
  ],

  technologies: [
    "React",
    "Next.js",
    "Laravel",
    "PHP",
    "PostgreSQL",
    "Docker",
    "Mautic",
    "Paystack",
  ],

  achievements: [
    "Built and improved production features across vendor onboarding, dashboards, and internal operations using React, Next.js, and Laravel.",

    "Developed 15+ Laravel REST API endpoints and integrated PostgreSQL-backed services to support core application workflows.",

    "Improved the vendor onboarding experience by 35% by streamlining the onboarding workflow and reducing unnecessary friction.",

    "Improved dashboard performance by 25% through frontend and backend optimizations.",

    "Automated newsletter and customer communication workflows using Mautic and Laravel jobs, reducing repetitive manual processes.",
  ],
};

function Frootify() {
  return (
    <Exp
      description={content.description}
      stats={content.stats}
      technologies={content.technologies}
      achievements={content.achievements}
    />
  );
}

export default Frootify;