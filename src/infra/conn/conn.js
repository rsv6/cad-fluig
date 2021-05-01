require('dotenv/config')
const mssql = require('mssql')

const { DB_HST, DB_USR, DB_PWD, DB_DB } = process.env

module.exports = new mssql.ConnectionPool({
  user: DB_USR,
  password: DB_PWD,
  server: DB_HST,
  database: DB_DB
})