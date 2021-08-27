import { API_FETCH_START, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAIL, SIGNIN_USER_SUCCESS, SIGNIN_USER_FAIL } from './actionTypes';

export const apiFetchStart = () => {
    type: API_FETCH_START
}

export const signUpUserSuccess = (user) => {
    type: SIGNUP_USER_SUCCESS
    payload: user
}

export const signUpUserFail = (error) => {
    type: SIGNUP_USER_FAIL
    payload: error
}

export const signInUserSuccess = (user) => {
    type: SIGNIN_USER_SUCCESS
    payload: user
}

export const signInUserFail = (user) => {
    type: SIGNUP_USER_FAIL
    payload: user
}
