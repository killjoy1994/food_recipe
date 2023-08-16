import React, { useEffect } from "react";
import { PiBowlFood } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signout } from "../../redux/actions/auth";
import { SIGNOUT } from "../../redux/constants/constant";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Profile from "../Elements/Profile";
import BrandLogo from "../Elements/BrandLogo";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("authData")));
  const dispatch = useDispatch();

  const showNavbar = pathname !== "/createRecipe" && pathname !== "/auth";

  const handleClick = () => {
    navigate("/");
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("authData")));
  }, [location]);

  return (
    showNavbar && (
      <div className="h-[80px] max-w-[1300px] mx-auto bg-white px-8 flex items-center justify-between">
        <div className="flex gap-x-8 items-center">
          <BrandLogo logoSize={40} textSize="4xl" onClick={handleClick} />
          <input
            className="w-[300px] h-10 border-2 border-solid border-slate-700 rounded-full pl-4 border-opacity-30"
            type="text"
            placeholder="Search recipe..."
          />
        </div>
        {!user && (
          <Link
            to="/auth"
            className="text-slate-700 rounded-sm text-lg font-semibold border-solid border-2 border-slate-950 border-opacity-50 px-4 py-1 hover:text-slate-50 hover:bg-slate-900"
          >
            SIGN IN
          </Link>
        )}
        {user && <Profile user={user} dispatch={dispatch} setUser={setUser} />}
      </div>
    )
  );
};

export default Navbar;
