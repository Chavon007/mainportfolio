function Exp({ description, stats, technologies, achievements }) {
  return (
    <div className="flex flex-col gap-10">
      <p className="text-text font-ibm font-medium text-2xl">
        {description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {stats.map((stat) => (
          <div key={stat.desc} className="flex flex-col gap-2">
            <span className="text-text2 font-ibm font-bold text-2xl">
              {stat.num}
            </span>
            <span className="text-text1 font-ibm text-[11px] uppercase tracking-widest">
              {stat.desc}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-5">
        {achievements.map((achievement) => (
          <p
            key={achievement}
            className="flex items-start gap-3 text-text3 font-ibm font-light text-xs"
          >
            <span className="text-text2 shrink-0">→</span>
            <span>{achievement}</span>
          </p>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="border border-text1/20 rounded-full px-4 py-1.5 text-text1 font-ibm text-[11px] uppercase tracking-widest"
          >
            {technology}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Exp;