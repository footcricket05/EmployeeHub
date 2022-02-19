const mongoose = require("mongoose");
const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  DateOfBirth: {
    type: String,
    required: true,
  },
  DateOfJoining: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  gender: {
    type: String,
    required: true,
  },
});
const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;
