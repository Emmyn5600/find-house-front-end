import createStore from '../../store/createStore';

const store = createStore();

describe('sore', () => {
  it('should be an object', () => {
    expect(typeof store).toBe('object');
  });
  it('should have a dispatch method', () => {
    expect(typeof store.dispatch).toBe('function');
  });
  it('should have a subscribe method', () => {
    expect(typeof store.subscribe).toBe('function');
  });

  it('should have a getState method', () => {
    expect(typeof store.getState).toBe('function');
  });

  it('should have a replaceReducer method', () => {
    expect(typeof store.replaceReducer).toBe('function');
  });

  it('should throw an error when dispatching and empty action', () => {
    expect(() => {
      store.dispatch();
    }).toThrow();
  });

  it('should throw an error', () => {
    expect(() => {
      store.subscribe();
    }).toThrow();
  });
});
