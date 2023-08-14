import React from "react";
import Post from "./Post/Post";

const FoodPosts = () => {
  return (
    <div className="w-full grid h-[min-content] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-y-8 gap-x-6 mx-auto ">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default FoodPosts;
