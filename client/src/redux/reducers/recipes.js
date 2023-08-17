import { CREATE_RECIPE, FETCH_RECIPES } from "../constants/constant";

const recipesReducer = (state = { recipes: [] }, action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      return { ...state, recipes: action.payload };
    case CREATE_RECIPE:
      return state;
    default:
      return state;
  }
};

export default recipesReducer;
