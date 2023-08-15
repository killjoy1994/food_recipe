import React from "react";
import { PiBowlFood } from "react-icons/pi";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const user = false;

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="h-[80px] max-w-[1300px] mx-auto bg-white px-8 flex items-center justify-between">
      <div className="flex gap-x-8 items-center">
        <div className="flex items-center gap-x-4 cursor-pointer" onClick={handleClick}>
          <PiBowlFood size={50} color="gray" />
          <h1 className="text-4xl text-slate-700 font-bold">MASAK</h1>
        </div>
        <input
          className="w-[300px] h-10 border-2 border-solid border-slate-700 rounded-full pl-4 border-opacity-30"
          type="text"
          placeholder="Search recipe..."
        />
      </div>
      {!user && pathname != "/auth" && (
        <Link to="/auth" className="text-slate-700 rounded-sm text-xl font-semibold border-solid border-2 border-slate-950 border-opacity-50 px-5 py-2 hover:text-slate-50 hover:bg-slate-900">
          SIGN IN
        </Link>
      )}
      {user && (
        <div className="flex items-center gap-x-5">
          <div className="gap-x-2 items-center flex">
            <span className="h-5 w-5 bg-red-700 block rounded-full"></span>
            <h2>Bagus Nugroho</h2>
          </div>
          {/* <button className="text-slate-700 rounded-sm px-3 py-1 font-semibold">LOGOUT</button> */}
        </div>
      )}
    </div>
  );
};

export default Navbar;
