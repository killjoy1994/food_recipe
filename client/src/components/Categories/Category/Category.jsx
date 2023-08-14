import React from "react";
import Dessert from "../../../assets/dessert.jpg"

const Category = () => {
  return (
    <div className="mt-8">
      <div className="h-20 w-20 rounded-full overflow-hidden">
        <img className="h-full w-full object-cover" src={Dessert} alt="dessert" />
      </div>
      <p className="text-slate-700 font-medium text-center">Dessert</p>
    </div>
  );
};

export default Category;
