import axios from 'axios';
import jwtDecode from 'jwt-decode';
import {
  apiFetchStart,
  signUpUserSuccess,
  signUpUserFail,
  signInUserSuccess,
  signInUserFail,
} from '../actions/actionCreators';

const endPoint = 'https://young-ravine-73545.herokuapp.com';

export const signupUserAsync = (user) => async (dispatch) => {
  dispatch(apiFetchStart());
  try {
    const response = await axios.post(`${endPoint}/users`, user);
    console.log(response);
    dispatch(signUpUserSuccess(response.data));
    // localStorage.setItem('registerUser', JSON.stringify())
  } catch (error) {
    console.log(error.response);
    dispatch(signUpUserFail(error.response ? error.response.data.errors[0] : 'Something went wrong'));
  }
};

export const loginUserAsync = (user) => async (dispatch) => {
  dispatch(apiFetchStart());
  try {
    const response = await axios.post(`${endPoint}/auth/login`, user);
    const { token } = response.data;
    const data = jwtDecode(token);
    dispatch(signInUserSuccess(data));
    localStorage.setItem('authToken', JSON.stringify(token));
  } catch (error) {
    dispatch(signInUserFail(error.response ? error.response.data.error : 'Something went wrong'));
  }
};
