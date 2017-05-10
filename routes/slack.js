const express = require('express');
const router = express.Router();

/* Slack Routes */

router.post('/', (req,res,next)=>{
	const response = {};

	console.log(req);
	console.log(req.body);
});

module.exports = router;