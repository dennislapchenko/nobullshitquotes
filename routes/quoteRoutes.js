const quoteService = require("../services/quoteService");
const mongoose = require("mongoose");

const Quote = mongoose.model("quotes");

module.exports = app => {
	app.get("/api/quotes", (req, res) => {
		const quotes = quoteService.getDailyQuotes();
		if(!quotes) {
			console.log("Found no quotes");
			res.redirect("/");
		} else {
			res.status(200).send({ quotes: quotes.map(q => q.quote)});
		}
	});
	

	app.get("/api/quotes/:quote", (req, res) => {
		const newQuote = req.params.quote;

		if(newQuote == undefined) {
			res.status(400).send({ error: "Query parameter 'value' was missing"});
		} else {
			const success = quoteService.addNewQuote(newQuote);
			console.log(success);
			if(success) {
				res.status(200).send({result: "Successfully added new quote"});	
			} else {
				res.status(400).send({error: "Quote already exists"});
			}
		}
	});
};
