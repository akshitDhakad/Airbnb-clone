const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    ProductName: {
      type: String,
      lowercase: true,
      trim: true,
      required: [true, "Title Name is required"],
    },
    productAddress: {
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
    prouductType: {
      type: String,
      lowercase: true,
      trim: true,
      required: [true, "Place Type is required"],
    },
    productDescription: {
      type: String,
      lowercase: true,
      trim: true,
      required: [true, "Description is required"],
    },
    productPrice: {
      type: String,
      lowercase: true,
      trim: true,
      required: [true, "Price is required"],
    },
    productImage: {
      tumnail: [String],
      imgs: [String],
      required: [true, "Image is required"],
    },
    productProperty: {
      type: Map,
      of: String, 
      required: true,
    },
    productServices: {
      type: Map,
      of: String, 
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    productPark :{
        type: Boolean,
        ref: "Park",
        required: true,
    },
    
    productHoster:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
