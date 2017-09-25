const quoteService = require("../services/quoteService");
const arrayHelper = require("../typeExtensions/array");

module.exports = app => {
	app.get("/api/quotes", async (req, res) => {
		const quotes = await quoteService.getRecentQuotes();

		if(quotes.length > 0) {
			res.status(200).send({ quotes: quotes.map(q => q.quote)});
		} else {
			console.log("Found no quotes");
			res.redirect("/");
		}
	});

	app.get("/api/quotes/daily", async (req, res) => {
		const quotes = await quoteService.getRecentQuotes();
		console.log("quoteRoutes: Found "+ quotes.length + " quotes");

		if(quotes.length > 0) {
			res.status(200).send({dailyQuote: arrayHelper.getRandom(quotes)});
		} else {
			console.log("Found no quotes");
			res.redirect("/");
		}
	});
	
	app.get("/api/quotes/:quote", async (req, res) => {
		const newQuote = req.params.quote;

		if(newQuote == undefined) {
			res.status(400).send({ error: "Query parameter 'value' was missing"});
		} else {
			const success = await quoteService.addNewQuote(newQuote);
			console.log(success);
			if(success) {
				res.status(200).send({result: "Successfully added new quote"});	
			} else {
				res.status(400).send({error: "Quote already exists"});
			}
		}
	});
};