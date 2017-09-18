const mongoose = require("mongoose");
const { Schema } = mongoose;

const quoteSchema = new Schema({
	quote: String,
	createdDateTime: Date
});

mongoose.model("quotes", quoteSchema);
