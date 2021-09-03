import { combineReducers } from 'redux';
import auth from './auth';
import houses from './housesReducer';
import rents from './rentsReducer';

const reducer = combineReducers({ auth, houses, rents });

export default reducer;
