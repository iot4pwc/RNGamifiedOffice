import { LOGIN_ACTIONS } from '../constants/ActionTypes';
import { NavigationActions } from 'react-navigation';
import { UserInfo } from '../constants/Common';
import { asyncPost, errorAlert } from '../lib/AjaxCallWrapper';
import { loadItems, setItem } from '../lib/AsyncRestorer';

const fetchUserInfo = () => {
	return (dispatch, getState) => {
		let userInfoP = loadItems(UserInfo);
		return userInfoP;	
	}
}

const login = (userName, passWord, checked) => {
	return (dispatch, getState) => {
		const payload = {
			username: userName,
			password: passWord
		};

		const endpoint = `${userName}/login`;
		asyncPost(endpoint, payload, () => {
			errorAlert('Unable to Login to the Account', 'Please try again.');
		}).then(response => {
			if (response.status === 200) {
				response.json().then(challenges => dispatch({
					type: LOGIN_ACTIONS.LOGIN,
					userName: userName,
					challenges: challenges.all_challenges
				}));
				
				userNameToStore = checked? userName : '';
				passWordToStore = checked? passWord : '';

				setItem(UserInfo.userName, userNameToStore);
				setItem(UserInfo.passWord, passWordToStore);
				setItem(UserInfo.checked, checked ? 'true' : 'false');			
				dispatch(NavigationActions.navigate({ routeName: 'Challenge' }));
			} else {
				errorAlert('Invalid Username or Password', 'Please try again with correct information.');
			}
		});
	}
}

export default {
	fetchUserInfo,
	login,
}
