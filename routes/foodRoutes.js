const express = require("express");
const router = express.Router();

const {
  createFoodItem,
  getAllFoodItems,
  getFoodItemById,
  updateFoodItemById,
  deleteFoodItemById,
} = require("../controllers/foodController");

// Routes for food items
router.get("/", getAllFoodItems);
router.get("/:id", getFoodItemById);
router.post("/", createFoodItem);
router.put("/:id", updateFoodItemById);
router.delete("/:id", deleteFoodItemById);

module.exports = router;
