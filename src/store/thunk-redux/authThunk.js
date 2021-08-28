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
    dispatch(signUpUserSuccess(response.data));
  } catch (error) {
    dispatch(signUpUserFail(error));
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
