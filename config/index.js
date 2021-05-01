const express = require('express')
const app = express()
require('dotenv/config')

module.exports = () => {
  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())

  app.use(require('../src/routes'))
  app.listen(process.env.SRV_PORT, console.log(`Server runnnig on port ${process.env.SRV_PORT}`))

  return app
}