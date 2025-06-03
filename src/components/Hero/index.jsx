import { MoveVertical } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="container mx-auto relative top-5 left-6">
        <h1 className="text-7xl font-extrabold font-tertiary absolute right-7 w-1/4 top-6 text-right text-black/80">
          let's Bring your ideas to life
        </h1>
      </div>
      <div className="container mx-auto absolute top-180 left-10 w-1/3">
        <div className="flex items-center gap-2">
            <div className="h-3 w-3 bg-black/80 rounded-full relative bottom-0.5"></div>
        <h2 className="text-2xl font-semibold font-tertiary text-black/80">
          ready to elevate your brand?
        </h2>
        </div>
        <div className="flex gap-2">
          
          <div>
            <h3 className="text-md   relative right-0 left-0.5 font-primary text-black/80 tracking-widest font-extrabold">
              Drop a message and let's start building{" "}
            </h3>
            <h3 className="text-md   relative right-0 bottom-2 font-primary  left-0.5 text-black/80 tracking-widest font-extrabold">
              something amazing together
            </h3>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-1 relative top-180">
        <h4 className="text-[16px] font-bold text-black/60">Scroll</h4><MoveVertical size={10} />
      </div>
    </>
  );
};

export default Hero;
