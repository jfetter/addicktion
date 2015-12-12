"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Pic;

var picSchema = Schema({
	uName: String, 
	pic: {type: String, required: true},
	story: String,
	votes: Number
})

module.exports = Pic