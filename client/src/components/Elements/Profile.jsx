import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

import { Link } from "react-router-dom";

const Profile = ({ user, dispatch, setUser, handleLogout }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className="flex items-center gap-x-5 relative">
        {/* Backdrop */}
        {/* <div className="fixed inset-0 -z-10" onClick={() => setShowPopup(false)}></div> */}
        {/* Backdrop */}
        <div className="gap-x-2 items-center flex cursor-pointer z-20" onClick={() => setShowPopup((prevState) => !prevState)}>
          <span className="h-5 w-5 bg-red-700 block rounded-full"></span>
          <h2 className="text-xl font-semibold text-slate-700">{user?.result?.username}</h2>
          <div className="cursor-pointer">
            <BsThreeDotsVertical color="grey" />
          </div>
        </div>
        {showPopup && (
          <div className="absolute right-2 z-20 h-20 w-40 top-8 flex flex-col px-3 py-1 shadow-lg">
            <Link
              onClick={() => setShowPopup(false)}
              className="text-slate-700 rounded-sm font-medium text-[14px] hover:text-opacity-80 text-start cursor-pointer"
              to="/createRecipe"
            >
              Add Recipe
            </Link>
            <span
              onClick={() => {
                console.log("test");
                setShowPopup(false);
              }}
              className="text-slate-700 hover:text-opacity-80 rounded-sm font-medium text-[14px] text-start cursor-pointer"
            >
              Bookmark
            </span>
            <span
              onClick={handleLogout}
              className="text-slate-700 hover:text-opacity-80 rounded-sm font-medium text-[14px] text-start cursor-pointer"
            >
              Logout
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
