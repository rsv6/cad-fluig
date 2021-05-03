require('dotenv/config')
const router = require('express').Router()

router.get('/api/get/all', require(process.env.PTH_CTRL+'selectAllController.js').get)

module.exports = router