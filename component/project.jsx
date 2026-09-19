import Frootify from "./projects/Frootify";
import Pingcast from "./projects/Pingcast";
import Fixdride from "./projects/Fixdride";

function Project() {
  return (
    <div className="bg-background min-h-screen  w-full pb-20 overflow-hidden ">
      <div className="w-[90%] mx-auto">
        {/* header */}
        <div className="flex border-b border-text1/90  justify-between items-end py-20">
          <small className="w-[25%] text-text2 font-ibm font-medium text-[10px] uppercase tracking-widest">
            01 / Selected work
          </small>

          <h2 className="w-[44%] text-6xl tracking-wide font-manrope font-bold leading-15 text-text">
            Evidence, not claims.
          </h2>

          <p className="w-[38%] text-[15px] font-manrope font-medium text-text1/90">
            Products built across healthcare, AI, hospitality, and data
            services. Each one solves a real operational or user problem.
          </p>
        </div>

        {/* projects */}
        <div className="mt-25">
          <Frootify />
          <Pingcast />
          <Fixdride />
        </div>
      </div>
    </div>
  );
}
export default Project;
