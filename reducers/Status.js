import { STATUS_ACTIONS } from '../constants/ActionTypes';

const initialState = {
	challengeId: '',
	fullActivities: {},
	personalRank: {},
	recentActivity: {},
	totalRank: []
}

export const Status = (state = initialState, action) => {
	switch (action.type) {
		case STATUS_ACTIONS.UPDATE_PERSONAL_RANK: {
			return {
				...state,
				personalRank: action.personalRank
			}
		}
		case STATUS_ACTIONS.UPDATE_TOTAL_RANK: {
			return {
				...state,
				totalRank: action.totalRank.rank
			}
		}
		case STATUS_ACTIONS.UPDATE_FULL_ACTIVITIES: {
			return {
				...state,
				fullActivities: action.fullActivities
			}
		}
		case STATUS_ACTIONS.UPDATE_RECENT_ACTIVITY: {
			return {
				...state,
				recentActivity: action.recentActivity
			}
		}
		case STATUS_ACTIONS.UPDATE_CHALLENGE: {
			return {
				...state,
				challengeId: action.challengeId
			}
		}
		default: {
			return {
				...state
			};
		}
	}
};
