const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    type: String,
    amount: Number,
    id_number: Number,
    date: { type: Date, default: Date.now }
  });

  const userSchema = new mongoose.Schema({
    name: String,
    balance: { type: Number, default: 0 },
    transactions: [transactionSchema] // Embeds an array of transaction subdocuments
  });

  module.exports = mongoose.model("User", userSchema);





