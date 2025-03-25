const express = require("express");
const bidController = require("../controllers/bidController");

const router = express.Router();

router.post("/cars/:carId/bid", bidController.placeBid);

module.exports = router;