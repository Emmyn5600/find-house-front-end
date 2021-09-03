import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import createStore from '../../store/createStore';
import Home from '../../container/Home';

const store = createStore();

describe('Home', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <Route path="/" component={Home} />
          </Provider>
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should not render an unknown link', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Route path="/" component={Home} />
        </Provider>
      </BrowserRouter>,
    );
    expect(() => screen.getByText(/cool/i)).toThrow();
  });

  it('should throw an error if looking for an unexisting element', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Route path="/" component={Home} />
        </Provider>
      </BrowserRouter>,
    );
    expect(() => screen.getByText(/soft/i)).toThrow();
  });

  it('should not render an unknown link', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Route path="/" component={Home} />
        </Provider>
      </BrowserRouter>,
    );
    expect(() => screen.getByText(/cool/i)).toThrow();
  });
});
