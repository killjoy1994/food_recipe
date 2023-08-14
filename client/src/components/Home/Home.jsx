import React from "react";
import FoodPosts from "../FoodPosts/FoodPosts";
import RecipeForm from "../RecipeForm/RecipeForm";
import Sidebar from "../Sidebar/Sidebar";
import Categories from "../Categories/Categories";

const Home = () => {
  return (
    <div className="max-w-[1300px] gap-x-5 mx-auto w-full px-8 pt-5 bg-white">
      <Categories />
      <FoodPosts />
    </div>
  );
};

export default Home;
