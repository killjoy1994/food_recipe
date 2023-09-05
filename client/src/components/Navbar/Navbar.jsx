import React, { useEffect } from "react";
import { PiBowlFood } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Profile from "../Elements/Profile";
import BrandLogo from "../Elements/BrandLogo";
import { SIGNOUT } from "../../redux/constants/constant";
import { getRecipesBySearch } from "../../redux/actions/recipes";

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("authData")));
  const [inputValue, setInputValue] = useState("")
  const dispatch = useDispatch();
  const query = useQuery();
  const page = query.get("page")

  const showNavbar = pathname !== "/createRecipe" && pathname !== "/auth"

  const handleClick = () => {
    navigate("/");
  };

  const handleLogout = () => {
    console.log("test");
    dispatch({ type: SIGNOUT });
    setUser(null);
  }

  const handleSearchInput = (e) => {
    setInputValue(e.target.value)
  }

  const searchRecipes = () => {
    if (inputValue.trim()) {
      dispatch(getRecipesBySearch(inputValue, page || 1))
      navigate(`/recipes/search?searchQuery=${inputValue}&page=${page || 1}`)
    } else {
      // if(location.search) {
      //   dispatch(getRecipesBySearch(loca))
      // }
      navigate("/")
    }
  }

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      // console.log(e)
      searchRecipes()
      // setInputValue("")
    }
  }

  const handleClickSearch = () => {
    searchRecipes()
    // setInputValue("")
  }

  // console.log(location)

  useEffect(() => {

    // if (location.search) {
    //   searchRecipes()
    // }

    // const token = JSON.parse(localStorage.getItem("authData"))?.token
    const token = user?.token

    if (token) {
      const decoded = jwt_decode(token)
      // console.log(decoded)
      if (decoded.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    setUser(JSON.parse(localStorage.getItem("authData")));
  }, [location]);

  // useEffect(() => {
  //   searchRecipes()
  // }, [])

  return (
    showNavbar && (
      <div className="h-[80px] max-w-[1300px] mx-auto bg-white px-8 flex items-center justify-between">
        <div className="flex gap-x-8 items-center">
          <BrandLogo logoSize={40} textSize="4xl" onClick={handleClick} />
          <div className="flex items-center">
            <input
              className="w-[300px] h-10 border-2 border-solid border-slate-700 rounded-l-full pl-4 border-opacity-30"
              type="text"
              placeholder="Search recipe..."
              onKeyDown={handleSearch}
              onChange={handleSearchInput}
              value={inputValue}
            />
            <button onClick={handleClickSearch} className="border-2 border-solid border-slate-700 border-opacity-30 py-1 pr-4 pl-2 rounded-r-full border-l-0 bg-slate-500 bg-opacity-10">
              <AiOutlineSearch size={30} color="grey" />
            </button>
          </div>
        </div>
        {!user && (
          <Link
            to="/auth"
            className="text-slate-700 rounded-sm text-lg font-semibold border-solid border-2 border-slate-950 border-opacity-50 px-4 py-1 hover:text-slate-50 hover:bg-slate-900"
          >
            SIGN IN
          </Link>
        )}
        {user && <Profile user={user} dispatch={dispatch} setUser={setUser} handleLogout={handleLogout} />}
      </div>
    )
  );
};

export default Navbar;
