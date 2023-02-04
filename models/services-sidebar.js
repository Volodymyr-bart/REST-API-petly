const { model, Schema } = require("mongoose");

const serviceSchema = new Schema({
  title: String,
  url: String,
  addressUrl: String,
  imageUrl: String,
  address: String,
  workDays: Array,
  phone: String,
  email: String,
});

const Service = model("service", serviceSchema);

module.exports = Service;
