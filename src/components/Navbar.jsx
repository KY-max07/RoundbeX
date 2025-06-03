import React, { useState } from "react";
import { motion } from "framer-motion";
const Navbar = () => {
  // 🕒 Format time in 12-hour format with AM/PM
  const formatTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")} ${ampm}`;
  };

  const [timeString, setTimeString] = React.useState(formatTime);
  const [isBracs1, setIsBracs1] = useState(false);
  const [isBracs2, setIsBracs2] = useState(false);
  const [isBracs3, setIsBracs3] = useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimeString(formatTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="  grid grid-col-2 lg:grid-cols-3 items-center justify-center p-4 bg-white/10 h-10 lg:h-14 w-screen border-b border-gray-200 px-10 backdrop-blur-sm">
      <img
        src="./src/assets/Roundbex.svg"
        alt="Roundbex Logo"
        className="h-5 cursor-pointer relative bottom-1.5 lg:bottom-0"
        
        onClick={() => window.location.reload()}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            window.location.reload();
          }
        }}
      />

      <div className=" justify-center  lg:space-x-25  font-bold  font-mono text-md hidden lg:flex text-nowrap">
        <h2
          onMouseEnter={() => setIsBracs1(true)}
          onMouseLeave={() => setIsBracs1(false)}
          className="relative cursor-pointer"
        >
          {isBracs1 ? (
            <span className="font-bold absolute left-[-8px]">[</span>
          ) : (
            ""
          )}
          work &copy;
          {isBracs1 ? <span className="font-bold absolute">]</span> : ""}
        </h2>
        <h2
          onMouseEnter={() => setIsBracs2(true)}
          onMouseLeave={() => setIsBracs2(false)}
          className="relative cursor-pointer"
        >
          {isBracs2 ? (
            <span className="font-bold absolute left-[-8px]">[</span>
          ) : (
            ""
          )}
          About {isBracs2 ? <span className="font-bold absolute">]</span> : ""}
        </h2>
        <h2
          onMouseEnter={() => setIsBracs3(true)}
          onMouseLeave={() => setIsBracs3(false)}
          className="relative cursor-pointer"
        >
          {isBracs3 ? (
            <span className="font-bold absolute left-[-8px]">[</span>
          ) : (
            ""
          )}
          Reach out{" "}
          {isBracs3 ? <span className="font-bold absolute">]</span> : ""}
        </h2>
      </div>

      <div className=" justify-end space-x-4 items-center hidden lg:flex relative bottom-5 lg:bottom-0">
        <button
          title="Indian Standard Time"
          className="bg-primary text-black/90 font-bold font-mono rounded-2xl px-3 py-0 border-2 border-black whitespace-nowrap text-nowrap text-xs items-center flex  justify-center"
        >
          [IST] <span>{timeString}</span><motion.div className="bg-black rounded-full h-2.5 w-2.5  relative left-1.5" initial={{ opacity: 0,  }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{duration:1,  repeat: Infinity, repeatType: "loop",  ease:"in-out"}}> </motion.div>
        </button>
      </div>
      <div></div>
    </div>
    <div className=" lg:hidden  p-4 bg-white/10 h-10  w-screen border-b border-gray-200 px-10 backdrop-blur-sm">
       <div className=" justify-center space-x-15 md:space-x-40  font-bold  font-mono text-md lg:hidden flex text-nowrap items-center relative bottom-2">
        <h2 title="work"
          onMouseEnter={() => setIsBracs1(true)}
          onMouseLeave={() => setIsBracs1(false)}
          className="relative cursor-pointer"
        >
          {isBracs1 ? (
            <span className="font-bold absolute left-[-8px]">[</span>
          ) : (
            ""
          )}
          work &copy;
          {isBracs1 ? <span className="font-bold absolute">]</span> : ""}
        </h2>
        <h2
          onMouseEnter={() => setIsBracs2(true)}
          onMouseLeave={() => setIsBracs2(false)}
          className="relative cursor-pointer"
        >
          {isBracs2 ? (
            <span className="font-bold absolute left-[-8px]">[</span>
          ) : (
            ""
          )}
          About {isBracs2 ? <span className="font-bold absolute">]</span> : ""}
        </h2>
        <h2
          onMouseEnter={() => setIsBracs3(true)}
          onMouseLeave={() => setIsBracs3(false)}
          className="relative cursor-pointer"
        >
          {isBracs3 ? (
            <span className="font-bold absolute left-[-8px]">[</span>
          ) : (
            ""
          )}
          Reach out{" "}
          {isBracs3 ? <span className="font-bold absolute">]</span> : ""}
        </h2>
      </div>
    </div>
    </>
  );
};

export default Navbar;
