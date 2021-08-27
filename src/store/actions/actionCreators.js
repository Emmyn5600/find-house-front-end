import { API_FETCH_START, SIGNUP_USER_SUCESSFULLY, SIGNUP_USER_FAIL } from './actionTypes';

export const apiFetchStart = () => {
    type: API_FETCH_START
}

export const signUpUserSuccess = (user) => {
    type: SIGNUP_USER_SUCESSFULLY
    payload: user
}

export const signUpUserFail = (error) => {
    type: SIGNUP_USER_FAIL
    payload: error
}
