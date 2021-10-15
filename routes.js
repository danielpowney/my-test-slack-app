/**
 * Routes
 */
const controller = require("./controller.js");

module.exports = function(app) {
	app.get("/", controller.index);
	app.post("/menus", controller.menus);
	app.post("/interactions", controller.interactions);
};