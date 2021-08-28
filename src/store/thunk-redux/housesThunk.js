import axios from 'axios';
import { apiFetchStart, loadHousesSuccess, loadHousesFail } from '../actions/actionCreators';

const endPoint = 'https://young-ravine-73545.herokuapp.com';

export const loadHousesAsync = () => async (dispatch) => {
  dispatch(apiFetchStart());
  try {
    const response = await axios.get(`${endPoint}/api/v1/houses`, {
      headers: {
        Authorization: JSON.parse(localStorage.getItem('authToken')),
      },
    });
    dispatch(loadHousesSuccess(response.data.data));
  } catch (error) {
    dispatch(
      loadHousesFail(
        error.response ? error.response.data.errors[0] : 'Something went wrong',
      ),
    );
  }
};

export const loadfail = '';
