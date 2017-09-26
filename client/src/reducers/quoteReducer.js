import {GET_DAILY_QUOTE} from "../actions/types";

export default function(state = null, action) {
	switch(action.type) {
		case GET_DAILY_QUOTE:
			return action.payload;
		default:
			return state;
	}
}