const mongoose = require("mongoose");
const validator = require("validator");
const { DEFAULT_PROFILE_PHOTO } = require("../utils/constants");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxLength: 100,
      minLength: 5,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim: true,
      max: 255,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid Email");
        }
      },
    },
    password: {
      type: String,
      required: true,
      maxLength: 128
    },
    userPhoto: {
      type: String,
      default: DEFAULT_PROFILE_PHOTO,
      validate(value) {
        if (!validator.isURL(value)) {
          throw new Error("Invalid URL");
        }
      },
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;