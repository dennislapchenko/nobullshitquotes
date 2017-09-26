const mongoose = require("mongoose");
const { Schema } = mongoose;

const quoteSchema = new Schema({
	quote: String,
	author: String,
	source: String,
	year: String,
	addedBy: String,
	tags: Array,
	verified: Boolean,
	createdDateTime: Date,
	updatedDateTime: Date
});

mongoose.model("quotes", quoteSchema);
