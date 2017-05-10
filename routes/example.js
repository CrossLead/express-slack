const express = require('express');
const router = express.Router();

/* Example Routes */

router.get('/', (req,res,next)=>{
	res.send("You hit the example route!");
});

router.get('/test', (req,res,next)=>{
	res.send("You hit the example test route!");
});

module.exports = router;