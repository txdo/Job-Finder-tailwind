const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  name: String,
  field: String,
  location: String,
  description: String,
  reasons: [String],
  url: String,
  banner: String,
  image: String,
  username: String,
  password: String,
});

const Company = mongoose.model("company", CompanySchema);

module.exports = Company;
