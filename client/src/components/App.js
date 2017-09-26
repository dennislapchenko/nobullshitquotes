import React from 'react';
import { BrowserRouter } from "react-router-dom"; //BrowserRouter says how to behave. looks at url and shows components
import {connect} from "react-redux";
import * as actions from "../actions";


import Header from "./Header";
import NewQuoteForm from "./NewQuoteForm";
import RecentQuotes from "./RecentQuotes"

class App extends React.Component {

	componentDidMount() {
		this.props.getDailyQuote();
	}

	render() {
		return (
		  <div style={{backgroundColor:"#8c8c8c"}}>
		  	<BrowserRouter>
		  		<div className="container">
		  			<Header />
		  			<br/>
		  			<div className="row">
  						<div className="col s6">
  							<RecentQuotes />
  						</div>
  						<div className="col s6">
  							<NewQuoteForm />
  						</div>
		  			</div>  					
		  		</div>
		  	</BrowserRouter>
		  </div>
		);
	}
};

export default connect(null, actions)(App);
