import React, { useEffect, useState } from "react";
import Post from "./Post/Post";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import ReactPaginate from "react-paginate"
import { getRecipes } from "../../redux/actions/recipes";
import { useLocation, useNavigate } from "react-router-dom";

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

const FoodPosts = () => {
  const { recipes, isLoading } = useSelector((state) => state.recipes);
  const dispatch = useDispatch();
  const query = useQuery()
  const page = query.get("page") || 1
  const navigate = useNavigate()

  console.log(page)

  useEffect(() => {
    dispatch(getRecipes(page));
  }, [page]);
  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <div className="w-full grid h-[min-content] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-y-8 gap-x-6 mx-auto ">
        {recipes.map((recipe) => (
          <Post key={recipe._id} data={recipe} />
        ))}
      </div>
      <ReactPaginate
        className="flex justify-center gap-x-2 my-10 items-center border-slate-800"
        pageClassName="flex items-center justify-center text-xl text-slate-700 border-2 rounded-full h-10 w-10 border-slate-500 border-opacity-40"
        previousClassName="flex items-center justify-center text-xl text-slate-700 border-2 rounded-full h-10 w-10 border-slate-500 border-opacity-40"
        nextClassName="flex items-center justify-center text-xl text-slate-700 border-2 rounded-full h-10 w-10 border-slate-500 border-opacity-40"
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => { navigate(`/recipes?page=${e.selected + 1}`) }}
        onClick={(e) => { console.log(e) }}
        pageRangeDisplayed={5}
        pageCount={6}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default FoodPosts;
