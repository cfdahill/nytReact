const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articles = new Schema({
  _id: {type: String, required: true}
});

const nytreact = mongoose.model("nytreact", articles);

module.exports = nytreact;