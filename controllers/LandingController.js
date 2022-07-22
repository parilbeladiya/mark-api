const express = require('express');

const recordRoutes = express.Router();
const connetToMongoDB = require('../lib/db');

recordRoutes.get('/mark', async (req, res) => {
  const client = await connetToMongoDB();
  const nameOfMark = req.query.name;

  if (nameOfMark && nameOfMark.length > 1) {
    const result = await client
      .db('Marketing')
      .collection('Marketing_Details')
      .findOne({ name: nameOfMark });

    if (result) {
      res.send(result);
    } else {
      res.send(`No Record Found '${nameOfMark}'`);
    }
  } else {
    res.send('Error occured, Please pass name for get data');
  }
});

module.exports = recordRoutes;
