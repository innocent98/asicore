const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    address: { type: String },
    balance: { type: Number, default: 0 },
    referred: { type: Number, default: 0 },
    referredList: { type: Array },
    reward: { type: Number, default: 0 },
    telegram: { type: String },
    telegram_channel: { type: String },
    twitter: { type: String },
    link: { type: String },
    youtube: {type: String}
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
