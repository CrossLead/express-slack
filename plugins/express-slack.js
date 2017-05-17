const express = require('express');
const request = require('request');

const slackApp = express();

const registeredCommands = new Map();

slackApp.command = (slashCmd, handler) => {
	// register the slashCmd
	registeredCommands.set(slashCmd, handler);

	// use the middleware
	slackApp.use(middlewareDriver);
}

/* Middleware Function */
const middlewareDriver = (req,res,next)=>{
	const payload = req.body;
	let cmdHandler = registeredCommands.get(payload.command);
	if(cmdHandler){
		function message(slackReply){
			postToSlack(payload.response_url, slackReply);
		}
		cmdHandler(payload, message);
	}
	next();
}

const postToSlack = (endpoint, msg) => {
	const responseBody = msg;
	request.post({
		headers: {'content-type':'application/json'},
		url: endpoint,
		json: responseBody
	}, (err,res,body)=>{
		if(err)
			console.log(err);
		// console.log(res);
		console.log(`Sent a response to ${endpoint}`);
		console.log(responseBody);
	});
}

module.exports = slackApp;

