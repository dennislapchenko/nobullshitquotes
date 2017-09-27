import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class Header extends Component {
	renderQuote(){
		switch(this.props.randomQuote) {
			case null:
				return;
			default:
				const quote = this.props.randomQuote.dailyQuote;
				return (<span>Quote of the day:<strong> {quote.quote} {quote.author ? "--"+quote.author : ""}</strong></span>);
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

function mapStateToProps({randomQuote}) {
	return {randomQuote};
}

export default connect(mapStateToProps)(Header);
