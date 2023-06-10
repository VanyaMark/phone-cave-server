const { Schema, model } = require("mongoose");
const express = require("express");
const router = express.Router();

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const phoneSchema = new Schema(
  {
    id: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
    },
    manufacturer: {
      type: String,
    },
    description: {
      type: String,
    },
    color: {
      type: String,
    },
    price: {
        type: Number,
    },
    imageFileName: {
      type: String,
    },
    screen: {
      type: String,
    },
    processor: {
      type: String,
    },
    рам: {
      type: Number,
    },
},
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("Phone", phoneSchema);

module.exports = Phone;