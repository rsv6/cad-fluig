require('dotenv/config')
const router = require('express').Router()

router.get('/api/select', require(process.env.PTH_CTRL+'selectAllController.js').get)

module.exports = router