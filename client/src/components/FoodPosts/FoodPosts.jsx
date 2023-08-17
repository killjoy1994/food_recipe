import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";

const FoodPosts = () => {
  const { recipes } = useSelector((state) => state.recipes);
  console.log("Recipes: ", recipes);
  return (
    <div className="w-full grid h-[min-content] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-y-8 gap-x-6 mx-auto ">
      {recipes.map((recipe) => (
        <Post key={recipe._id} data={recipe} />
      ))}
    </div>
  );
};

export default FoodPosts;
