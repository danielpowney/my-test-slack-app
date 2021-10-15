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

	timecard : function(req, res) {
		let jsonResponse = {
		    "blocks": [
				{
					"type": "section",
					"text": {
						"type": "mrkdwn",
						"text": "<https://org62.lightning.force.com/one/one.app#eyJjb21wb25lbnREZWYiOiJvbmU6YWxvaGFQYWdlIiwiYXR0cmlidXRlcyI6eyJhZGRyZXNzIjoiaHR0cHM6Ly9vcmc2Mi0tcHNlLm5hMTI4LnZpc3VhbC5mb3JjZS5jb20vYXBleC9QU0FUaW1lY2FyZEVudHJ5In0sInN0YXRlIjp7fX0%3D|Go To Org62 Time Entry>"
					}
				},
				{
				    "type": "button",
				    "text": {
				        "type": "plain_text",
				        "text": "Copy & Submit From Previous Week"
				      },
				      "value": "click_me_123",
				      "action_id": "button"
				}
			]
		};
		res.send(jsonResponse);
	},


	interactions : function(req, res) {
		return "hello world!";
	}
}

module.exports = controller;

/*

					"accessory": {
						"type": "button",
						"text": {
							"type": "plain_text",
							"text": "Copy & Submit From Previous Week",
							"emoji": true
						},
						"value": "view_alternate_1"
					}
				}*/