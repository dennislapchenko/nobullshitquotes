import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"; //BrowserRouter says how to behave. looks at url and shows components
import {connect} from "react-redux";
import * as actions from "../actions";


import Header from "./Header";

class App extends React.Component {

	componentDidMount() {
		this.props.fetchDailyQuote();
	}


	render() {
	return (
	  <div>
	  	<BrowserRouter>
	  		<div className="container">
	  			<Header />
	  		</div>
	  	</BrowserRouter>
	  </div>
	);
	}
};

export default connect(null, actions)(App);
