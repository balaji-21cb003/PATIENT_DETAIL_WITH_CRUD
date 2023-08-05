const express = require("express");
const patientdetailExpressRoute = express.Router();
const cors = require("cors");
let PatientdetailSchema = require("../model/patientdetailmodel");

// CORS OPTIONS
// patientdetailExpressRoute.use(cors)
var whitelist = [
  "https://localhost:8100",
  "https://localhost:4000",
  "https://localhost:3000",
];
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header("Origin")) !== -1) {
    console.log(whitelist[0]);
    corsOptions = {
      origin: "*",
      methods: ["GET", "POST", "PUT"], // Add PUT method
    };
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions);
};

// Get users and handle adding and editing
patientdetailExpressRoute
  .route("/")
  .all(cors(corsOptionsDelegate))
  .get(async (req, res, next) => {
    await PatientdetailSchema.find()
      .then((result) => {
        console.log(result);
        res.json({
          data: result,
        });
      })
      .catch((err) => {
        return next(err);
      });
  })

  .post(async (req, res, next) => {
    const newPatient = new PatientdetailSchema(req.body);
    // const {_id} = newPatient
    // console.log(_id)
    await newPatient
      .save()
      .then((result) => {
        res.status(201).json({
          data: result,
          message: "Data successfully added!",
        });
      })
      .catch((err) => {
        return next(err);
      });
  })
  .delete(async (req, res, next) => {
    const patientId = req.query._id; // Assuming you provide the _id as a query parameter

    if (!patientId) {
      return res.status(400).json({ message: "Missing patient ID" });
    }

    await PatientdetailSchema.findByIdAndDelete(patientId)
      .then(() => {
        res.json({ message: "Data successfully deleted!" });
      })
      .catch((err) => {
        return next(err);
      });
  })

  .put(async (req, res, next) => {
    const { patientId } = req.body; // Assuming you provide the id in the request body
    const { newdata } = req.body; // Assuming you provide the updated data
    console.log(patientId);
    console.log(req.body);
    await PatientdetailSchema.findByIdAndUpdate(patientId, newdata, {
      new: true,
    })
      .then((result) => {
        console.log(result);
        res.json({
          data: result,
          message: "Data successfully updated!",
        });
        console.log(result);
        console.log(newdata);
        console.log(patientId);
      })
      .catch((err) => {
        return next(err);
      });
  });

patientdetailExpressRoute
  .route("/:id")
  .all(cors(corsOptionsDelegate))
  .get(async (req, res, next) => {
    const { id } = req.params;
    console.log(id);
    const data = await PatientdetailSchema.findById(id);
    // console.log(data)
    res.send(data);
  });
patientdetailExpressRoute.route("/adduser").post(async (req, res, next) => {
  const newPatient = new PatientdetailSchema(req.body);

  try {
    const savedPatient = await newPatient.save();
    res.status(201).json({
      data: savedPatient,
      message: "Data successfully added!",
    });
  } catch (error) {
    next(error);
  }
});

//   patientdetailExpressRoute.route('/')
module.exports = patientdetailExpressRoute;
