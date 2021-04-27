const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
	name: { type: String },
	board: { type: String},
  time:	{ type: String},
  moves:	{ type: String},
});

module.exports = model('Statistic', schema);