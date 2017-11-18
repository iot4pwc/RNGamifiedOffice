import { PROFILE_ACTIONS } from '../constants/ActionTypes';
import { Profile } from '../constants/Common';
import { loadItems, setItem } from '../lib/AsyncRestorer';

const fetchProfile = () => {
	return (dispatch, getState) => {
		let profileP = loadItems(Profile);
		profileP.then(profile => {
			dispatch(updateProfile(profile));		
		})
	}
}

const updateAllProfile = (profile) => {
	return (dispatch, getState) => {
		Object.entries(profile).map(entry => {
			setItem(Profile[entry[0]], entry[1]);
		});
		dispatch(updateProfile(profile));
	}
}

const updateProfile = (profile) => {
	return {
		type: PROFILE_ACTIONS.UPDATE_PROFILE,
		profile
	}
}

export default {
	fetchProfile,
	updateAllProfile
}
