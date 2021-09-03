import createStore from '../../store/createStore';

const store = createStore();

describe('House reducer', () => {
  it('should return the initial state', () => {
    expect(store.getState().houses).toEqual({
      error: null,
      list: [],
      loading: false,
    });
  });

  it('should handle the LOAD_HOUSES_SUCCESS action', () => {
    const houses = [
      {
        id: 1,
        name: 'Test house',
        description: 'Test description',
        image: 'testImage.png',
        createdAt: '2020-01-01T00:00:00.000Z',
        updatedAt: '2020-01-01T00:00:00.000Z',
      },
    ];

    const action = {
      type: 'LOAD_HOUSES_SUCCESS',
      payload: houses,
    };

    store.dispatch(action);

    expect(store.getState().houses.list).toEqual(houses);
  });

  it('should handle the LOAD_HOUSES_FAILURE action', () => {
    const error = 'Error';

    const action = {
      type: 'LOAD_HOUSES_FAIL',
      payload: error,
    };

    store.dispatch(action);
    expect(store.getState().houses.error).toEqual(error);
  });

  it('should throw an error when dispatching invalid action', () => {
    expect(() => {
      store.dispatch({ name: 'INVALID_ACTTION' });
    }).toThrow(
      'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.',
    );
  });
});
