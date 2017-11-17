import { TIMELINE_ACTIONS } from '../constants/ActionTypes';

const initialState = {

}

export const Timeline = (state = initialState, action) => {
	switch (action.type) {
		default: {
			return {
				...state
			};
		}
	}
};
