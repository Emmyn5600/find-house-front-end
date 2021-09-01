import createStore from '../../store/createStore';

const store = createStore();

describe('rents reducer', () => {
  it('should return the initial state', () => {
    expect(store.getState().rents).toEqual({
      error: null,
      loading: false,
      list: [],
    });
  });
  it('should handle the AAPI_FETCH_START action', () => {
    store.dispatch({ type: 'API_FETCH_START' });
    expect(store.getState().rents.loading).toBe(true);
  });

  it('should handle the LOAD_RENTS_SUCCESS action', () => {
    store.dispatch({ type: 'LOAD_RENTS_SUCCESS' });
    expect(store.getState().rents.loading).toBe(false);
  });

  it('should handle the RENTS_ERROR action', () => {
    store.dispatch({ type: 'LOAD_RENTS_FAIL', payload: 'Error' });
    expect(store.getState().rents.error).toBe('Error');
  });
});
