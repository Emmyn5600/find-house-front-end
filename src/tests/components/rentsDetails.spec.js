import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import createStore from '../../store/createStore';
import HouseDetails from '../../container/HouseDetails';

const store = createStore();

describe('Home', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <Route
              path="/"
              component={(props) => (
                <HouseDetails
                  courses={[]}
                  history={props.history}
                  onIndexChange={() => {}}
                />
              )}
            />
          </Provider>
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
