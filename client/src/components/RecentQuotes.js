import React, {Component} from "react";
import {connect} from "react-redux";
import {getRecentQuotes} from "../actions";

class RecentQuotes extends Component {

	componentDidMount() {
		this.props.getRecentQuotes();
	}

	renderRecentQuotes() {
		switch(this.props.recentQuotes) {
			case null:
				return;
			default:
			console.log(this.props.recentQuotes);
				return this.props.recentQuotes.map(quote => {
					return ([
						<strong>Recent Quotes:</strong>,
						<div className="card darken-2 hoverable" key={quote._id}>
							<div className="card-content">
								<span className="card-title">{quote.quote}</span>
								<span><i>- {quote.author}</i></span>
								<span className="right">{quote.source}{(quote.year !== undefined) 
																	? "("+quote.year+")"
																	: ""}</span>
								<br/>
								<span className="right">{quote.addedBy}</span>
								{quote.tags.join(" , ")}
							</div>
						</div>
					]);
				});
			}
		
	}

	render() {
		return (
			<div>
				{this.renderRecentQuotes()}
			</div>
		);
	}
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

function mapStateToProps({recentQuotes}) {
	return {recentQuotes};
}

export default connect(mapStateToProps, {getRecentQuotes})(RecentQuotes);
