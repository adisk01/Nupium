const mongoose = require("mongoose");

const registereduserSchema = new mongoose.Schema({
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
  contactNumber: {
    type: String,
    required: [true, "contact is require"],
  },
  program: {
    type: String,
    required: [true, "program is require"],
  },
  candidateCategory: {
    type: String,
    required: [true, "category is require"],
  },
  startDate: {
    type: Date,
    required: [true, "startdate is require"],
  },
});

const registereduserModel = mongoose.model("registeredusers", registereduserSchema);

module.exports = registereduserModel;
