const mongoose = require("mongoose");

exports.connectToDB = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/Job-Finder");
};
