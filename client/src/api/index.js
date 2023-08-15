import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });

// middleware

// auth
export const signup = (formData) => API.post("/users/signup", formData);
export const signin = (formData) => API.post("/users/signin", formData);
