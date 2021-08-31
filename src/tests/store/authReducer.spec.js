// import createStore from '../../store/createStore';

// const store = createStore();

// describe('Auth reducer', () => {
//   it('should return the initial state', () => {
//     expect(store.getState().auth).toEqual({
//       currentUser: null,
//       isAuthenticated: false,
//       loading: false,
//       error: null,
//     });
//   });
//   it('should handle API_FETCH_START', () => {
//     store.dispatch({ type: 'API_FETCH_START' });
//     expect(store.getState().auth).toEqual({
//       currentUser: null,
//       isAuthenticated: false,
//       loading: true,
//       error: null,
//     });
//   });
//   it('should handle SIGNUP_USER_SUCCESS', () => {
//     store.dispatch({
//       type: 'SIGNUP_USER_SUCCESS',
//       payload: { is_admin: false, name: 'user1' },
//     });
//     expect(store.getState().auth).toEqual({
//       currentUser: { is_admin: false, name: 'user1' },
//       isAuthenticated: true,
//       loading: false,
//       error: null,
//     });
//   });

//   it('should handle SIGNUP_USER_FAIL', () => {
//     store.dispatch({ type: 'SIGNUP_USER_FAIL', payload: 'Signup failed' });
//     expect(store.getState().auth).toEqual({
//       currentUser: null,
//       isAuthenticated: false,
//       loading: false,
//       error: 'Signup failed',
//     });
//   });

//   it('should not handle LOAD_HOUSES_SUCCESS', () => {
//     store.dispatch({ type: 'LOAD_HOUSES_SUCCESS' });
//     expect(store.getState().auth).toEqual({
//       currentUser: null,
//       isAuthenticated: false,
//       loading: false,
//       error: 'Signup failed',
//     });
//   });

//   it('should throw an error is trying to dispatch SIGNUP_USER_SUCCESS action without the payload', () => {
//     expect(() => {
//       store.dispatch({ type: 'SIGNUP_USER_SUCCESS' });
//     }).toThrow();
//   });

//   it('should throw an error is trying to dispatch SIGNIN_USER_SUCCESS action without the payload', () => {
//     expect(() => {
//       store.dispatch({ type: 'SIGNIN_USER_SUCCESS' });
//     }).toThrow();
//   });

//   it('should handle SIGNIN_USER_SUCCESS action', () => {
//     store.dispatch({
//       type: 'SIGNIN_USER_SUCCESS',
//       payload: { is_admin: false, name: 'user1' },
//     });
//     expect(store.getState().auth).toEqual({
//       currentUser: { is_admin: false, name: 'user1' },
//       isAuthenticated: true,
//       loading: false,
//       error: null,
//     });
//   });

//   it('should handle SIGNIN_USER_FAIL action', () => {
//     store.dispatch({ type: 'SIGNIN_USER_FAIL', payload: 'Login failed' });
//     expect(store.getState().auth).toEqual({
//       currentUser: null,
//       isAuthenticated: false,
//       loading: false,
//       error: 'Login failed',
//     });
//   });
// });