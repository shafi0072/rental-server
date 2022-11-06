const mongoose = require("mongoose");

const rentalSchema = mongoose.Schema({
  code: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  availability: {
    type: String,
    require: true,
  },
  needing_repair: {
    type: String,
    require: true,
  },
  durability: {
    type: Number,
    require: true,
  },
  max_durability:{
    type: Number,
    require: true,
  },
  mileage: {
    type: String,
  },
  price: {
    type: String,
    require: true,
  },
  minimum_rent_period: {
    type: String,
    require: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = rentalSchema;
