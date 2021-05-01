require('dotenv/config')
const env = process.env
const conn = require(env.PTH_CONN)

const get = async (req, res) => {
  
  const sql = 'SELECT * FROM plataforma'
  await conn.query(sql, (err, result) => {
    
    if(err) return console.log(err.message)

    const data = result.recordset

    console.log(`Get data with success!`)
    res.json(data)
  })
}

module.exports = {
  get
}