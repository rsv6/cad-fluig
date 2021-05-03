require('dotenv/config')
const router = require('express').Router()

router.post('/api/post', require(process.env.PTH_CTRL+'insertController.js').post)

module.exports = router