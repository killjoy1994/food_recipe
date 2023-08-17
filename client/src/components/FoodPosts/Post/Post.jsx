import React from "react";
import Dessert from "../../../assets/dessert.jpg";
import { AiOutlineHeart } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import placeholderImg from "../../../assets/bgupload.png";

const Post = ({ data }) => {
  return (
    <div className=" bg-white pb-3">
      <div className="h-[250px] overflow-hidden relative">
        <img className="object-cover h-full w-full hover:brightness-75 transition" src={data.selectedFile !== "" ? data.selectedFile : placeholderImg} alt="food image" />
        <div className="top-0 absolute cursor-pointer p-2 w-full flex justify-end">
          <BsThreeDotsVertical color="white" size={15} />
        </div>
      </div>
      <div className="px-3">
        <p className="text-xl mt-3 font-semibold text-slate-700">{data.title}</p>
        <div className="flex justify-between">
          <p className="text-slate-700 font-medium">{data.preparationTime}</p>
          <span>Medium</span>
        </div>
      </div>
     
    </div>
  );
};

export default Post;
