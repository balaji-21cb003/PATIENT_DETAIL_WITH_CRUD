const express = require("express");
// const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

//connecting databasee
async function mongoDbConnection() {
  await mongoose.connect("mongodb://127.0.0.1:27017/techhives", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

mongoDbConnection().then(() => {
  console.log("MongoDB successfully connected.");
}),
  (error) => {
    console.log("Could not connect to the database: " + error);
  };

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
  bodyParser.json()
);

// CORS
app.use(cors());

//  Define a route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/doctor", require("./route/doctorroute"));
app.use("/patientdetail", require("./route/patientdetailroute"));

// PORT
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("Server listening on port: " + port);
});

// Find 404 and hand over to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
