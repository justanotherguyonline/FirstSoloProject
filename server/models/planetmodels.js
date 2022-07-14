const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  name: {type: String, required: true, unique: true},
  badForDogs: {type: String, required: true},
  badForCats: {type: String, required: true, unique: true},
  severity: {type: String},
});

module.exports = mongoose.model('Plant', plantSchema);