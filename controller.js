/**
 * Main controller
 */
var controller = {

	/**
	 * Serves initial page display
	 */
	index : function(req, res) {
		res.render("pages/index", {} );
	},

	menus : function(req, res) {
		//if (req.header('Accept').includes('application/json')){
			let jsonResponse = {
			    "blocks": [
					{
						"type": "section",
						"text": {
							"type": "mrkdwn",
							"text": "*It's 80 degrees right now.*"
						}
					},
					{
						"type": "section",
						"text": {
							"type": "mrkdwn",
							"text": "Partly cloudy today and tomorrow"
						}
					}
				]
			};
			res.send(jsonResponse);
		//} else {
		//	res.render("pages/index", {} );
		//}
	},

	interactions : function(req, res) {
		if (req.header('Accept').includes('application/json')){
			let jsonResponse = {};
			res.send(result);
		} else {
		
			res.render("pages/index", {} );
		}
	}




}

module.exports = controller;