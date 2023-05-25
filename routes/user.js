const User = require("../models/User");
const Withdraw = require("../models/Withdraw");

const router = require("express").Router();

// register for airdrop
router.post("/register", async (req, res) => {
  try {
    const user = await User.findOne({ address: req.body.address });
    const query = await User.findOne({ _id: req.query._id });
    res
      .status(200)
      .json("PHASE I Airdrop has ended.");
    // if (!user) {
    //   if (req.query._id && query) {
    //     const newUser = new User({
    //       address: req.body.address,
    //       telegram: req.body.telegram,
    //       twitter: req.body.twitter,
    //       link: req.body.link,
    //       balance: 1000,
    //     });
    //     await newUser.save();
    //     if (!query.referredList.includes(newUser.id)) {
    //       await query.updateOne({ $set: { referred: query.referred + 1000 } });
    //       await query.updateOne({ $push: { referredList: newUser.id } });
    //     }
    //     res.status(200).json(newUser);
    //   } else {
    //     const newUser = new User({
    //       address: req.body.address,
    //       telegram: req.body.telegram,
    //       twitter: req.body.twitter,
    //       link: req.body.link,
    //       balance: 1000,
    //     });
    //     await newUser.save();
    //     res.status(200).json(newUser);
    //   }
    // } else {
    //   res.status(200).json(user);
    // }
  } catch (err) {
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const user = await User.find();
    const referral = user.split(0,100000).filter((item) => {
      if (item.balance === 1000) {
        // return item.referred;
        item.balance = 0; // Update the referred property of the user
        return true; // Return true to keep the user in the filtered array
      }
      return false; // Return false to exclude the user from the filtered array
    });
    // Save the updated users
    await Promise.all(referral.map((user) => user.save()));

    // get total sum of referred users
    const totalReferred = referral.reduce(
      (sum, user) => sum + user.referred,
      0
    );

    res.status(200).json(referral);
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

// withdraw
router.post("/core-withdraw", async (req, res) => {
  try {
    const user = await User.findOne({ address: req.body.address });
    if (user) {
      if (user.balance > 0) {
        const newWithdraw = new Withdraw({
          address: req.body.address,
          telegram: user.telegram,
          twitter: user.twitter,
          link: user.link,
          balance: user.balance,
          referred: user.referred,
        });
        await newWithdraw.save();
        await user.updateOne({ $set: { referred: 0 } });
        await user.updateOne({ $set: { balance: 0 } });
        res
          .status(200)
          .json("Withdraw successful! Kindly wait for disbursement");
      } else {
        res.status(400).json("Balance not sufficient!");
      }
    } else {
      res.status(404).json("Account not found!");
    }
  } catch (err) {
    res.status(500).json("Internal server error");
  }
});

// mark withdraw done
router.put("/mark-paid/:id", async (req, res) => {
  try {
    const withdrawId = await Withdraw.findById(req.params.id);
    if (withdrawId) {
      await withdrawId.updateOne({ $set: { isPaid: true } });
      res.status(200).json("Successfully disbursed!");
    } else {
      res.status(404).json("Account not found!");
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

// get withdraw
router.get("/withdraw/all", async (req, res) => {
  try {
    const withdraw = await Withdraw.find();
    res.status(200).json(withdraw);
  } catch (err) {
    res.status(500).json("Internal server error");
  }
});

module.exports = router;
