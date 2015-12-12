var express = require("express");
var router = express.Router();
var Pic = require("/picModel");

router.put("/", function(req, res){
	Pic.create(function, err, req.body){
		if (err) res.send(err);
		res.send("DickPic pushed to DB");
	}
})

router.get("/dicPics", function(req, res){

})


module.exports = router; 