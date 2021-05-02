require('dotenv/config')
const router = require('express').Router()

router.post('/api/insert/:id', require(process.env.PTH_CTRL+'insertController.js').post)

module.exports = router