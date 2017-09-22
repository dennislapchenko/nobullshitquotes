import axios from "axios";
import {FETCH_RECENT_QUOTES, FETCH_DAILY_QUOTE} from "./types";
import {RECENT_QUOTES_ENDPOINT, DAILY_QUOTE_ENDPOINT} from "./interface";

//these action creators become 'this.props.{actionCreator}' when wired inside React-Components (connect(null, actions)))(Component)

export const fetchDailyQuote = () => async dispatch => {
	const res = await axios.get(DAILY_QUOTE_ENDPOINT);
	
	dispatch({type: FETCH_DAILY_QUOTE, payload: res.data});
};

export const fetchRecentQuotes = () => async dispatch => {
	const res = await axios.get(RECENT_QUOTES_ENDPOINT);
	
	dispatch({type: FETCH_RECENT_QUOTES, payload: res.data});
};

//reducers are eating these dispatched signals