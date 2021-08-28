import {
  API_FETCH_START,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAIL,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_FAIL,
} from '../actions/actionTypes';

const initialstate = {
  loading: false,
  isAuthenticated: false,
  error: null,
  currentUser: null,
};

const auth = (state = initialstate, action) => {
  switch (action.type) {
    case API_FETCH_START:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case SIGNUP_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        error: null,
        loading: false,
        currentUser: action.payload,
      };

    case SIGNUP_USER_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: action.payload,
      };

    case SIGNIN_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        currentUser: action.payload,
      };

    case SIGNIN_USER_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default auth;
