const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const medidSchema = new Schema({
  username: String,
  patientname: String,
  contactname: String,
  contactphone: String,
  insurancecompany: String,
  policyno: String,
  primarycarephysician: String,
  medicalconditions: String,
  medication: String,
  allergies: String,
  bloodtype: String,
  resuscitate: Boolean,
  organdonor: Boolean
});

const MedId = mongoose.model("MedId", medidSchema);

module.exports = MedId;