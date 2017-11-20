import { NavigationActions } from 'react-navigation';
import { STATUS_ACTIONS } from '../constants/ActionTypes';

const selectChallenge = (challengeId) => {
	return (dispatch, getState) => {
		dispatch({
			type: STATUS_ACTIONS.UPDATE_CHALLENGE,
			challengeId: challengeId
		});
		dispatch(NavigationActions.navigate({ routeName: 'Game' }));
	}
}

export default {
	selectChallenge
}