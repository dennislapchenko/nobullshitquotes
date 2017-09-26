import axios from "axios";
import {GET_RECENT_QUOTES, GET_DAILY_QUOTE, POST_NEW_QUOTE} from "./types";
import {GET_RECENT_QUOTES_ENDPOINT, GET_DAILY_QUOTE_ENDPOINT, POST_NEW_QUOTE_ENDPOINT} from "./interface";

//these action creators become 'this.props.{actionCreator}' when wired inside React-Components (connect(null, actions)))(Component)

export const fetchDailyQuote = () => async dispatch => {
	const res = await axios.get(GET_DAILY_QUOTE_ENDPOINT);
	
	dispatch({type: GET_DAILY_QUOTE, payload: res.data});
};

export const fetchRecentQuotes = () => async dispatch => {
	const res = await axios.get(GET_RECENT_QUOTES_ENDPOINT);
	
	dispatch({type: GET_RECENT_QUOTES, payload: res.data});
};

export const postNewQuote = (form) => async dispatch => {
	console.log(form);
	form.preventDefault();
	const data = new new FormData(form.target);
	console.log(data);
	const res = await axios.post(POST_NEW_QUOTE_ENDPOINT, data);
	
	dispatch({type: POST_NEW_QUOTE, payload: res.data});
};

//reducers are eating these dispatched signals