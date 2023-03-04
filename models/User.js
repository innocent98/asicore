const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    address: { type: String },
    balance: { type: Number, default: 0 },
    referred: { type: Number, default: 0 },
    reward: { type: Number, default: 0 },
    telegram: { type: String },
    twitter: { type: String },
    link: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
