import { API_FETCH_START, LOAD_RENTS_SUCCESS, LOAD_RENTS_FAIL } from '../actions/actionTypes';

const initialstate = {
  loading: false,
  list: [],
  error: null,
};

const rents = (state = initialstate, action) => {
  switch (action.type) {
    case API_FETCH_START:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case LOAD_RENTS_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false,
        error: null,
      };

    case LOAD_RENTS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default rents;