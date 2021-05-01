require('dotenv/config')
const router = require('express').Router()

router.get('/', require(process.env.PTH_CTRL+'indexController.js').get)

module.exports = router