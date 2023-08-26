import * as api from "../../api/index";
import { CREATE_RECIPE, FETCH_RECIPE, FETCH_RECIPES, LOADING_END, LOADING_START } from "../constants/constant";

export const getRecipes = (page) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_START });
    const { data } = await api.getRecipes(page);
    dispatch({ type: LOADING_END });
    console.log(data.data);
    dispatch({ type: FETCH_RECIPES, payload: data.data });
  } catch (error) {
    console.log(error);
  }
};
export const getRecipe = (id) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_START });
    const { data } = await api.getRecipe(id);
    console.log(data);
    dispatch({ type: LOADING_END });
    dispatch({ type: FETCH_RECIPE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createRecipe = (formData, navigate, notify) => async (dispatch) => {
  console.log("FormData: ", formData)
  try {
    const res = await api.createRecipe(formData);

    dispatch({ type: CREATE_RECIPE, payload: res });
    notify("success", "Your recipe already created!");
    navigate("/");
  } catch (error) {
    notify("error", error.message);
    console.log(error);
  }
};
