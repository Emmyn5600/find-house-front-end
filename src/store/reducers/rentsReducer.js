import {
  API_FETCH_START,
  ADD_TO_RENTS_SUCCESS,
  ADD_TO_RENTS_FAIL,
  LOAD_RENTS_SUCCESS,
  LOAD_RENTS_FAIL,
  REMOVE_TO_RENTS_SUCCESS,
  REMOVE_TO_RENTS_FAIL,
} from '../actions/actionTypes';

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

    case ADD_TO_RENTS_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false,
        error: null,
      };

    case REMOVE_TO_RENTS_SUCCESS:
      return {
        ...state,
        list: state.list.filter((rent) => rent.id !== action.payload.id),
        loading: false,
        error: null,
      };

    case REMOVE_TO_RENTS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case ADD_TO_RENTS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
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
