const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "firstname is require"],
  },
  middlename: {
    type: String,
  },
  lastname: {
    type: String,
    required: [true, "lastname is require"],
  },
  country: {
    type: String,
    required: [true, "country is require"],
  },
  contact: {
    type: String,
    required: [true, "contact is require"],
  },
  program: {
    type: String,
    required: [true, "program is require"],
  },
  category: {
    type: String,
    required: [true, "category is require"],
  },
  startdate: {
    type: Date,
    required: [true, "startdate is require"],
  },
});

const registereduserModel = mongoose.model("users", userSchema);

module.exports = registereduserModel;
