const User = require("../models/User");

const router = require("express").Router();

// register for airdrop
router.post("/register", async (req, res) => {
  try {
    const user = await User.findOne({ address: req.body.address });
    const query = await User.findOne({ _id: req.query._id });
    // console.log(query);
    if (!user && req.query._id && query) {
      const newUser = new User({
        address: req.body.address,
        telegram: req.body.telegram,
        twitter: req.body.twitter,
        link: req.body.link,
        balance: 1000,
      });
      await newUser.save();
      await query.updateOne({ $inc: { referred: query.referred + 1000 } });
      res.status(200).json(newUser);
    } else if (!user) {
      const newUser = new User({
        address: req.body.address,
        telegram: req.body.telegram,
        twitter: req.body.twitter,
        link: req.body.link,
        balance: 1000,
      });
      await newUser.save();
      res.status(200).json(newUser);
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
