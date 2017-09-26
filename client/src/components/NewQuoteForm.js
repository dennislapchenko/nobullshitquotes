import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {postNewQuote} from "../actions";


class NewQuoteForm extends Component {

	render() {
		return (
			<div>
				<form onSubmit={postNewQuote}>
					<input type="text" id="quote" name="quote" />
					<input type="text" id="author" name="author" />
					<input type="text" id="source" name="source" />
					<input type="text" id="year" name="year" />
					<input type="text" id="addedBy" name="addedBy" />
					<button type="submit">Add Quote</button>
				</form>
			</div>
		);
	}
}

function mapStateToProps({quotes}) {
	return {quotes};
}

export default connect(mapStateToProps, )(Header);
