require('dotenv/config')
const router = require('express').Router()

router.get('/api/select/all', require(process.env.PTH_CTRL+'selectAllController.js').get)

module.exports = router