const router = require("express").Router();
const User = require("../models/User");
const Withdraw = require("../models/Withdraw");
const Twit = require("twit");
const dotenv = require("dotenv");
const axios = require("axios");
const OAuth = require("oauth-1.0a");
const { TwitterApi } = require("twitter-api-v2");
// const TwitterApi = "twitter-api-v2";

dotenv.config();

// register for airdrop
router.post("/register", async (req, res) => {
  try {
    const user = await User.findOne({ address: req.body.address });
    const query = await User.findOne({ _id: req.query._id });
    // res
    //   .status(200)
    //   .json("PHASE I Airdrop has ended.");

    if (!user) {
      if (req.query._id && query) {
        const newUser = new User({
          address: req.body.address,
          telegram: req.body.telegram,
          twitter: req.body.twitter,
          link: req.body.link,
          balance: 100,
        });
        await newUser.save();
        if (!query.referredList.includes(newUser.id)) {
          await query.updateOne({ $inc: { reward: query.referred + 10 } });
          await query.updateOne({ $push: { referredList: newUser.id } });
        }
        res.status(200).json(newUser);
      } else {
        const newUser = new User({
          address: req.body.address,
          telegram: req.body.telegram,
          twitter: req.body.twitter,
          link: req.body.link,
          balance: 100,
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

// // claim airdrop
// router.put("/claim_airdrop", async (req, res) => {
//   try {
//     // const user = await User.findById(req.params.id);

//     // Twitter API configuration
//     const twitterCredentials = new Twit({
//       consumer_key: process.env.api_key,
//       consumer_secret: process.env.api_secrete,
//       access_token: process.env.access_token,
//       access_token_secret: process.env.access_token_secret,
//       client_id: process.env.client_id,
//       client_secret: process.env.client_secret,
//     });

//     // const oauth = OAuth({
//     //   consumer: {
//     //     key: twitterCredentials.consumer_key,
//     //     secret: twitterCredentials.consumer_secret,
//     //   },
//     //   signature_method: "HMAC-SHA1",
//     //   hash_function(base_string, key) {
//     //     // Implement HMAC-SHA1 hashing function here
//     //     // Example implementation using crypto:
//     //     const crypto = require("crypto");
//     //     const hmac = crypto.createHmac("sha1", key);
//     //     hmac.update(base_string);
//     //     return hmac.digest("base64");
//     //   },
//     // });

//     const screenName = "Solomola1";
//     const oauth_token = process.env.access_token;

//     const userClient = new TwitterApi({
//       appKey: process.env.consumer_key,
//       appSecret: process.env.consumer_secret,
//       // Following access tokens are not required if you are
//       // at part 1 of user-auth process (ask for a request token)
//       // or if you want a app-only client (see below)
//       accessToken: process.env.access_token,
//       accessSecret: process.env.access_token_secret,
//     });

//     const appOnlyClient = new TwitterApi(process.env.bearer);

//     const twitterClient = new TwitterApi('1550095491907690497-9kVTXf7CWhLPcHwR5juZYHJAhSLVtf');
//     const readOnlyClient = twitterClient.readOnly;
//     // const user = await readOnlyClient.v2.userByUsername("Gator_Inu");
//     console.log( appOnlyClient);

//     // const requestData = {
//     //   url: `https://api.twitter.com/1.1/followers/ids.json?screen_name=${screenName}`,
//     //   method: "GET",
//     // };
//     // const headers = oauth.toHeader(oauth.authorize(requestData, oauth_token));

//     // // if (user) {

//     // axios
//     //   .get(requestData.url, { headers })
//     //   .then((response) => {
//     //     console.log("Follower IDs:", response.data.ids);
//     //   })
//     //   .catch((error) => {
//     //     console.error("Error:", error.response.data);
//     //   });

//     // const res = await axios.get(
//     //   `https://api.twitter.com/1.1/followers/ids.json?screen_name=${screenName}`,
//     //   {
//     //     headers: {
//     //       authorization: `Bearer ${process.env.bearer}`,
//     //     },
//     //   }
//     // );

//     // console.log(res.data);
//     // const twitterUser = await twitterCredentials.get('users/show', { screen_name: screenName });
//     // console.log(twitterUser)
//     // const isFollowing = twitterUser.data.following;

//     // console.log(isFollowing)

//     // // Get the user ID of the specific Twitter user
//     // twitterCredentials.get(
//     //   "users/show",
//     //   { screen_name: screenName },
//     //   (err, data, response) => {
//     //     if (err) {
//     //       console.error("Error getting user data:", err);
//     //       return;
//     //     }

//     //     // User ID of the specific Twitter user
//     //     const specificUserId = data.id_str;

//     //     // Get the list of follower IDs for your Twitter account
//     //     twitterCredentials.get(
//     //       "followers/ids",
//     //       { screen_name: screenName },
//     //       (err, data, response) => {
//     //         if (err) {
//     //           console.error("Error getting follower IDs:", err);
//     //           return;
//     //         }

//     //         // Check if the specific user's ID is in the list of follower IDs
//     //         const followerIds = data.ids;
//     //         const isFollowing = followerIds.includes(specificUserId);

//     //         if (isFollowing) {
//     //           console.log(
//     //             `@${screenName} is following your Twitter account.`
//     //           );
//     //         } else {
//     //           console.log(
//     //             `@${screenName} is not following your Twitter account.`
//     //           );
//     //         }
//     //       }
//     //     );
//     //   }
//     // );

//     // if (!isFollowing) {
//     //   return res.status(400).json({ message: 'You must follow the account to complete the task' });
//     // }
//     // }
//   } catch (error) {
//     console.log(error);
//   }
// });

router.get("/", async (req, res) => {
  try {
    const user = await User.find();
    const referral = user.split(0, 100000).filter((item) => {
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

router.get("/user/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json("Not found!");
    }
  } catch (err) {
    console.log(err);
  }
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
