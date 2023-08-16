import React from "react";
import CreateRecipe from "../CreateRecipe/CreateRecipe";

const Sidebar = () => {
  const submitHandler = () => {};
  return (
    <div className="w-[300px] min-h-[600px] py-8 px-6 bg-slate-50">
      <form onSubmit={submitHandler} className="flex flex-col gap-y-2">
        <input type="text" placeholder="Recipe..." className="shadow-sm p-2 border-2 border-solid outline-none rounded-sm" />
        <input type="text" placeholder="Categories..." className="shadow-sm p-2 border-2 border-solid outline-none rounded-sm" />
        <button className="py-1 bg-blue-600 text-slate-50 font-semibold mt-2 rounded-sm">Search</button>
      </form>
      {/* <CreateRecipe /> */}
    </div>
  );
};

export default Sidebar;
