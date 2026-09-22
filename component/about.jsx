"use client";

const content = [
  { text: "User empathy — thinking about people, not just specs" },
  { text: "Clear technical writing and documentation" },
  { text: "Cross-functional collaboration" },
  { text: "Product awareness beyond the code layer" },
];

function About() {
  return (
    <div id="about" className="bg-background min-h-auto w-full pb-20 overflow-hidden">
      <div className="container w-[95%] md:w-[90%] mx-auto pt-24 md:pt-32 flex flex-col md:flex-row gap-12 md:gap-16">
        {/* left: intro */}
        <div className="md:w-[58%] flex flex-col gap-6">
          <small className="flex items-center gap-2 text-text2 font-ibm text-xs uppercase tracking-widest">
            05 / About
          </small>

          <h3 className="font-serif text-text text-4xl md:text-6xl leading-[1.1] max-w-[560px]">
            From storytelling to engineering.
          </h3>

          <div className="flex flex-col gap-5 max-w-[560px] mt-2">
            <p className="text-text1 font-manrope text-[14px] font-light leading-relaxed">
              I studied Communication Arts at the University of Uyo — not
              Computer Science. That background shaped how I approach
              engineering: I think about the person using the software, not
              just the system running it.
            </p>
            <p className="text-text1 font-manrope text-[14px] font-light leading-relaxed">
              I transitioned into software through building actual products —
              APIs processing real transactions, dashboards real vendors rely
              on, mobile apps with real download counts. Not bootcamp theory.
            </p>
            <p className="text-text1 font-manrope text-[14px] font-light leading-relaxed">
              That path gives me something unusual: I can write the code and
              explain why it matters. I build the feature and understand the
              user behind it. I collaborate clearly, document thoroughly, and
              care about the whole product — not just my piece of it.
            </p>
          </div>
        </div>

        {/* right: humanities-background card */}
        <div className="md:w-[42%]">
          <div className="border border-text/10 bg-background1 rounded-lg p-6 md:p-8">
            <h4 className="text-text2 font-ibm text-xs uppercase tracking-widest">
              What the humanities background adds
            </h4>

            <div className="flex flex-col gap-4 mt-6">
              {content.map((c) => (
                <p key={c.text} className="flex items-start gap-3">
                  <span className="text-text2 font-ibm text-sm leading-6">
                    -
                  </span>
                  <span className="text-text1 font-manrope text-sm leading-relaxed">
                    {c.text}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;