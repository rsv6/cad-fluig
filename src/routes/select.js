require('dotenv/config')
const router = require('express').Router()

router.get('/api/get', require(process.env.PTH_CTRL+'selectController.js').get)

module.exports = router