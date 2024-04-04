const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  address: { type: String, required: true },
  description: { type: String, required: true },
  imgURLs: [String], // Array of image URLs
  extras: [String], // Array of extras
  details: {
    type: { type: String, required: true },
    beds: { type: String, required: true },
    bedrooms: { type: String, required: true },
    guests: { type: String, required: true },
    price: { type: String, required: true },
    checkin: { type: String, required: true },
    checkout: { type: String, required: true },
    bed: { type: String, required: true },
    Number: { type: String, required: true },
  },
});

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;
