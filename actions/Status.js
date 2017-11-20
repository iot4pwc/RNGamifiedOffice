import { asyncGet } from '../lib/AjaxCallWrapper';
import { NavigationActions } from 'react-navigation';
import { STATUS_ACTIONS } from '../constants/ActionTypes';

const fetchRanking = () => {
	return (dispatch, getState) => {
		const { userName } = getState().Login;
		// const { challengeId } = getState().Challenge;
		// TODO: change challengID
		const challengeId = '123';
		let endpoint = `${challengeId}/${userName}/getRanking`;
		asyncGet(endpoint, {}, {}).then(response => {
			if (response.status === 200) {
				response.json().then(personalRank => {
					dispatch(updatePersonalRank(personalRank));
				})
			}
		});
		endpoint = `${challengeId}/getRanking`;
		asyncGet(endpoint, {}, {}).then(response => {
			if (response.status === 200) {
				response.json().then(totalRank => {
					dispatch(updateTotalRank(totalRank));
				})
			}
		});
	}
}

const fetchActivity = () => {
	return (dispatch, getState) => {
		const { userName } = getState().Login;
		let endpoint = `${userName}/getRecentStats`;
		asyncGet(endpoint, {}, {}).then(response => {
			if (response.status === 200) {
				response.json().then(recentActivity => {
					dispatch(updateRecentActivity(recentActivity));
				})
			}
		});
		endpoint = `${userName}/getFullStats`;
		asyncGet(endpoint, {}, {}).then(response => {
			if (response.status === 200) {
				response.json().then(fullActivities => {
					dispatch(updateFullActivities(fullActivities));
				})
			}
		});		
	}
}

const navigate = (routeName) => {
	return (dispatch, getState) => {
		dispatch(NavigationActions.navigate({ routeName: routeName }));		
	}
}

const updatePersonalRank = (personalRank) => {
	return {
		type: STATUS_ACTIONS.UPDATE_PERSONAL_RANK,
		personalRank
	}
}

const updateTotalRank = (totalRank) => {
	return {
		type: STATUS_ACTIONS.UPDATE_TOTAL_RANK,
		totalRank
	}
}

const updateRecentActivity = (recentActivity) => {
	return {
		type: STATUS_ACTIONS.UPDATE_RECENT_ACTIVITY,
		recentActivity
	}
}

const updateFullActivities = (fullActivities) => {
	return {
		type: STATUS_ACTIONS.UPDATE_FULL_ACTIVITIES,
		fullActivities
	}
}

export default {
	fetchRanking,
	fetchActivity,
	navigate
}
