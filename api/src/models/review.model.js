const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: String,
  date: {
    type: Date,
    default: Date.now,
  },
  reviewerName: String,
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Host",
    required: true,
  },
  place: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Place",
    required: false,
  },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
