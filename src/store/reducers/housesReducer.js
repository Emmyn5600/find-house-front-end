import { API_FETCH_START, LOAD_HOUSES_SUCCESS, LOAD_HOUSES_FAIL } from '../actions/actionTypes';

const initialstate = {
  loading: false,
  list: [],
  error: null,
};

const houses = (state = initialstate, action) => {
  switch (action.type) {
    case API_FETCH_START:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case LOAD_HOUSES_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false,
        error: null,
      };

    case LOAD_HOUSES_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default houses;
