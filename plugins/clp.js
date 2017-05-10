module.exports = function () {

	const that = {};

	that.getSlackResponse = (commandText) => {
		const responseBody = {};

		responseBody.text = "Gabe says hi!";
		responseBody.attachments = [
			{
				color: 'good',
				text: "Thanks for using the /clp slash command! :D\nIt doesn't have much functionality now but it will be useful soon!"
			},
			{
				color: 'warning',
				text: `Command: /clp ${commandText}`
			}
		];
		return responseBody;
	}	

	return that;
};