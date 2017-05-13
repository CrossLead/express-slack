const express = require('express');
const router = express.Router();
const request = require('request');
const clp = require('../plugins/clp.js');

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

