const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create a Schema
const UrlSchema = new Schema({
  urlShort: { type: String, required: true },
  urlLong: { type: String, required: true },
  registered_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("url", UrlSchema);
