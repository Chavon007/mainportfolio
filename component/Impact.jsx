const nums = [
  {
    number: "35%",
    text: "Faster vendor onboarding",
    desc: "Frootify · registration workflow",
    lab: "01",
  },
  {
    number: "25%",
    text: "Dashboard performance gain",
    desc: "15+ secure Laravel endpoints",
    lab: "02",
  },
  {
    number: "120+",
    text: "Hours saved monthly",
    desc: "per client · n8n automation",
    lab: "03",
  },
  {
    number: "95+",
    text: "Lighthouse performance",
    desc: "SEO & Core Web Vitals",
    lab: "04",
  },
];

const nums2 = [
  {
    number: "50+",
    text: "FixDride users in month one",
  },
  {
    number: "30%",
    text: "fewer production issues",
  },
  {
    number: "90%",
    text: "course completion across 20+ mentees",
  },
];

function Impact() {
  return (
    <div id="impact" className="bg-text min-h-auto w-full py-20 overflow-hidden">
      <div className="container w-[95%] md:w-[90%] mx-auto">
        {/* header */}
        <div className="flex flex-col md:flex-row border-b border-background/10  md:justify-between md:items-end pb-8  md:py-20  gap-3 lg:gap-0">
          <small className=" w-full md:w-[40%] lg:w-[25%] text-background/50 font-ibm font-medium text-[10px] uppercase tracking-widest">
            02 / Engineering impact
          </small>

          <h2 className="w-full  md:text-center lg:text-start lg:w-[50%] text-4xl md:text-5xl lg:text-7xl md:tracking-wide tracking-[0.020em] font-manrope font-bold md:leading-15 text-background">
            Measured in outcomes.
          </h2>

          <p className=" w-full md:w-[30%] text-[18px] md:text-[13px] font-manrope font-medium text-background/50">
            Real numbers, tied to the work that produced them.
          </p>
        </div>

        {/* numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-l border-background/10 mt-8">
          {nums.map((n) => (
            <div
              key={n.number}
              className="flex flex-col justify-between p-6 md:p-10 min-h-[220px] md:min-h-[280px] border-r border-b md:border-b-0 border-background/10"
            >
              <small className="text-background/50 font-ibm font-medium text-[10px] uppercase tracking-widest">
                {n.lab}
              </small>

              <div>
                <h3 className="text-text2 font-manrope font-bold text-5xl md:text-6xl mb-4">
                  {n.number}
                </h3>
                <p className="text-background/90 font-manrope font-medium text-sm mb-1">
                  {n.text}
                </p>
                <small className="text-background/50 font-ibm text-[9px]">
                  {n.desc}
                </small>
              </div>
            </div>
          ))}
        </div>

        {/* number2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-l border-t border-background/10 mt-7">
          {nums2.map((impact) => (
            <div
              key={impact.text}
              className="flex items-center gap-2 p-6 md:p-10 border-r border-b md:border-b-0 border-background/10"
            >
              <h3 className="text-text2 font-manrope font-bold text-2xl md:text-3xl shrink-0">
                {impact.number}
              </h3>
              <p className="text-background font-ibm font-light text-[10px]  uppercase tracking-widest">
                {impact.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Impact;
