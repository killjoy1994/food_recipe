import { combineReducers } from "redux";
import { authReducer } from "./auth";
import recipesReducer from "./recipes";

export const rootReducer = combineReducers({
  auth: authReducer,
  recipes: recipesReducer
});
