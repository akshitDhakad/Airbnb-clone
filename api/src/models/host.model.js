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
    default: false,
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    match: [/\S+@\S+\.\S+/, "is invalid"],
    minlength: [9, "Email can't be less than 9 characters"],
    maxlength: [32, "Email can't be more than 32 characters"],
    required: [true, "Must specify an email"],
    unique: true,
  },
  phone: {
    type: String,
    match: [/^\d{10}$/, "is invalid"],
    required: [true, "Must specify a phone number"],
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
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

hostSchema.methods.verifyIdentity = function () {
  this.identityVerified = true;
  return this.save();
};

module.exports = mongoose.model("Host", hostSchema);
