import { combineReducers } from "redux";
import quoteReducer from "./quoteReducer";
import recentQuotesReducer from "./recentQuotesReducer"

export default combineReducers({
	quotes: quoteReducer,
	recentQuotes: recentQuotesReducer
});