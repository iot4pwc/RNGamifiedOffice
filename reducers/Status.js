import { STATUS_ACTIONS } from '../constants/ActionTypes';

const initialState = {

}

export const Status = (state = initialState, action) => {
	switch (action.type) {
		default: {
			return {
				...state
			};
		}
	}
};
