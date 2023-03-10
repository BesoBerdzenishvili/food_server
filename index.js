require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
const PORT = process.env.PORT || 7400;

// Connect to the database
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.log("Error connecting to the database:", error.message);
  });

// Middleware
app.use(express.json());

// Routes
const foodRoutes = require("./routes/foodRoutes");
const searchRoutes = require("./routes/searchRoutes");

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use("/api/foods", foodRoutes);
app.use("/api/search", searchRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
