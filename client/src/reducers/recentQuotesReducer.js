import {GET_RECENT_QUOTES} from "../actions/types";

export default function(state = null, action) {
	switch(action.type) {
		case GET_RECENT_QUOTES:
			return action.payload;
		default:
			return state;
	}
}