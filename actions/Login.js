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
			errorAlert('Unable to login to the account', 'Please try again.');			
		}).then(response => {
			if (response.status === 200) {
				userName = checked? userName : '';
				passWord = checked? passWord : '';

				setItem(UserInfo.userName, userName);
				setItem(UserInfo.passWord, passWord);
				setItem(UserInfo.checked, checked ? 'true' : 'false');
				dispatch(NavigationActions.navigate({ routeName: 'Game' }));
			}
		});
	}
}

export default {
	fetchUserInfo,
	login
}
