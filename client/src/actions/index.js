import axios from "axios";
import {GET_RECENT_QUOTES, GET_DAILY_QUOTE, POST_NEW_QUOTE} from "./types";
import {GET_RECENT_QUOTES_ENDPOINT, GET_DAILY_QUOTE_ENDPOINT, POST_NEW_QUOTE_ENDPOINT} from "./interface";

//these action creators become 'this.props.{actionCreator}' when wired inside React-Components (connect(null, actions)))(Component)

export const getDailyQuote = () => async dispatch => {
	const res = await axios.get(GET_DAILY_QUOTE_ENDPOINT);
	
	dispatch({type: GET_DAILY_QUOTE, payload: res.data});
};

export const getRecentQuotes = () => async dispatch => {
	const res = await axios.get(GET_RECENT_QUOTES_ENDPOINT);
	
	dispatch({type: GET_RECENT_QUOTES, payload: res.data});
};

export const postNewQuote = (event) => async dispatch => {
	event.preventDefault();

	const form = new FormData(event.target);
	const payload = {
		quote: form.get("quote"),
		tags: form.get("tags").split(","),
		author: form.get("author"),
		source: form.get("source"),
		year: form.get("year"),
		addedBy: form.get("addedBy")
	};
	//TODO: JSON.stringify(form).serializeArray() - throws an error for some reason.
	//fix this form creation
	console.log(payload);
	const res = await axios.post(POST_NEW_QUOTE_ENDPOINT, payload);
	
	dispatch({type: POST_NEW_QUOTE, payload: res.data});
};

//reducers are eating these dispatched signals