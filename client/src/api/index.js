import axios from "axios";

const PROD_URL = "https://food-recipe-api-roan.vercel.app/";
const DEV_URL = "http://localhost:4000"
const API = axios.create({ baseURL: PROD_URL });

// middleware
API.interceptors.request.use((req) => {
  if (localStorage.getItem("authData")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("authData")).token
    }`;
  }
  return req;
});

// auth
export const signup = (formData) => API.post("/users/signup", formData);
export const signin = (formData) => API.post("/users/signin", formData);

//recipes
export const getRecipes = (page) => API.get(`/recipes?page=${page}`);
export const getRecipe = (id) => API.get(`/recipes/${id}`);
export const getRecipesByCategory = (category, page) =>
  API.get(`/recipes/categories/${category}?page=${page}`);
export const getRecipesBySearch = (searchQuery, page) =>
  API.get(`/recipes/search?searchQuery=${searchQuery}&page=${page}`);
export const getDropdownCategories = () =>
  API.get("/recipes/dropdownCategories");
export const createRecipe = (formData) => API.post("/recipes", formData);
