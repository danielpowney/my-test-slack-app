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
			    "options": [{
			            "text": {
			                "type": "plain_text",
			                "text": "*this is plain_text text*"
			            },
			            "value": "value-0"
			        },
			        {
			            "text": {
			                "type": "plain_text",
			                "text": "*this is plain_text text*"
			            },
			            "value": "value-1"
			        },
			        {
			            "text": {
			                "type": "plain_text",
			                "text": "*this is plain_text text*"
			            },
			            "value": "value-2"
			        }
			    ]
			};
			res.send(result);
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