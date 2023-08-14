import React from "react";
import Test from "../../../assets/test.webp";
import { AiOutlineHeart } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

const Post = () => {
  return (
    <div className=" bg-white rounded-lg pb-3">
      <div className="h-[250px]">
        <img className="object-cover h-full w-full" src={Test} alt="" />
      </div>
      <p className="text-xl text-center mt-3 font-semibold text-slate-700">Lorem ipsum dolor sit</p>
      <div className="flex justify-between mt-3 ">
        <div className="px-2 flex items-center gap-x-1">
          <AiOutlineHeart size={20} />
          <p className="font-medium text-slate-700">Like the this</p>
        </div>
        <button>
          <RiDeleteBin6Line size={20} />
        </button>
      </div>
    </div>
  );
};

export default Post;
