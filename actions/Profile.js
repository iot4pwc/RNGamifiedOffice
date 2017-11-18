import { PROFILE_ACTIONS } from '../constants/ActionTypes';
import { Profile } from '../constants/Common';
import { loadItems, setItem } from '../lib/AsyncRestorer';
import { asyncGet, asyncPost } from '../lib/AjaxCallWrapper';
import { Alert } from 'react-native';

const fetchProfile = () => {
	return (dispatch, getState) => {
		const { userName } = getState().Login;
		const endpoint = `${userName}/profile`;
		asyncGet(endpoint, {}, {}).then(response => {
			if (response.status === 200) {
				response.json().then(profile => {
					dispatch(updateProfile(profile));
				})
			}
		})
	}
}

const updateAllProfile = (profile) => {
	return (dispatch, getState) => {
		const { userName } = getState().Login;
		const endpoint = `${userName}/profile`;
		asyncPost(endpoint, profile, () => failAlert('Unable to retrieve profile', 'Please try again.'))
		.then(response => {
			if (response.status === 200) {
				dispatch(updateProfile(profile));
			} else {
				failAlert('Unable to retrieve profile', 'Please try again.');
			}
		})
	}
}

const failAlert = (title, content) => {
	Alert.alert(title, content, [{ text: 'Ok' }]);
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
