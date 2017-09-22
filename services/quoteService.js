const mongoose = require("mongoose");
const Quote = mongoose.model("quotes");

module.exports.getRecentQuotes = () => {
	const recentQuotes = Quote.find({});

	if(recentQuotes) {
		return recentQuotes;
	} else {
		return false;
	}
};

module.exports.addNewQuote = async (qt) => {
	console.log("Saving new quote");
	const existingQuote = await Quote.findOne({quote: qt});
	
	if(existingQuote) {
		console.log("quote already existss");
		return false;
	}
	
	const newQuote = await new Quote({quote: qt, createdDateTime: new Date()}).save();
	return true;
};