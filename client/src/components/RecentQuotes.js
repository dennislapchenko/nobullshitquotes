import React, {Component} from "react";
import {connect} from "react-reduc";
import {getRecentQuotes} from "../../actions";

class RecentQuotes extends Component {

	componentDidMount() {
		this.props.getRecentQuotes(5);
	}

	renderRecentQuotes() {
		return this.props.recentQuotes.map(quote => {
			return (
				<div classnName="card darken-1" key={quote._id}>
					<div className="card-content">
						<span className="card-title">{quote.quote}</span>
						<span><i>- {quote.author}</i></span>
						<span>{quote.source}{(quote.year !== undefined) 
															? "("+quote.year+")"
															: ""}</span>
						<span>{quote.addedBy}</span>
					</div>
				</div>
			);

		});
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
