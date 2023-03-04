const router = require("express").Router()

const userRoute = require("./user")

router.use("/api/user", userRoute)

module.exports = router;