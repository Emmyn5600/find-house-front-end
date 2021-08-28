import { combineReducers } from 'redux';
import auth from './auth';
import houses from './housesReducer';

const reducer = combineReducers({ auth, houses });

export default reducer;
