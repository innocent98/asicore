const User = require("../models/User");

const router = require("express").Router();

// register for airdrop
router.post("/register", async (req, res) => {
  try {
    const user = await User.findOne({ address: req.body.address });
    const query = await User.findOne({ _id: req.query._id });
    if (!user) {
      if (req.query._id && query) {
        const newUser = new User({
          address: req.body.address,
          telegram: req.body.telegram,
          twitter: req.body.twitter,
          link: req.body.link,
          balance: 1000,
        });
        await newUser.save();
        if (!query.referredList.includes(newUser.id)) {
          await query.updateOne({ $set: { referred: query.referred + 1000 } });
          await query.updateOne({ $push: { referredList: newUser.id } });
        }
        res.status(200).json(newUser);
      } else {
        const newUser = new User({
          address: req.body.address,
          telegram: req.body.telegram,
          twitter: req.body.twitter,
          link: req.body.link,
          balance: 1000,
        });
        await newUser.save();
        res.status(200).json(newUser);
      }
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const user = await User.find();
    const referral = user.filter((item) => {
      if (item.referred) {
        return item.referred;
        // item.referred = 10000; // Update the referred property of the user
        // return true; // Return true to keep the user in the filtered array
      }
      // return false; // Return false to exclude the user from the filtered array
    });
    // Save the updated users
    // await Promise.all(referral.map((user) => user.save()));

    // get total sum of referred users
    const totalReferred = referral.reduce(
      (sum, user) => sum + user.referred,
      0
    );

    res.status(200).json(user.length);
  } catch (err) {}
});

// login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ address: req.body.address });
    if (user) {
      res.status(200).json(user);
    } else {
      res
        .status(404)
        .json("Account not found! Please participate in the airdrop first.");
    }
  } catch (err) {
    res.status(500).json("Internal server error");
  }
});

// get user
router.get("/user/:address", async (req, res) => {
  try {
    const user = await User.findOne({ address: req.params.address });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json("Not found!");
    }
  } catch (err) {
    res.status(500).json("Internal server error");
  }
});

module.exports = router;
