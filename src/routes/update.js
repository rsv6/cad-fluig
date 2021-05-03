require('dotenv/config')
const router = require('express').Router()

router.put('/api/put', require(process.env.PTH_CTRL+'updateController.js').put)

module.exports = router