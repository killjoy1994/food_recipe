import { AUTH_LOADING_END, AUTH_LOADING_START, SIGNIN, SIGNOUT, SIGNUP } from "../constants/constant";

export const authReducer = (state = { authData: null, isLoading: false }, action) => {
  switch (action.type) {
    case AUTH_LOADING_START:
      return { ...state, isLoading: true };
    case AUTH_LOADING_END:
      return { ...state, isLoading: false };
    case SIGNUP:
      return state;
    case SIGNIN:
      localStorage.setItem("authData", JSON.stringify(action.payload));
      return { ...state, authData: action.payload };
    case SIGNOUT:
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};
