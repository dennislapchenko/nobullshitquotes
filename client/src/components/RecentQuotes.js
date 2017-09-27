import React, {Component} from "react";
import {connect} from "react-redux";

class RecentQuotes extends Component {

	renderRecentQuotes() {
		switch(this.props.recentQuotes) {
			case null:
				return;
			default:
				return this.props.recentQuotes.map(quote => {
					return (
						<div className="card darken-2 hoverable" key={quote._id}>
							<div className="card-content">
								<span className="card-title">{quote.quote}</span>
								<span><i>{quote.author ? "--"+quote.author : ""}</i></span>
								<span className="right">{quote.source}{quote.year ? "("+quote.year+")" : ""}</span>
								<br/>
								<span className="right">{quote.addedBy}</span>
								{quote.tags.join(" , ")}
							</div>
						</div>
					);
				});
			}
	}

	render() {
		return (
			<div>
				<strong>Recent Quotes:</strong>
				{this.renderRecentQuotes()}
			</div>
		);
	}
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

function mapStateToProps({recentQuotes}) {
	return {recentQuotes};
}

export default connect(mapStateToProps)(RecentQuotes);
