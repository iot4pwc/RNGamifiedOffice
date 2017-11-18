import { LOGIN_ACTIONS } from '../constants/ActionTypes';

const initialState = {
	userName: ''
}

export const Login = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_ACTIONS.LOGIN: {
			return {
				...state,
				userName: action.userName
			}
		}
		default: {
			return {
				...state
			};
		}
	}
};
