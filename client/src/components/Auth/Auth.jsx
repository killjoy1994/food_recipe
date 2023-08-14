import React, { useState } from "react";
import LoginImage from "../../assets/login.jpg";

const Auth = () => {
  const [isRegistered, setIsRegistered] = useState(true);

  return (
    <div className="max-w-[1300px] mx-auto bg-white flex justify-center">
      <div className="flex">
        <div className="w-[600px]">
          <img className="h-full w-full" src={LoginImage} alt="" />
        </div>
        <div className="mt-20 w-[300px]">
          <h2 className="text-3xl font-semibold text-slate-700 text-center mb-5">{!isRegistered ? "LOGIN" : "REGISTER"}</h2>
          <form action="" className="flex flex-col gap-y-2">
            {isRegistered && (
              <>
                <input
                  placeholder="Firstname..."
                  className="px-3 py-1 w-full border-2 border-slate-300 outline-none rounded-sm"
                  type="text"
                  value=""
                  onChange={() => {}}
                />
                <input
                  placeholder="Lastname..."
                  className="px-3 py-1 w-full border-2 border-slate-300 outline-none rounded-sm"
                  type="text"
                  value=""
                  onChange={() => {}}
                />
              </>
            )}
            <input
              placeholder="Email..."
              className="px-3 py-1 w-full border-2 border-slate-300 outline-none rounded-sm"
              type="text"
              value=""
              onChange={() => {}}
            />
            <input
              placeholder="Password..."
              className="px-3 py-1 w-full border-2 border-slate-300 outline-none rounded-sm"
              type="text"
              value=""
              onChange={() => {}}
            />
            {isRegistered && (
              <input
                placeholder="Confirm Password..."
                className="px-3 py-1 w-full border-2 border-slate-300 outline-none rounded-sm"
                type="text"
                value=""
                onChange={() => {}}
              />
            )}
            <div className="flex gap-x-2 text-slate-700">
              <p className="text-opacity-30">{isRegistered ? "Doenst have an acount?" : "Already have an account?"}</p>
              <span className="font-semibold cursor-pointer" onClick={() => setIsRegistered((prevState) => !prevState)}>
                {!isRegistered ? "Register" : "Login"}
              </span>
            </div>
            <button type="submit" className="bg-blue-600 p-1 rounded-sm text-slate-50 font-semibold">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
