const express = require("express");
const router = express.Router();

const { searchForFoodItems } = require("../controllers/searchController");

// Routes for searching food items
router.get("/", searchForFoodItems);

module.exports = router;
