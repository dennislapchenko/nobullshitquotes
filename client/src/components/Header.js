import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class Header extends Component {
	renderQuote(){
		switch(this.props.quotes) {
			case null:
				return;
			default:
				return (<span><strong>Quote of the day: {this.props.quotes.dailyQuote.quote}</strong></span>);
		}
	}

	render() {	
		return (
			<nav>
				<div className="nav-wrapper cyan z-depth-2">
					<Link 
						to="/" 
						className="left brand-logo">
						AciQuotes
					</Link>
					<div className="center">
						{this.renderQuote()}
					</div>
				</div>
			</nav>
		);
	}
}

function mapStateToProps({quotes}) {
	return {quotes};
}

export default connect(mapStateToProps)(Header);
