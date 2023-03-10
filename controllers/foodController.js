const Food = require("../../models/foodSchema");

// Create a new food item
const createFoodItem = async (req, res) => {
  try {
    const newFoodItem = new Food(req.body);
    await newFoodItem.save();
    res.status(201).json(newFoodItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all food items
const getAllFoodItems = async (req, res) => {
  try {
    const foodItems = await Food.find();
    res.status(200).json(foodItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single food item by id
const getFoodItemById = async (req, res) => {
  try {
    const foodItem = await Food.findById(req.params.id);
    if (!foodItem) {
      return res.status(404).json({ error: "Food item not found" });
    }
    res.status(200).json(foodItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a food item by id
const updateFoodItemById = async (req, res) => {
  try {
    const foodItem = await Food.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!foodItem) {
      return res.status(404).json({ error: "Food item not found" });
    }
    res.status(200).json(foodItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a food item by id
const deleteFoodItemById = async (req, res) => {
  try {
    const foodItem = await Food.findByIdAndDelete(req.params.id);
    if (!foodItem) {
      return res.status(404).json({ error: "Food item not found" });
    }
    res.status(200).json({ message: "Food item deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createFoodItem,
  getAllFoodItems,
  getFoodItemById,
  updateFoodItemById,
  deleteFoodItemById,
};
