import Frootify from "./projects/Frootify";
import Pingcast from "./projects/Pingcast";
import Fixdride from "./projects/Fixdride";
import Axis from "./projects/Axis";
function Project() {
  return (
    <div className="bg-background min-h-screen  w-full pb-20 overflow-hidden">
      <div className="w-[90%] md:w-[90%] mx-auto">
        {/* header */}
        <div className="flex flex-col md:flex-row border-b border-text1/30  md:justify-between md:items-end pb-8  md:py-20 gap-3 md:gap-0">
          <small className=" w-full md:w-[25%] text-text2 font-ibm font-medium text-[10px] uppercase tracking-widest">
            01 / Selected work
          </small>

          <h2 className="w-full md:w-[44%] text-4xl md:text-6xl md:tracking-wide tracking-[0.020em] font-manrope font-bold md:leading-15 text-text">
            Evidence, not claims.
          </h2>

          <p className=" w-full md:w-[38%] text-[18px] md:text-[10px] font-manrope font-medium text-text1/90">
            Products built across healthcare, AI, hospitality, and data
            services. Each one solves a real operational or user problem.
          </p>
        </div>

        {/* projects */}
        <div className=" mt-15 md:mt-25">
          <Frootify />
          <Pingcast />
          <Fixdride />
          <Axis />
        </div>
      </div>
    </div>
  );
}
export default Project;
