import axios from 'axios';
import { apiFetchStart, loadRentsSuccess, loadRentsFail, removeToRentsSuccess, removeToRentsFail } from '../actions/actionCreators';

const endPoint = 'https://young-ravine-73545.herokuapp.com';

export const addToRentsAsync = (house) => async (dispatch) => {
    dispatch(apiFetchStart());
    try {
      const token = JSON.parse(localStorage.getItem('authToken'));
      const { user_id } = jwtDecode(token);
      const response = await axios.post(`${endPoint}/api/v1/rents`, {
        headers: {
          Authorization: token,
        },
        data: {
           user_id: user_id,
           house_id: house.id,
        }
      });
      dispatch(loadRentsSuccess(response.data.data));
    } catch (error) {
      dispatch(
        loadRentsFail(
          error.response ? error.response.data.errors[0] : 'Something went wrong',
        ),
      );
    }
  };

export const removeToRentsAsync = (rent) => (dispatch) => {
    dispatch(apiFetchStart());
    try {
        const token = JSON.parse(localStorage.getItem('authToken'));
        const response = await axios.delete(`${endPoint}/api/v1/rents/${rent.id}`, {
          headers: {
            Authorization: token,
          },
        });
        dispatch(removeToRentsSuccess(response.data.data));
      } catch (error) {
        dispatch(
          removeToRentsFail(
            error.response ? error.response.data.errors[0] : 'Something went wrong',
          ),
        );
      }
};
  

export const loadRentsAsync = () => async (dispatch) => {
  dispatch(apiFetchStart());
  try {
    const token = JSON.parse(localStorage.getItem('authToken'));
    const { user_id } = jwtDecode(token);
    const response = await axios.get(`${endPoint}/api/v1/rents/${user_id}`, {
      headers: {
        Authorization: token,
      },
    });
    dispatch(loadRentsSuccess(response.data.data));
  } catch (error) {
    dispatch(
      loadRentsFail(
        error.response ? error.response.data.errors[0] : 'Something went wrong',
      ),
    );
  }
};
