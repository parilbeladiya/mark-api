const express = require("express");
const router = express.Router();

router.use("/", require("../controllers/LandingController"));

module.exports = router;
