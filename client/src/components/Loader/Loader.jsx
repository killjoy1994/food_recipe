import React from "react";
import { PiBowlFood } from "react-icons/pi";
import { twMerge } from "tailwind-merge";

const Loader = () => {
  return (
    <div className="fixed inset-0  bg-white flex justify-center items-center z-50">
      <div className="flex flex-col items-center justify-center animate-bounce">
      <PiBowlFood size={50} color="orange" />
      <h1 className={twMerge("text-4xl text-slate-700 font-bold")}>masak.</h1>
      </div>
    </div>
  );
};

export default Loader;
