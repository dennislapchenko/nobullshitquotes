import {GET_DAILY_QUOTE, GET_RECENT_QUOTES, POST_NEW_QUOTE} from "../actions/types";

export function randomQuote(state = null, action) {
	switch(action.type) {
		case GET_DAILY_QUOTE:
			return action.payload;
		default:
			return state;
	}
}

export function recentQuotes(state = null, action) {
	switch(action.type) {
		case GET_RECENT_QUOTES:
			return action.payload;
		default:
			return state;
	}
}

export function isNewQuotePosted(state = false, action) {
	switch(action.type) {
		case POST_NEW_QUOTE:
			return action.status === 200;
		default:
			return state;
	}
}