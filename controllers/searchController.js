const Food = require("../models/foodSchema");

// Search for food items
const searchForFoodItems = async (req, res) => {
  try {
    const searchTerm = req.query.query;
    const foodItems = await Food.find({
      $or: [
        { name: { $regex: searchTerm, $options: "i" } },
        { description: { $regex: searchTerm, $options: "i" } },
      ],
    });
    res.status(200).json(foodItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  searchForFoodItems,
};
