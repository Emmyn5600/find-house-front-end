import {
  API_FETCH_START,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAIL,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_FAIL,
  LOAD_HOUSES_SUCCESS,
  LOAD_HOUSES_FAIL,
  ADD_TO_RENTS_SUCCESS,
  REMOVE_TO_RENTS_SUCCESS,
  ADD_TO_RENTS_FAIL,
  LOAD_RENTS_SUCCESS,
  LOAD_RENTS_FAIL,
  REMOVE_TO_RENTS_FAIL,
  LOGOUT_USER_SUCCESS,
} from './actionTypes';

export const apiFetchStart = () => ({
  type: API_FETCH_START,
});

export const signUpUserSuccess = (user) => ({
  type: SIGNUP_USER_SUCCESS,
  payload: user,
});

export const signUpUserFail = (error) => ({
  type: SIGNUP_USER_FAIL,
  payload: error,
});

export const signInUserSuccess = (user) => ({
  type: SIGNIN_USER_SUCCESS,
  payload: user,
});

export const signInUserFail = (user) => ({
  type: SIGNIN_USER_FAIL,
  payload: user,
});

export const loadHousesSuccess = (houses) => ({
  type: LOAD_HOUSES_SUCCESS,
  payload: houses,
});

export const loadHousesFail = (error) => ({
  type: LOAD_HOUSES_FAIL,
  payload: error,
});

export const addToRentsSuccess = (house) => ({
  type: ADD_TO_RENTS_SUCCESS,
  payload: house,
});

export const removeToRentsSuccess = (house) => ({
  type: REMOVE_TO_RENTS_SUCCESS,
  payload: house,
});

export const removeToRentsFail = (error) => ({
  type: REMOVE_TO_RENTS_FAIL,
  payload: error,
});

export const addToRentsFail = (error) => ({
  type: ADD_TO_RENTS_FAIL,
  payload: error,
});

export const loadRentsSuccess = (rents) => ({
  type: LOAD_RENTS_SUCCESS,
  payload: rents,
});

export const loadRentsFail = (error) => ({
  type: LOAD_RENTS_FAIL,
  payload: error,
});

export const logoutUserSuccess = () => ({
  type: LOGOUT_USER_SUCCESS,
});
