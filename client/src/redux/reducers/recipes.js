import { CREATE_RECIPE, FETCH_RECIPE, FETCH_RECIPES } from "../constants/constant";

const recipesReducer = (state = { recipes: [], recipe: null }, action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      return { ...state, recipes: action.payload };
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
