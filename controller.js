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
					},
					"accessory": {
						"type": "button",
						"text": {
							"type": "plain_text",
							"text": "Copy From Previous Week & Submit",
							"emoji": true
						},
						"value": "view_alternate_1"
					}
				}
			]
		};

		


		res.send(jsonResponse);
	},


	interactions : function(req, res) {

		/*
		 * Mulak's code
		 */
		var https = require('follow-redirects').https;
		var fs = require('fs');
		var options = {
		  'method': 'POST',
		  'hostname': 'empathetic-unicorn-50isgi-dev-ed.my.salesforce.com',
		  'path': '/services/data/v53.0/sobjects/PSA_Time_Card__c/',
		  'headers': {
		    'Content-Type': 'application/json',
		    'Authorization': 'Bearer 00D5g00000EIS0h!AQIAQIV_MIyhOTPqyI3M9253Cg_P6l4Ps.IkqavgMdRpHFjRo9O7S5Z9h3RViSbDuyudwTfE2Oo1oYOeaqD46IHW6SCtfIbZ',
		    'Cookie': 'BrowserId=qJNv-ox8EeuFptkDwWZ0rQ; CookieConsentPolicy=0:1; LSKey-c$CookieConsentPolicy=0:1'
		  },
		  'maxRedirects': 20
		};
		var req1 = https.request(options, function (res1) {
		  var chunks = [];
		  res1.on("data", function (chunk) {
		    chunks.push(chunk);
		  });
		  res1.on("end", function (chunk) {
		    var body = Buffer.concat(chunks);
		    console.log(body.toString());
		  });
		  res1.on("error", function (error) {
		    console.error(error);
		  });
		});
		var postData = JSON.stringify({
		  "Name": "Time Entry2",
		  "Email__c": "mulak@sf.com",
		  "Hours__c": 5
		});
		req1.write(postData);
		req1.end();

		let jsonResponse = {
		    "blocks": [
				{
					"type": "section",
					"text": {
						"type": "mrkdwn",
						"text": "*Timecard submitted thanks!*"
					}
				}
			]
		};

		res.send(jsonResponse);
		
	}
}

module.exports = controller;