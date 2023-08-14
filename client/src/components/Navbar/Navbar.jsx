import React from "react";
import { PiBowlFood } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="h-[80px] max-w-[1300px] mx-auto bg-slate-50 px-8 flex items-center justify-between mt-5 rounded-md shadow-md">
      <div className="flex items-center gap-x-4">
        <PiBowlFood size={50} color="gray" />
        <h1 className="text-4xl text-slate-700 font-bold">MASAK</h1>
      </div>
      <div>
        <p className="text-slate-700 text-xl font-semibold">LOGIN</p>
      </div>
    </div>
  );
};

export default Navbar;
