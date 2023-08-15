import Auth from "./components/Auth/Auth";
import Categories from "./components/Categories/Categories";
import FoodPosts from "./components/FoodPosts/FoodPosts";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Navigate to="recipes" />} />
          <Route path="/recipes" element={<FoodPosts />} />
          <Route path="/categories" element={<Categories />} />
        </Route>
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<div>ERROR</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
