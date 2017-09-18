const mongoose = require("mongoose");

const Quote = mongoose.model("quotes");

module.exports.getDailyQuote = () => {
};

module.exports.addNewQuote = async (qt) => {
	console.log("Saving new quote");
	const existingQuote = await Quote.findOne({quote: qt});

	if(existingQuote) {
		console.log("quote already exists");
		return false;
	}
	
	const newQuote = await new Quote({quote: qt, createdDateTime: new Date()}).save();
	return true;
};