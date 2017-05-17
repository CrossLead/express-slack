const express = require('express');
const router = express.Router();

const slack = require('../plugins/express-slack');

slack.command('/clp', (payload, message)=>{
	// payload is the POST data sent from slack when a user sends a slash command
	// message is a function which takes the JSON data you want to send back to slack in response to the command
	message(makeSlackResponse(payload));
})

router.post('/', (req,res,next)=>{
	// send a 200 OK back to slack
	res.send();

});

const makeSlackResponse = (slackPost) => {
	const responseBody = {};
	responseBody.attachments = [
		{
			color: 'good',
			text: "Thanks for using the /clp slash command! :D\nIt doesn't have much functionality now but it will be useful soon!"
		},
		{
			color: '#000000',
			text: `Command: ${slackPost.command} ${slackPost.text}`
		}
	];
	return responseBody;
}

module.exports = router;

