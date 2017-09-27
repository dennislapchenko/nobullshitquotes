import { combineReducers } from "redux";
import {randomQuote, recentQuotes, isNewQuotePosted} from "./quoteReducer";

export default combineReducers({
	randomQuote,
	recentQuotes,
	isNewQuotePosted
});