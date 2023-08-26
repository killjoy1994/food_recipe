import * as API from "../../api/index";
import { SIGNUP, LOADING_END, LOADING_START, SIGNIN, SIGNOUT } from "../constants/constant";

export const signup = (formData, notify) => {
  return async (dispatch) => {
    dispatch({ type: LOADING_START });
    try {
      await API.signup(formData);
      dispatch({ type: SIGNUP });
      dispatch({ type: LOADING_END });
      notify("success", "Account created, welcome!");
    } catch (error) {
      console.log(error);
      notify("fail", error.response.data.message);
    }
  };
};
export const signin = (formData, notify, navigate) => {
  return async (dispatch) => {
    dispatch({ type: LOADING_START });
    try {
      const response = await API.signin(formData);
      console.log(response);
      dispatch({ type: SIGNIN, payload: response.data });
      dispatch({ type: LOADING_END });
      notify("success", "Welcome back!");
      navigate("/");
    } catch (error) {
      console.log(error);
      // notify("fail", error.response.data.message);
    }
  };
};

export const signout = () => {
  return (dispatch) => {
    console.log("helloo");
    dispatch({ type: SIGNOUT });
  };
};
