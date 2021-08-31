import axios from 'axios';
import { toast } from 'react-toastify';
import jwtDecode from 'jwt-decode';
import {
  apiFetchStart,
  loadRentsSuccess,
  loadRentsFail,
  removeToRentsSuccess,
  removeToRentsFail,
  addToRentsSuccess,
} from '../actions/actionCreators';

const endPoint = 'https://young-ravine-73545.herokuapp.com';
const token = JSON.parse(localStorage.getItem('authToken'));
axios.defaults.headers.common.Authorization = token;

export const addToRentsAsync = (house) => async (dispatch) => {
  dispatch(apiFetchStart());
  try {
    const token = JSON.parse(localStorage.getItem('authToken'));
    axios.defaults.headers.common.Authorization = token;
    const { user_id: userId } = jwtDecode(token);
    const response = await axios.post(`${endPoint}/api/v1/rents/`, {
      user_id: userId,
      house_id: house.id,
    });
    dispatch(addToRentsSuccess(response.data));
    toast.success('Add To Rent succesffuly');
  } catch (error) {
    dispatch(
      loadRentsFail(
        error.response ? error.response.data.errors : 'Something went wrong',
      ),
    );
    toast.error(error.response ? error.response.data.errors : 'Something went wrong');
  }
};

export const removeToRentsAsync = (rentId) => async (dispatch) => {
  dispatch(apiFetchStart());
  try {
    const token = JSON.parse(localStorage.getItem('authToken'));
    const response = await axios.delete(`${endPoint}/api/v1/rents/${rentId}`, {
      headers: {
        Authorization: token,
      },
    });
    dispatch(removeToRentsSuccess(response.data.data));
    toast.success('Remove To Rent succesffuly');
  } catch (error) {
    dispatch(
      removeToRentsFail(
        error.response ? error.response.data.errors : 'Something went wrong',
      ),
    );
    toast.error(error.response ? error.response.data.errors : 'Something went wrong');
  }
};

export const loadRentsAsync = () => async (dispatch) => {
  dispatch(apiFetchStart());
  try {
    const token = JSON.parse(localStorage.getItem('authToken'));
    const { user_id: userId } = jwtDecode(token);
    const response = await axios.get(`${endPoint}/api/v1/rents/${userId}`, {
      headers: {
        Authorization: token,
      },
    });
    dispatch(loadRentsSuccess(response.data));
  } catch (error) {
    dispatch(
      loadRentsFail(
        error.response ? error.response.data.errors : 'Something went wrong',
      ),
    );
  }
};
