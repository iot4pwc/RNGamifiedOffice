import { PROFILE_ACTIONS } from '../constants/ActionTypes';
import ProfileHolder from '../constants/ProfileHolder';

const initialState = {
	age: '',
	alias: '',
	email: '',
	name: '',
	profileImage: ProfileHolder
}

export const Profile = (state = initialState, action) => {
	switch (action.type) {
		case PROFILE_ACTIONS.UPDATE_PROFILE: {
            if (action.profile.profileImage === null) {
                action.profile.profileImage = ProfileHolder;
            }

			return {
				...state,
				...action.profile
			}
		}
		default: {
			return {
				...state
			};
		}
	}
};
