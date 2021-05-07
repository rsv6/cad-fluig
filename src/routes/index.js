const router = require('express').Router()

// HOME:
router.get('/', (req, res) => {
  console.log(`Accessed route: ${req.url}`)
    res.send(`<h1><center>Hello, welcome to 
    <span style='color:blue'>API-DATA-FLUIG!</span> 
    We are in development!</center></h1>`)
})

// ROUTES OF API:
router.use('/', require('./plataforma'))
router.use('/', require('./servico'))
// router.use('/', require('./motivo'))

module.exports = router