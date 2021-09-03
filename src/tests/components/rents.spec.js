import { BrowserRouter, Route } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import createStore from '../../store/createStore';

import RentLists from '../../container/RentsList';

const store = createStore();

describe('RentsList', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <Route
              path="/"
              component={(props) => <RentLists history={props.history} />}
            />
          </Provider>
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
