const mongoose = require('mongoose');
var Food = mongoose.model('Food',{
	title: { type: String },
	desc: { type: String },
	cost: { type: Number },
	count: { type: Number },
});
module.exports = { Food };