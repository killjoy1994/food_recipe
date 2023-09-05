import React, { useEffect } from "react";
import { Link, NavLink, Outlet, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../redux/actions/recipes";
import HomeBg from "../../assets/homebackground.jpg"

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, []);

  return (
    <div className="gap-x-5 mx-auto w-full px-8 pt-5 h-screen flex justify-center items-center home-bg">
      {/* <div className="w-[600px] h-[250px]">
        <img className="w-full h-full object-cover" src={HomeBg} alt="home background" />
      </div> */}
    </div>
  );
};

export default Home;
