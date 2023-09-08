const router = require("express").Router()

const userRoute = require("./user")

router.use("/api/v2/user", userRoute)

module.exports = router;