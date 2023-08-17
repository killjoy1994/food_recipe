import * as api from "../../api/index";
import { CREATE_RECIPE, FETCH_RECIPE, FETCH_RECIPES } from "../constants/constant";

export const getRecipes = () => async (dispatch) => {
  try {
    const { data } = await api.getRecipes();
    console.log(data);
    dispatch({ type: FETCH_RECIPES, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const getRecipe = (id) => async (dispatch) => {
  try {
    const { data } = await api.getRecipe(id);
    console.log(data);
    dispatch({ type: FETCH_RECIPE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createRecipe = (formData, navigate, notify) => async (dispatch) => {
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
