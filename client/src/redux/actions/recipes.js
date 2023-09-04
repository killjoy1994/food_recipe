import * as api from "../../api/index";
import {
  CREATE_RECIPE,
  FETCH_DROPDOWN_CATEGORIES,
  FETCH_RECIPE,
  FETCH_RECIPES,
  FETCH_RECIPES_BY_CATEGORY,
  FETCH_RECIPES_BY_SEARCH,
  LOADING_END,
  LOADING_START,
} from "../constants/constant";

export const getRecipes = (page) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_START });
    const { data } = await api.getRecipes(page);
    dispatch({ type: LOADING_END });
    // console.log(data);
    dispatch({ type: FETCH_RECIPES, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getRecipesByCategory = (category, page) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_START });
    const { data } = await api.getRecipesByCategory(category, page);
    dispatch({ type: LOADING_END });
    console.log("data: ", data);
    dispatch({ type: FETCH_RECIPES_BY_CATEGORY, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getRecipesBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_START });
    const { data } = await api.getRecipesBySearch(searchQuery);
    console.log(data);
    dispatch({ type: FETCH_RECIPES_BY_SEARCH, payload: data.result });
    dispatch({ type: LOADING_END });
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

export const getDropdownCategories = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING_START });
    const { data } = await api.getDropdownCategories();
    console.log(data);
    dispatch({ type: FETCH_DROPDOWN_CATEGORIES, payload: data });
    dispatch({ type: LOADING_END });
  } catch (error) {
    console.log(error);
  }
};

export const createRecipe =
  (formData, navigate, notify) => async (dispatch) => {
    console.log("FormData: ", formData);
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
