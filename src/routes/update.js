require('dotenv/config')
const router = require('express').Router()

router.put('/api/update', require(process.env.PTH_CTRL+'updateController.js').put)

module.exports = router