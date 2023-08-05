const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let patientdetailSchema = new Schema(
  {
    pname: { type: String },
    age: { type: Number },
    contact: { type: Number },
    date: { type: String },
    pid: { type: String },
    doc_id: { type: String },
  },
  { collection: "patientdetail" }
);
module.exports = mongoose.model("patientdetailSchema", patientdetailSchema);
