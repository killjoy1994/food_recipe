import React, { useState } from "react";
import food from "../../assets/food.jpg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup, signin } from "../../redux/actions/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PiBowlFood } from "react-icons/pi";
import BrandLogo from "../Elements/BrandLogo";

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const [isRegistered, setIsRegistered] = useState(true);
  const [formValues, setFormValues] = useState(initialState);
  const dispatch = useDispatch(signup(formValues));
  const navigate = useNavigate();

  const notify = (status, message) => {
    if (status == "success") {
      toast.success(message);
    } else {
      toast.error(message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    if (!isRegistered) {
      dispatch(signup(formValues, notify));
    } else {
      dispatch(signin(formValues, notify, navigate));
    }
    setFormValues({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="max-w-[1300px] mx-auto bg-white flex justify-center">
      <div className="flex mt-20 gap-x-8">
        <div className="fixed top-0 left-0 bottom-0 w-[50%]">
          <img className="h-full w-full object-cover" src={food} alt="" />
        </div>
        <div className="ml-[500px] w-[300px]">
          <BrandLogo logoSize={35} textSize={"text-2xl"} />
          <h2 className="text-xl font-bold text-slate-700 mb-3 mt-5">{isRegistered ? "Log in" : "Register"}</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-2" autoComplete="off">
            {!isRegistered && (
              <>
                <label>
                  <span className="font-semibold mb-2 text-slate-700">Username</span>
                  <input
                    placeholder="Firstname..."
                    className="px-3 py-1 w-full border-2 border-slate-300 outline-none rounded-sm"
                    type="text"
                    value={formValues.username}
                    onChange={(e) => setFormValues({ ...formValues, username: e.target.value })}
                  />
                </label>
              </>
            )}
            <label>
              <span className="font-semibold mb-2 text-slate-700">Email</span>
              <input
                placeholder="Email..."
                className="px-3 py-1 w-full border-2 border-slate-300 outline-none rounded-sm"
                type="text"
                value={formValues.email}
                onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                autoComplete="off"
              />
            </label>
            <label>
              <span className="font-semibold mb-2 text-slate-700">Password</span>
              <input
                placeholder="Password..."
                className="px-3 py-1 w-full border-2 border-slate-300 outline-none rounded-sm"
                type="password"
                value={formValues.password}
                onChange={(e) => setFormValues({ ...formValues, password: e.target.value })}
                autoComplete="off"
              />
            </label>
            {/* {!isRegistered && (
              <label>
                <span className="font-semibold mb-2 text-slate-700">Confirm Password</span>
                <input
                  placeholder="Confirm Password..."
                  className="px-3 py-1 w-full border-2 border-slate-300 outline-none rounded-sm"
                  type="text"
                  value={formValues.confirmPassword}
                  onChange={(e) => setFormValues({ ...formValues, confirmPassword: e.target.value })}
                />
              </label>
            )} */}
            <div className="flex gap-x-2 text-slate-700 items-center mt-2">
              <p className="text-opacity-30">{!isRegistered ? "Doenst have an acount?" : "Already have an account?"}</p>
              <span className="font-semibold cursor-pointer text-[14px]" onClick={() => setIsRegistered((prevState) => !prevState)}>
                {!isRegistered ? "Join now" : "Log in"}
              </span>
            </div>
            <button type="submit" className="bg-blue-600 p-2 rounded-sm text-slate-50 font-semibold">
              {!isRegistered ? "Join Now" : "Log in"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
