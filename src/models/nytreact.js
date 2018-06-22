const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const saveSchema = new Schema({
  title: {type: String, required: true},
  url: {type: String, required: true},
  date: {type: Date},
  _id: {type: String, required: true}
});

const nytreact = mongoose.model("nytreact", saveSchema);

module.exports = nytreact;