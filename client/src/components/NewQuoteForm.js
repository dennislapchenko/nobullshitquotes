import React, {Component} from "react";
import {connect} from "react-redux";
import {postNewQuote} from "../actions";


class NewQuoteForm extends Component {
	constructor() {
		super();
		this.state = {
			displayMoreFields: false,
			moreFieldsText: "More Fields"
		}
	}

	onClickMoreFields() {
		this.setState({
			displayMoreFields: !this.state.displayMoreFields,
			moreFieldsText: this.state.displayMoreFields ? "More Fields" : "Less Fields"
		});
	}

	onClickSubmit() {
	}

	render() {
		return (
			<div>
				<strong>Add new quote:</strong>
				<form id="newQuote" onSubmit={this.props.postNewQuote}>
					{this.renderMainFormFields()}

					{this.state.displayMoreFields ? this.renderAdditionalFormFields() : ""}
					<div className="row">
						<a onClick={() => this.onClickMoreFields(this)} className="orange btn-flat center white-text col s6">
							{this.state.moreFieldsText}
						</a>
						<button type="submit" className="teal btn-flat white-text col s6" onClick={() => this.onClickSubmit()}>
							Add Quote
						</button>
					</div>
				</form>
			</div>
		);
	}

	renderMainFormFields() {
		return ([
			<input type="text" id="quote" name="quote" placeholder="Quote *" key="quote"/>,
			<input type="text" id="tags" name="tags" placeholder="Tags (comma separated)" key="tags" />
		]);
	}

	renderAdditionalFormFields() {
		return (
			<div id="newQuoteExtraFields">
				<input type="text" id="author" name="author" placeholder="Author" />
				<input type="text" id="source" name="source" placeholder="Source" />
				<input type="text" id="year" name="year" placeholder="Year" />
				<input type="text" id="addedBy" name="addedBy" placeholder="Your Name" />
			</div>
		);
	}
}

function mapStateToProps({isNewQuotePosted}) {
	return {isNewQuotePosted};
}

export default connect(mapStateToProps, {postNewQuote})(NewQuoteForm);
