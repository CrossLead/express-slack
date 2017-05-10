const express = require('express');
const router = express.Router();
const request = require('request');

// token=u3yVE3pr48uITzYudLdMgG30
// team_id=T0001
// team_domain=example
// channel_id=C2147483705
// channel_name=test
// user_id=U2147483697
// user_name=Steve
// command=/weather
// text=94070
// response_url=https://hooks.slack.com/commands/1234/5678

/* Slack Routes */

router.post('/', (req,res,next)=>{
	const requestBody = req.body;
	const responseBody = {};

	const endpoint = requestBody.response_url;


	console.log(req);
	console.log(requestBody);

	responseBody.text = "You successfully made a round-trip request! :D";

	request.post({
		headers: {'content-type':'application/json'},
		url: endpoint,
		body: responseBody
	}, (err,res,body)=>{
		if(err)
			console.log(err);
		console.log(res);
	})

});

module.exports = router;