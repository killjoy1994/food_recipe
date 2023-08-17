import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";

const FoodPosts = () => {
  const { recipes, isLoading } = useSelector((state) => state.recipes);
  console.log("Recipes: ", isLoading);
  return isLoading ? (
    <Loader />
  ) : (
    <div className="w-full grid h-[min-content] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-y-8 gap-x-6 mx-auto ">
      {recipes.map((recipe) => (
        <Post key={recipe._id} data={recipe} />
      ))}
    </div>
  );
};

export default FoodPosts;
