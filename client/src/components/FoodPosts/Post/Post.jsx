import React from "react";
import Dessert from "../../../assets/dessert.jpg";
import { AiOutlineHeart } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";

const Post = () => {
  return (
    <div className=" bg-white pb-3">
      <div className="h-[250px] overflow-hidden relative">
        <img className="object-cover h-full w-full hover:brightness-75 transition" src={Dessert} alt="" />
        <div className="top-0 absolute cursor-pointer p-2 w-full flex justify-end">
          <BsThreeDotsVertical color="white" size={15} />
        </div>
      </div>
      <div className="px-3">
        <p className="text-xl mt-3 font-semibold text-slate-700">Lorem ipsum dolor sit</p>
        <p className="text-xs font-semibold text-slate-500">By: Bagus Nugroho</p>
      </div>
      <div className="flex justify-between mt-5 px-2">
        <div className=" flex items-center gap-x-1">
          <AiOutlineHeart size={20} />
          <p className="font-medium text-slate-700">Like the this</p>
        </div>
        {/* <button>
          <RiDeleteBin6Line size={20} />
        </button> */}
      </div>
    </div>
  );
};

export default Post;
