import axios from 'axios';
import { toast } from 'react-toastify';
import jwtDecode from 'jwt-decode';
import {
  apiFetchStart,
  signUpUserSuccess,
  signUpUserFail,
  signInUserSuccess,
  signInUserFail,
  logoutUserSuccess,
} from '../actions/actionCreators';

const endPoint = 'https://young-ravine-73545.herokuapp.com';

export const signupUserAsync = (user) => async (dispatch) => {
  dispatch(apiFetchStart());
  try {
    const response = await axios.post(`${endPoint}/users`, user);
    dispatch(signUpUserSuccess(response.data));
    toast.success('user signup succesffuly');
  } catch (error) {
    dispatch(signUpUserFail(error.response ? error.response.data.errors[0] : 'Something went wrong'));
    toast.error(error.response ? error.response.data.errors[0] : 'Something went wrong');
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
    toast.success('user login succesffuly');
  } catch (error) {
    dispatch(signInUserFail(error.response ? error.response.data.error : 'Something went wrong'));
    toast.error(error.response ? error.response.data.error : 'Something went wrong');
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('authToken');
  dispatch(logoutUserSuccess());
};
