import { PROFILE_ACTIONS } from '../constants/ActionTypes';

const initialState = {

}

export const Profile = (state = initialState, action) => {
	switch (action.type) {
		default: {
			return {
				...state
			};
		}
	}
};
