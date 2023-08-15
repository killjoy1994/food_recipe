import React, { useState } from "react";
import LoginImage from "../../assets/login.jpg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup, signin } from "../../redux/actions/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const [isRegistered, setIsRegistered] = useState(false);
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
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="max-w-[1300px] mx-auto bg-white flex justify-center">
      <div className="flex mt-16 gap-x-8">
        <div className="w-[400px]">
          <img className="h-full w-full" src={LoginImage} alt="" />
        </div>
        <div className="w-[300px]">
          <h2 className="text-3xl font-semibold text-slate-700 text-center mb-5">{isRegistered ? "SIGN IN" : "SIGN UP"}</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-2" autoComplete="off">
            {!isRegistered && (
              <>
                <input
                  placeholder="Firstname..."
                  className="px-3 py-1 w-full border-2 border-slate-300 outline-none rounded-sm"
                  type="text"
                  value={formValues.firstname}
                  onChange={(e) => setFormValues({ ...formValues, firstname: e.target.value })}
                />
                <input
                  placeholder="Lastname..."
                  className="px-3 py-1 w-full border-2 border-slate-300 outline-none rounded-sm"
                  type="text"
                  value={formValues.lastname}
                  onChange={(e) => setFormValues({ ...formValues, lastname: e.target.value })}
                />
              </>
            )}
            <input
              placeholder="Email..."
              className="px-3 py-1 w-full border-2 border-slate-300 outline-none rounded-sm"
              type="text"
              value={formValues.email}
              onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
              autoComplete="off"
            />
            <input
              placeholder="Password..."
              className="px-3 py-1 w-full border-2 border-slate-300 outline-none rounded-sm"
              type="password"
              value={formValues.password}
              onChange={(e) => setFormValues({ ...formValues, password: e.target.value })}
              autoComplete="off"
            />
            {!isRegistered && (
              <input
                placeholder="Confirm Password..."
                className="px-3 py-1 w-full border-2 border-slate-300 outline-none rounded-sm"
                type="text"
                value={formValues.confirmPassword}
                onChange={(e) => setFormValues({ ...formValues, confirmPassword: e.target.value })}
              />
            )}
            <div className="flex gap-x-2 text-slate-700 items-center">
              <p className="text-opacity-30">{!isRegistered ? "Doenst have an acount?" : "Already have an account?"}</p>
              <span className="font-semibold cursor-pointer text-[14px]" onClick={() => setIsRegistered((prevState) => !prevState)}>
                {isRegistered ? "Sign up" : "Sign in"}
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
