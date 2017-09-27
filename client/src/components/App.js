import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"; //BrowserRouter says how to behave. looks at url and shows components
import {connect} from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			isRecentQuotesDirty: true,
			isDailyQuoteDirty: true
		};
	}

	componentDidMount() {
		this.checkDirtyData();
	}

	checkDirtyData() {
		console.log("checking if App data is dirty");
		if(this.state.isNewQuotePosted) {
			this.state.isRecentQuotesDirty = true;
			this.state.isDailyQuoteDirty = true;
		}

		if(this.state.isRecentQuotesDirty) {
			this.props.getRecentQuotes();
			this.state.isRecentQuotesDirty = false;
		}
		if(this.state.isDailyQuoteDirty) {
			this.props.getDailyQuote();
			this.state.isDailyQuoteDirty = false;
		}
	}

	render() {
		this.checkDirtyData();
		return (
		  <div style={{backgroundColor:"#8c8c8c"}}>
		  	<BrowserRouter>
		  		<div className="container">
		  			<Header />
		  			<br/>
					<Route exact path="/" component={Landing} />
		  		</div>
		  	</BrowserRouter>
		  </div>
		);
	}
};

function mapStateToProps({isNewQuotePosted}) {
	return {isNewQuotePosted};
}

export default connect(mapStateToProps, actions)(App);
