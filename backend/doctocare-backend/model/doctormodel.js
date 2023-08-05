const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let doctorSchema = new Schema(
  {
    name: { type: String },
    did: { type: String },
    year: { type: String },
    operations: { type: String },
    image: { type: String },
    hospitalname: { type: String },
    discription: { type: String },
  },
  { collection: "doctor" }
);
module.exports = mongoose.model("doctorSchema", doctorSchema);
