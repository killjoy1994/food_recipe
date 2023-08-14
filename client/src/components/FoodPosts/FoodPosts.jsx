import React from "react";
import Post from "./Post/Post";

const FoodPosts = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-5 items-center mx-auto w-full px-8 pt-4">
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
