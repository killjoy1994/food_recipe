import React from "react";
import FoodPosts from "../FoodPosts/FoodPosts";

const Home = () => {
  return (
    <div className="max-w-[1300px] mx-auto mt-4 rounded-md shadow-md bg-slate-50 flex">
        <div className="w-[400px] bg-red-400">
            <p>Form</p>
        </div>
      <FoodPosts />
    </div>
  );
};

export default Home;
