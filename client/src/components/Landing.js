import React from 'react';

import NewQuoteForm from "./NewQuoteForm";
import RecentQuotes from "./RecentQuotes"

class Landing extends React.Component {

	render() {
		return (
  			<div className="row">
				<div className="col s6">
					<RecentQuotes />
				</div>
				<div className="col s6">
					<NewQuoteForm />
				</div>
  			</div>  					
		);
	}
};


export default Landing;
