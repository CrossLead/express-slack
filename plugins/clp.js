const that = {};

that.getSlackResponse = (commandText) => {
	const responseBody = {};

	//responseBody.text = "";
	responseBody.attachments = [
		{
			color: 'good',
			text: "Thanks for using the /clp slash command! :D\nIt doesn't have much functionality now but it will be useful soon!"
		},
		{
			color: '#000000',
			text: `Command: /clp ${commandText}`
		}
	];
	return responseBody;
}	

module.exports = that;