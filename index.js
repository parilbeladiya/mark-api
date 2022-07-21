const express = require("express");
const app = express();
const path = require('path');
const port = 3001;
const connetToMongoDB = require('./lib/db');
const apiRoutes = require('./routes/api');


connetToMongoDB();

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use('/api', apiRoutes);

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  