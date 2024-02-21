// models/Student.js

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  Sl_No: Number,
  Reg_No: String,
  Name: String,
  Subject_Code: String,
  Subject_Name: String,
  Type: String,
  Credits: String,
  Grade: String,
});

module.exports = mongoose.model('Student', studentSchema);
