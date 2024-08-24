const mongoose = require("mongoose");
const { Schema } = mongoose;

const imageSchema = new mongoose.Schema({
  url: { type: String, required: true },
  description: { type: String, required: false },
});

// Schema for sections that can contain multiple images (e.g., Bedroom, Kitchen)
const sectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  images: [imageSchema],
});

const placeSchema = new Schema(
  {
    placeName: {
      type: String,
      lowercase: true,
      trim: true,
      required: [true, "Title Name is required"],
    },
    placeAddress: {
      type: String,
      lowercase: true,
      trim: true,
      required: [true, "Address  is required"],
    },

    type: {
      type: String,
      lowercase: true,
      trim: true,
      required: [true, "Place Type is required"],
    },
    images: [sectionSchema],
    pricePerNight: { type: Number, required: true },
    features: [
      {
        name: { type: String, required: true },
        available: { type: Boolean, default: true }, // Availability status
      },
    ],

    placeDescription: {
      type: String,
      lowercase: true,
      trim: true,
      required: [true, "Description is required"],
    },

    host: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Host",
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
  },
  { timestamps: true }
);

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;
