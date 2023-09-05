import React, { useState } from "react";
import food from "../../assets/food.jpg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup, signin } from "../../redux/actions/auth";
import "react-toastify/dist/ReactToastify.css";
import { PiBowlFood } from "react-icons/pi";
import BrandLogo from "../Elements/BrandLogo";
import { notify } from "../../helpers/notify";
import * as Yup from "yup";
import { useFormik } from "formik";

const registerInitialValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const loginInitialValues = {
  email: "",
  password: "",
};

const Auth = () => {
  const [isRegistered, setIsRegistered] = useState(true);
  const dispatch = useDispatch(signup(formValues));
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: isRegistered ? loginInitialValues : registerInitialValues,
    // validationSchema: Yup.object({
    //   firstName: Yup.string()
    //     .max(15, "Must be 15 characters or less")
    //     .required("Required"),
    //   lastName: Yup.string()
    //     .max(20, "Must be 20 characters or less")
    //     .required("Required"),
    //   email: Yup.string().email("Invalid email address").required("Required"),
    // }),
    onSubmit: (values, actions) => {
      if (!isRegistered) {
        dispatch(signup(values, notify));
      } else {
        dispatch(signin(values, notify, navigate));
      }
      actions.resetForm();
    },
  });

  return (
    <>
      <div className="max-w-[1300px] mx-auto bg-white flex justify-center">
        <div className="flex mt-32 gap-x-8">
          <div className="fixed top-0 left-0 bottom-0 w-[50%]">
            <img className="h-full w-full object-cover" src={food} alt="" />
          </div>
          <div className="ml-[500px] w-[300px]">
            <BrandLogo logoSize={35} textSize={"text-2xl"} />
            <h2 className="text-xl font-bold text-slate-700 mb-3 mt-5">
              {isRegistered ? "Log in" : "Register"}
            </h2>
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-y-2"
              autoComplete="off"
            >
              {!isRegistered && (
                <>
                  <label>
                    <span className="font-semibold mb-2 text-slate-700">
                      Username
                    </span>
                    <input
                      placeholder="Username..."
                      className="px-3 py-1 w-full border-2 border-slate-300 outline-none rounded-sm"
                      type="text"
                      value={formik.values.username}
                      onChange={formik.handleChange}
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
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  autoComplete="off"
                />
              </label>
              <label>
                <span className="font-semibold mb-2 text-slate-700">
                  Password
                </span>
                <input
                  placeholder="Password..."
                  className="px-3 py-1 w-full border-2 border-slate-300 outline-none rounded-sm"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
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
                <p className="text-opacity-30">
                  {isRegistered
                    ? "Doesn't have an acount?"
                    : "Already have an account?"}
                </p>
                <span
                  className="font-semibold cursor-pointer text-[14px]"
                  onClick={() => setIsRegistered((prevState) => !prevState)}
                >
                  {isRegistered ? "Join now" : "Log in"}
                </span>
              </div>
              <button
                type="submit"
                className="bg-blue-600 p-2 rounded-sm text-slate-50 font-semibold"
              >
                {!isRegistered ? "Join Now" : "Log in"}
              </button>
            </form>
          </div>
        </div>
      </div>
      {isLoading && (
        <AuthLoader
          message={
            isRegistered
              ? "Logging in your account..."
              : "Creating your account..."
          }
        />
      )}
    </>
  );
};

export default Auth;
