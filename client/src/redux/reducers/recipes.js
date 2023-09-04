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

const recipesReducer = (
  state = { recipes: [], dropdownCategories: [], recipe: null },
  action
) => {
  switch (action.type) {
    case LOADING_START:
      return { ...state, isLoading: true };
    case LOADING_END:
      return { ...state, isLoading: false };
    case FETCH_RECIPES:
      return {
        ...state,
        recipes: action.payload.data,
        currentPage: action.payload.currentPage,
        totalPages: action.payload.pageTotal,
      };
    case FETCH_RECIPES_BY_CATEGORY:
      return {
        ...state,
        recipes: action.payload.data,
        currentPage: action.payload.currentPage,
        totalPages: action.payload.pageTotal,
      };
    case FETCH_RECIPES_BY_SEARCH:
      return { ...state, recipes: action.payload };
    case FETCH_RECIPE:
      return { ...state, recipe: action.payload };
    case FETCH_DROPDOWN_CATEGORIES:
      return { ...state, dropdownCategories: action.payload };
    case CREATE_RECIPE:
      return state;
    default:
      return state;
  }
};

export default recipesReducer;
