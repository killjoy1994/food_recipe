import React from "react";
import Dessert from "../../../assets/dessert.jpg"
import { Link } from "react-router-dom";

const Category = ({ data }) => {
  return (
    <Link to={`/categories/${data.name}`}>
      <div className="flex flex-col h-[300px]">
        <div className="h-[80%]  overflow-hidden">
          <img className="h-full w-full object-cover hover:brightness-75 transition" src={data.imgPath} alt="dessert" />
        </div>
        <p className="text-slate-700 text-xl font-semibold text-center mt-2">{data.name}</p>
      </div>
    </Link>
  );
};

export default Category;
