import React from "react";
import Category from "./Category/Category";

const Categories = () => {
  return (
    <div className="mb-20 mt-20">
      <h2 className="font-semibold text-slate-700 text-3xl mb-5 text-center">Categories</h2>
      <div className="min-h-20 flex justify-center gap-x-5 w-[800px] flex-wrap mx-auto">
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </div>
  );
};

export default Categories;
