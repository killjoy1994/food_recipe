import React from "react";
import { PiBowlFood } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const BrandLogo = ({ logoSize, textSize, onClick }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="flex items-center gap-x-4 cursor-pointer" onClick={handleClick}>
      <PiBowlFood size={logoSize} color="gray" />
      <h1 className={twMerge("text-4xl text-slate-700 font-bold", textSize)}>MASAK</h1>
    </div>
  );
};

export default BrandLogo;
