/**
 * Main controller
 */
var controller = {

	/**
	 * Serves initial page display
	 */
	index : async function(req, res) {
		res.render("pages/index", {} );
	}

}

module.exports = controller;