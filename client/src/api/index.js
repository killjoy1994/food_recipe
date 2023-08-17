import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });

// middleware
API.interceptors.request.use((req) => {
  if (localStorage.getItem("authData")) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("authData")).token}`;
  }
  return req;
});

// auth
export const signup = (formData) => API.post("/users/signup", formData);
export const signin = (formData) => API.post("/users/signin", formData);

//recipes
export const getRecipes = () => API.get("/recipes");
export const getRecipe = (id) => API.get(`/recipes/${id}`);
export const createRecipe = (formData) => API.post("/recipes", formData);
