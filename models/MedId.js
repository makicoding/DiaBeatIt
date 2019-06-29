const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const medidSchema = new Schema({
  username: String,
  fullname: String,
  dateofbirth: String,
  address: String,
  contactname: String,
  contactphone: String,
  inscompany: String,
  insphoneno: String,
  policyno: String,
  primarycarephysician: String,
  pcpphoneno: String,
  medicalconditions: String,
  medications: String,
  allergies: String,
  bloodtype: String,
  resuscitate: String,
  organdonor: String
});

const MedId = mongoose.model("MedId", medidSchema);

module.exports = MedId;