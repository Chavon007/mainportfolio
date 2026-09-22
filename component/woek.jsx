"use client";

const content = [
  { text: "Understand", nums: "01" },
  { text: "Break down", nums: "02" },
  { text: "Build", nums: "03" },
  { text: "Test", nums: "04" },
  { text: "Ship", nums: "05" },
  { text: "Improve", nums: "06" },
];

function Row({ items }) {
  return (
    <div className="relative">
      {/* connecting line */}
      <div className="absolute inset-x-0 top-[7px] h-px bg-text/15" />

      <div className="relative grid grid-cols-3 md:grid-cols-6 gap-y-14">
        {items.map((c) => (
          <div
            key={c.nums}
            className="group flex flex-col items-start gap-6 md:gap-8 cursor-default"
          >
            {/* node — fills green on hover */}
            <span className="relative z-10 w-[15px] h-[15px] rounded-full border border-text/30 bg-background transition-colors duration-300 group-hover:bg-text2 group-hover:border-text2" />

            <div className="flex flex-col gap-2 md:gap-3">
              <p className="font-ibm text-[8px] text-text1/50 transition-colors duration-300 group-hover:text-text2">
                {c.nums}
              </p>
              <p className="font-manrope font-medium text-[10px] uppercase text-text transition-colors duration-300 group-hover:text-text2">
                {c.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HowIWork() {
  const rowOne = content.slice(0, 3);
  const rowTwo = content.slice(3, 6);

  return (
    <div className="bg-background min-h-auto w-full pb-5 overflow-hidden border-y  border-text/10">
      <div className="container w-[95%] md:w-[90%] mx-auto flex flex-col gap-8 py-20">
        <small className="w-full text-text2 font-ibm font-medium text-[10px] uppercase tracking-widest">
          How I think / From ambiguity to release
        </small>

        <div className="">
          {/* mobile: two rows of three, each with its own line */}
          <div className="flex flex-col gap-16 md:hidden">
            <Row items={rowOne} />
            <Row items={rowTwo} />
          </div>

          {/* desktop: one continuous row of six */}
          <div className="hidden md:block">
            <Row items={content} />
          </div>
        </div>

        <p className="text-text1 mt-8 font-normal font-ibm text-[10px] flex justify-end">
          Shipping isn't the end of the process. It's where the useful
          feedback starts.
        </p>
      </div>
    </div>
  );
}

export default HowIWork;