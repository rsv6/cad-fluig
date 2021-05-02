require('dotenv/config')
const router = require('express').Router()

router.get('/api/select/:id', require(process.env.PTH_CTRL+'selectIdController.js').get)

module.exports = router