import Auth from "./components/Auth/Auth";
import Categories from "./components/Categories/Categories";
import FoodPosts from "./components/FoodPosts/FoodPosts";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home(still progress)/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateRecipe from "./components/CreateRecipe/CreateRecipe";
import Recipes from "./components/Recipes/Recipes";
import RecipeDetail from "./components/RecipeDetail/RecipeDetail";
import Loader from "./components/Loader/Loader";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <Routes>
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/" element={<Recipes />}>
          <Route path="" element={<Navigate to="recipes" />} />
          <Route path="/recipes" element={<FoodPosts />} />
          <Route path="/recipes/search" element={<FoodPosts />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:category" element={<FoodPosts />} />
        </Route>
        <Route path="/createRecipe" element={<CreateRecipe />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<div>404 NOT FOUND</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
