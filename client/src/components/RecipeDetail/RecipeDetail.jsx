import React, { useEffect } from "react";
import Desser from "../../assets/dessert.jpg";
import { PiCookingPotBold } from "react-icons/pi";
import { BsClock } from "react-icons/bs";
import { BiCategoryAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRecipe } from "../../redux/actions/recipes";
import { getDate } from "../../helpers/getDate";
import Loader from "../Loader/Loader";

const RecipeDetail = () => {
  const { recipe, isLoading } = useSelector((state) => state.recipes);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getRecipe(id));
  }, []);

  console.log("RESEP: ", recipe);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="min-h-screen max-w-[1300px] mx-auto px-8 mb-20">
      {/* <div className="max-w-[400px] h-40">
     <img src={Desser} alt="" />
   </div> */}
      <div className="mt-10 pb-1">
        <h2 className="text-4xl text-slate-700 font-semibold mb-1">{recipe?.result?.title}</h2>
        <p className="text-[14px] text-slate-700">
          <strong className="font-semibold">Published</strong> On {getDate(recipe?.result?.createdAt)}. <strong className="font-semibold">By</strong>{" "}
          {recipe?.result?.author}
        </p>
      </div>
      <div className="border-y-2 h-16 my-2 border-slate-900 border-opacity-30 flex items-center pl-4">
        <ul className="flex gap-x-8">
          <li className="flex items-center gap-x-2">
            <PiCookingPotBold size={30} color="grey" />
            <div className="flex flex-col">
              <p className="text-slate-700 font-normal text-[14px]">Prep time</p>
              <p className="text-slate-500 italic text-[12px]">
                {recipe?.result?.preparationTime.count} {recipe?.result?.preparationTime.measure}
              </p>
            </div>
          </li>
          <li className="flex items-center gap-x-2">
            <BsClock size={30} color="grey" />
            <div className="flex flex-col">
              <p className="text-slate-700 font-normal text-[14px]">Cook time</p>
              <p className="text-slate-500 italic text-[12px]">
                {recipe?.result?.cookTime.count} {recipe?.result?.cookTime.measure}
              </p>
            </div>
          </li>
          <li className="flex items-center gap-x-2">
            <BiCategoryAlt size={30} color="grey" />
            <div className="flex flex-col">
              <p className="text-slate-700 font-normal text-[14px]">Category</p>
              <p className="text-slate-500 italic text-[12px]">{recipe?.result?.category}</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="mt-10 flex flex-row-reverse justify-between">
        <div className="w-5/12 h-80 rounded-md overflow-hidden shadow-md">
          <img className="w-full h-full object-cover object-center" src={recipe?.result?.selectedFile} alt="" />
        </div>
        <div className="mr-10 w-7/12">
          <h3 className="text-slate-700 text-[18px] font-semibold">{recipe?.result?.title}</h3>
          <p className="text-slate-600">{recipe?.result?.description}</p>
          <div className="my-3">
            <h4 className="text-slate-700 text-[16px] font-semibold mb-2">Ingredients</h4>
            <ul>
              {recipe?.result?.ingredients?.map((data) => (
                <li key={data._id} className="text-slate-600 text-[14px] mb-1">
                  {data.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="my-3">
            <h4 className="text-slate-700 text-[16px] font-semibold mb-2">Directions</h4>
            <ul>
              {recipe?.result?.steps?.map((data, idx) => (
                <li key={data._id} className="text-slate-600 text-[14px] mb-1 flex items-center">
                  <strong className="text-xl mr-3">{++idx}</strong>
                  <p>{data.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
