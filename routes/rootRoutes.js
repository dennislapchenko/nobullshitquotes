const path = require("path");

module.exports = app => {
	console.log(__dirname);
	app.get("/", (req, res) => {
  		res.sendFile(path.join(__dirname, "../client/build", "index.html"));
	});
};
