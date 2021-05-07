const express = require('express')
const app = express()
const cors = require("cors")
require('dotenv/config')

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

module.exports = () => {

  // Then pass these options to cors:
  app.use(cors(corsOptions));

  app.use(express.json()) // for parsing application/json
  app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded  `

  app.use(require('../src/routes'))
  app.listen(process.env.SRV_PORT, console.log(`Server runnnig on port ${process.env.SRV_PORT}`))

  return app
}