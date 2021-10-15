/**
 * Routes
 */
const controller = require("./controller.js");

module.exports = function(app) {
	app.get("/", controller.index);
	app.post("/timecard", controller.timecard);
};