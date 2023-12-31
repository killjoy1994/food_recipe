import React, { useEffect, useState } from "react";
import Post from "./Post/Post";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import ReactPaginate from "react-paginate"
import { getRecipes, getRecipesByCategory, getRecipesBySearch } from "../../redux/actions/recipes";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

const FoodPosts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const query = useQuery()
  const { recipes, currentPage, totalPages, isLoading } = useSelector((state) => state.recipes);
  const page = query.get("page");
  // const [currPag, setCurrPage] = useState(page)
  const params = useParams();
  const searchQuery = query.get("searchQuery")

  console.log(searchQuery)

  useEffect(() => {
    if (params.category) {
      dispatch(getRecipesByCategory(params.category, page || 1))
    } else if (searchQuery) {
      dispatch(getRecipesBySearch(searchQuery, page || 1))
    } else {
      dispatch(getRecipes(page || 1));
    }
    // navigate(`/recipes?page=${currPag}`)
  }, [page]);

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      {/* <div className="w-full grid h-[min-content] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-y-8 gap-x-6 mx-auto ">
        {recipes.map((recipe) => (
          <Post key={recipe._id} data={recipe} />
        ))}
      </div> */}

      {(params.category && (recipes.length === 0)) ?
        <h1 className="flex justify-center items-center min-h-[400px] text-3xl font-semibold text-slate-700">Maaf belum tersedia resep di kategori ini.</h1> : (searchQuery && recipes.length === 0 ? <h1 className="flex justify-center items-center min-h-[400px] text-3xl font-semibold text-slate-700">Resep "{searchQuery}" tidak tersedia dalam pencarian.</h1> : <div className="w-full grid h-[min-content] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-y-8 gap-x-6 mx-auto ">
          {recipes.map((recipe) => (
            <Post key={recipe._id} data={recipe} />
          ))}
        </div>)}
      {!(recipes.length === 0) && <ReactPaginate
        className="flex justify-center gap-x-2 my-10 items-center border-slate-800 "
        pageClassName="flex overflow-hidden items-center justify-center text-xl text-slate-700 border-2 rounded-full h-10 w-10 border-slate-900 border-opacity-50"
        previousClassName="flex items-center justify-center text-xl text-slate-700 border-2 rounded-full h-10 w-10 border-slate-900 border-opacity-50"
        nextClassName="flex items-center justify-center text-xl text-slate-700 border-2 rounded-full h-10 w-10 border-slate-900 border-opacity-50"
        breakLabel="..."
        activeLinkClassName="bg-orange-500 text-white border-0"
        pageLinkClassName="w-full h-full flex items-center justify-center"
        nextLabel=">"
        onPageChange={(e) => {
          // console.log(e)
          if (params.category) {
            navigate(`/categories/${params.category}?page=${e.selected + 1}`)
          } else {
            navigate(`/recipes?page=${e.selected + 1}`)
          }
        }}
        onClick={e => console.log(e)}
        pageRangeDisplayed={2}
        pageCount={totalPages}
        previousLabel="<"
        renderOnZeroPageCount={null}
        forcePage={currentPage - 1}
      />}
    </div>
  );
};

export default FoodPosts;
