import { combineReducers } from 'redux';

import authReducer from './authReducer';
import listPayReducer from './listPayReducer';

const reducers = combineReducers({
	auth: authReducer,
	listPay: listPayReducer,
});

export default reducers;
