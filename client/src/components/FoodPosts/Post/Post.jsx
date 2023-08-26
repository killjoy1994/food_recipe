import React from "react";
import Dessert from "../../../assets/dessert.jpg";
import { AiOutlineHeart } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import placeholderImg from "../../../assets/bgupload.png";
import { getLevel } from "../../../helpers/level";
import { useNavigate } from "react-router-dom";

const Post = ({ data }) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/recipe/${data._id}`)
  }
  return (
    <div className=" bg-white pb-3">
      <div className="h-[250px] overflow-hidden relative cursor-pointer" onClick={clickHandler}>
        <img
          className="object-cover h-full w-full hover:brightness-75 transition"
          src={data.selectedFile !== "" ? data.selectedFile : placeholderImg}
          alt="food image"
        />
        <div className="top-0 absolute cursor-pointer p-2 w-full flex justify-end">
          <BsThreeDotsVertical color="white" size={15} />
        </div>
      </div>
      <div className="px-0">
        <p className="text-xl mt-3 mb-2 font-semibold text-slate-700">{data.title}</p>
        <div className="flex justify-between">
          <p className="text-slate-700 font-bold">
            {data.totalTime?.hours == 0 ? "" : data.totalTime?.hours + "h"} {data.totalTime?.minutes}m
          </p>
          <p className="text-slate-700 font-bold">{getLevel(data.totalTime)}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
