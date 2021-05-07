require('dotenv/config')
const router = require('express').Router()

router.get('/plataforma', require(process.env.PTH_CTRL+'plataformaController.js').get)
router.post('/plataforma', require(process.env.PTH_CTRL+'plataformaController.js').post)
router.delete('/plataforma/:id', require(process.env.PTH_CTRL+'plataformaController.js').del)

module.exports = router