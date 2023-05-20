const mongoose = require("mongoose");

const WalletSchema = new mongoose.Schema(
  {
    address: { type: String },
    balance: { type: Number },
    referred: { type: Number },
    referredList: { type: Array },
    reward: { type: Number },
    telegram: { type: String },
    twitter: { type: String },
    link: { type: String },
    isPaid: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Wallet", WalletSchema);
