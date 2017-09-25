import {FETCH_DAILY_QUOTE, FETCH_RECENT_QUOTES} from "../actions/types";

export default function(state = null, action) {
	switch(action.type) {
		case FETCH_DAILY_QUOTE:
			return action.payload;
		case FETCH_RECENT_QUOTES:
			return action.payload;
		default:
			return state;
	}
}