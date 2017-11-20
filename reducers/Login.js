import { LOGIN_ACTIONS } from '../constants/ActionTypes';

const initialState = {
	userName: '',
	challenges: []
}

export const Login = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_ACTIONS.LOGIN: {
			return {
				...state,
				userName: action.userName,
				challenges: action.challenges
			}
		}
		default: {
			return {
				...state
			};
		}
	}
};
