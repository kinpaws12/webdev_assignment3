import type { Dispatch } from "redux";
import { AuthActionTypes } from "./Auth-actionTypes";
import { toast } from 'react-toastify';
import type { SignupValues, LoginValues, User, LoginSuccessPayload } from "~/features/auth/types/auth_types";
import * as authApi from '~/features/auth/services/authApi'
import type { ThunkAction } from 'redux-thunk';
import type { AppState } from "~/redux/store";

//Signup actions
interface SignupRequestAction {
  type: AuthActionTypes.SIGNUP_REQUEST;
  payload: {formData: SignupValues};
};

interface SignupSuccessAction {
  type: AuthActionTypes.SIGNUP_SUCCESS,
  payload: { user: User; token: string };
};

interface SignupFailureAction{
  type: AuthActionTypes.SIGNUP_FAILURE,
  payload: {error: string};
};

export type AuthActions =
  | SignupRequestAction
  | SignupSuccessAction
  | SignupFailureAction
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction
  | SyncLogoutAction;

export const signupUser = (
  formData: SignupValues
): ThunkAction<Promise<void>, AppState, unknown, AuthActions> => {
  return async (dispatch) => {
    dispatch({ type: AuthActionTypes.SIGNUP_REQUEST, payload: {formData} });
    try {
      const data = await authApi.signup(formData);
      dispatch({
        type: AuthActionTypes.SIGNUP_SUCCESS,
        payload: { user: data.user, token: data.token },
      });
      return data;
    } catch (err: any) {
      dispatch({
        type: AuthActionTypes.SIGNUP_FAILURE,
        payload: { error: err.message || 'Signup failed' },
      });
      throw err;
    }
  };
};

//Login actions
interface LoginRequestAction {
  type: AuthActionTypes.LOGIN_REQUEST,
  payload: {formData: LoginValues}
};

interface LoginSuccessAction {
  type: AuthActionTypes.LOGIN_SUCCESS,
  payload: { user: User, token: string }
};

interface LoginFailureAction {
  type: AuthActionTypes.LOGIN_FAILURE,
  payload: {error: string};
};


export const loginUser = (
  formData: LoginValues
): ThunkAction<Promise<LoginSuccessPayload>, AppState, unknown, AuthActions> => {
  return async (dispatch) => {
    dispatch({ 
      type: AuthActionTypes.LOGIN_REQUEST, 
      payload: {formData} 
    });
    try {
      const data = await authApi.login(formData);
      localStorage.setItem('token', data.token);
      dispatch({
        type: AuthActionTypes.LOGIN_SUCCESS,
        payload: { 
          user: data.user, 
          token: data.token
        },
      });
      return data;
    } catch (err: any) {
      dispatch({
        type: AuthActionTypes.LOGIN_FAILURE,
        payload: { error: err.message || 'Login failed' },
      });
      throw err;
    }
  };
};

//Logout
interface SyncLogoutAction {
  type: AuthActionTypes.LOGOUT
};

export const logoutUser = ():ThunkAction<void, AppState, unknown, AuthActions> => 
  (dispatch) => {
    localStorage.removeItem('token');
    dispatch({type: AuthActionTypes.LOGOUT});
}