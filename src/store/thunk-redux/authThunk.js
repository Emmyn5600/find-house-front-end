import axios from "axios";
import { apiFetchStart, signUpUserSuccess, signUpUserFail, signInUserSuccess, signInUserFail } from "../actions/actionCreators";
const endPoint = 'https://young-ravine-73545.herokuapp.com';

export const signupUserAsync = (user) => async (dispatch) => {
   dispatch(apiFetchStart())
   try {
       const response = await axios.post(`${endPoint}/users`, user);
       dispatch(signUpUserSuccess(response.data));
   } catch (error) {
       dispatch(signUpUserFail(error));
   }
}

export const loginUserAsync = (user) => async (dispatch) => {
    dispatch(apiFetchStart())
    try {
        const response = await axios.post(`${endPoint}/auth/login`, user);
        dispatch(signInUserSuccess(response.data));
    } catch (error) {
        dispatch(signInUserFail(error));
    }
}