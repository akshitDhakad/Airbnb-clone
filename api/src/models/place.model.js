const mongoose = require("mongoose");
const { Schema } = mongoose;

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
    placeType: {
      type: String,
      lowercase: true,
      trim: true,
      required: [true, "Place Type is required"],
    },
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
  },
  { timestamps: true }
);

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;
