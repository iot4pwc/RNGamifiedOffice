import * as Login from './Login';
import * as Nav from './Nav';
import * as Profile from './Profile';
import * as Status from './Status';
import { combineReducers } from 'redux';

// TODO: populate reducer
export default combineReducers(Object.assign(
	Login,
	Nav,
	Profile,
	Status,
));
