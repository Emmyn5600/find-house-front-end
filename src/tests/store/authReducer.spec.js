import createStore from '../../store/createStore';

const store = createStore();

describe('Auth reducer', () => {
  it('should return the initial state', () => {
    expect(store.getState().auth).toEqual({
      currentUser: null,
      isAuthenticated: false,
      loading: false,
      error: null,
    });
  });
  it('should handle AUTH_API_FECT_START', () => {
    store.dispatch({ type: 'API_FETCH_START' });
    expect(store.getState().auth).toEqual({
      currentUser: null,
      isAuthenticated: false,
      loading: true,
      error: null,
    });
  });
  it('should handle SIGNUP_SUCCESS', () => {
    store.dispatch({
      type: 'SIGNUP_USER_SUCCESS',
      payload: { name: 'user1' },
    });
    expect(store.getState().auth).toEqual({
      currentUser: { name: 'user1' },
      isAuthenticated: false,
      loading: false,
      error: null,
    });
  });

  it('should handle SIGNUP_FAILURE', () => {
    store.dispatch({ type: 'SIGNUP_USER_FAIL', payload: 'Signup failed' });
    expect(store.getState().auth).toEqual({
      currentUser: { name: 'user1' },
      isAuthenticated: false,
      loading: false,
      error: 'Signup failed',
    });
  });

  it('should not handle LOAD_COURSES_SUCCESS', () => {
    store.dispatch({ type: 'LOAD_HOUSES_SUCCESS' });
    expect(store.getState().auth).toEqual({
      currentUser: { name: 'user1' },
      isAuthenticated: false,
      loading: false,
      error: 'Signup failed',
    });
  });

  it('should handle SIGNIN_SUCCESS action', () => {
    store.dispatch({
      type: 'SIGNIN_USER_SUCCESS',
      payload: { name: 'user1' },
    });
    expect(store.getState().auth).toEqual({
      currentUser: { name: 'user1' },
      isAuthenticated: true,
      loading: false,
      error: 'Signup failed',
    });
  });

  it('should handle SIGNIN_FAILURE action', () => {
    store.dispatch({ type: 'SIGNIN_USER_FAIL', payload: 'SIGNIN failed' });
    expect(store.getState().auth).toEqual({
      currentUser: { name: 'user1' },
      isAuthenticated: false,
      loading: false,
      error: 'SIGNIN failed',
    });
  });
});
