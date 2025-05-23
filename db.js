require('dotenv').config();

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB (nme)")) // Success: MongoDB is ready
  .catch(err => console.error("MongoDB connection error:", err)); // Failure: log error