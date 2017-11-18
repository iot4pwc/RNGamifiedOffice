import * as Login from './Login';
import * as Nav from './Nav';
import * as Profile from './Profile';
import * as Ranking from './Ranking';
import * as Status from './Status';
import * as Timeline from './Timeline';
import { combineReducers } from 'redux';

// TODO: populate reducer
export default combineReducers(Object.assign(
	Login,
	Nav,
	Profile,
	Ranking,
	Status,
	Timeline
));
