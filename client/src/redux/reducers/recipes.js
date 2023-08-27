import { CREATE_RECIPE, FETCH_RECIPE, FETCH_RECIPES, LOADING_END, LOADING_START } from "../constants/constant";

const recipesReducer = (state = { recipes: [], recipe: null }, action) => {
  switch (action.type) {
    case LOADING_START:
      return { ...state, isLoading: true };
    case LOADING_END:
      return { ...state, isLoading: false };
    case FETCH_RECIPES:
      return { ...state, recipes: action.payload.data, currentPage: action.payload.currentPage, totalPages: action.payload.pageTotal };
      E;
    case FETCH_RECIPE:
      return { ...state, recipe: action.payload };
    case CREATE_RECIPE:
      return state;
    default:
      return state;
  }
};

export default recipesReducer;
