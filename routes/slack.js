const express = require('express');
const router = express.Router();
const request = require('request');
const clp = require('../plugins/clp.js');

// { token: 'u3yVE3pr48uITzYudLdMgG30',
//   team_id: 'T039BB39F',
//   team_domain: 'crosslead',
//   channel_id: 'D5AJTKUDB',
//   channel_name: 'directmessage',
//   user_id: 'U5ADVUXGT',
//   user_name: 'gabriels',
//   command: '/clp',
//   text: 'example command text',
//   response_url: 'https://hooks.slack.com/commands/T039BB39F/181053241776/o2Yfc8v7j1EsEva1Y4bAMlEr' }

/* Slack Routes */

router.post('/', (req,res,next)=>{
	const requestBody = req.body;
	const response_endpoint = requestBody.response_url;

	console.log(requestBody);

	const responseBody = clp.getSlackResponse(requestBody.text);

	request.post({
		headers: {'content-type':'application/json'},
		url: response_endpoint,
		json: responseBody
	}, (err,res,body)=>{
		if(err)
			console.log(err);
		// console.log(res);
		console.log(`Sent a response to ${response_endpoint}`);
		console.log(responseBody);
	})

	// send a good status back to slack
	res.send();

});

module.exports = router;