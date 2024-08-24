const mongoose = require("mongoose");

const hostSchema = new mongoose.Schema({
  profile: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  identityVerified: {
    type: Boolean,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },

  reviews: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  birthYear: {
    type: Number,
    required: true,
  },
  school: {
    type: String,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  guestPolicy: {
    type: String,
    default: "Ready to cater to any possible requirement",
  },
  uniqueHomeFeature: {
    type: String,
    required: true,
  },
  hobbies: {
    type: [String],
    default: ["Work", "Music", "Travel"],
  },
  favoriteSong: {
    type: String,
    required: true,
  },
  languages: {
    type: [String],
    default: ["English", "Hindi"],
  },
  biographyTitle: {
    type: String,
    default: "Travel Trader",
  },
  obsessions: {
    type: [String],
    default: ["Work", "South Indian meal"],
  },
  location: {
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  breakfastPreferences: {
    type: [String],
    default: ["South Indian breakfast", "Poha", "Upma"],
  },
  welcomeMessage: {
    type: String,
    required: true,
  },
  places: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Place",
    },
  ],
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

module.exports = mongoose.model("Host", hostSchema);
