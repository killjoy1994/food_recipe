import React from "react";
import FoodPosts from "../FoodPosts/FoodPosts";
import CreateRecipe from "../CreateRecipe/CreateRecipe";
import Sidebar from "../Sidebar/Sidebar";
import Categories from "../Categories/Categories";
import { Link, NavLink, Outlet, Route, Routes } from "react-router-dom";

const Home = () => {
  // const route = useROute
  return (
    <div className="max-w-[1300px] gap-x-5 mx-auto w-full px-8 pt-5 bg-white">
      <ul className="mb-5 flex gap-x-3 items-center">
        <li className="text-xl font-semibold text-slate-700">
          <NavLink className={({ isActive }) => (isActive ? "text-slate-500" : "text-slate-700 hover:text-slate-500")} to="/recipes">
            RECIPES
          </NavLink>
        </li>
        <span className="block font-bold text-2xl text-slate-700">/</span>
        <li className="text-xl font-semibold  text-slate-700">
          <NavLink className={({ isActive }) => (isActive ? "text-slate-500" : "text-slate-700 hover:text-slate-500")} to="/categories">
            CATEGORIES
          </NavLink>
        </li>
      </ul>
      {/* <Categories /> */}
      <Outlet />
    </div>
  );
};

export default Home;
