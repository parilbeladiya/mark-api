const express = require("express");
const recordRoutes = express.Router();
const connetToMongoDB = require("../lib/db");

recordRoutes.get("/mark", async function (req, res) {
  const client = await connetToMongoDB();
  const nameOfMark = req.header('name');

  const result = await client
    .db("Marketing")
    .collection("Marketing_Details")
    .findOne({ name: nameOfMark });

  if (result) {
    console.log(`Found a Record '${nameOfMark}':`);
    console.log(result);
    res.send(result);
  } else {
    console.log(`No Record Found '${nameOfMark}'`);
  }
});

module.exports = recordRoutes;
