require('dotenv/config')
const router = require('express').Router()

router.delete('/api/delete', require(process.env.PTH_CTRL+'selectAllController.js').del)

module.exports = router