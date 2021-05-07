require('dotenv/config')
const router = require('express').Router()

router.get('/motivo', require(process.env.PTH_CTRL+'motivoController.js').get)
router.post('/motivo', require(process.env.PTH_CTRL+'motivoController.js').post)
router.get('/motivo:id', require(process.env.PTH_CTRL+'motivoController.js').del)

module.exports = router
   