const mongoose = require("mongoose");
const shortId = require("shortid");
const Schema = mongoose.Schema;

//Create a Schema
const UrlSchema = new Schema({
  urlShort: { type: String, required: true },
  urlLong: { type: String, required: true, default: shortId.generate },
  registered_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("url", UrlSchema);
