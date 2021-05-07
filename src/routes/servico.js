require('dotenv/config')
const router = require('express').Router()

router.get('/servico', require(process.env.PTH_CTRL+'servicoController.js').get)
router.post('/servico', require(process.env.PTH_CTRL+'servicoController.js').post)
router.delete('/servico/:id', require(process.env.PTH_CTRL+'servicoController.js').del)

module.exports = router