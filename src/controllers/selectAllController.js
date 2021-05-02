require('dotenv/config')
const conn = require(process.env.PTH_CONN)

const get = async (req, res) => {
  
  const sql = 'SELECT id_platf, id_serv, nome_servico as servico FROM servico'
  await conn.query(sql, (err, result) => {
    if(err) return console.log(err.message)

    const data = result.recordset
    console.log(`Accessed route: ${req.url}`)
    res.json(data)
  })
}

module.exports = {
  get
}