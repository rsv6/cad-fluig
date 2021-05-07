require('dotenv/config')
const conn = require(process.env.PTH_CONN)

// List all MOTIVO:
const get = async (req, res) => {

    const sql = `SELECT id, descricao FROM motivo`

    await conn.query(sql, (err, result) => {
      if(err) return console.log(err.message)

      const data = result.recordset
      console.log(`Accessed route ${req.url}`)
      res.json(data)
    })
}

// Create new MOTIVO:
const post = async (req, res) => {
  
  const data = req.body
  console.log(data.descricao)
  const sql = `INSERT INTO motivo (id.serv, descricao)
    VALUES (${data.id_serv}, ${data.descricao})`

    await conn.query(sql, (err) => {
      if(err) return console.log(rr.message)

      console.log(`Accessed route: ${data} - method: POST`)
      console.log(`Servico: ${data.descricao} add successfully!`)
      res.end()
    })
}

// Delete a single MOTIVO:
const del = async (req, res) => {

  const id = req.params.id
  console.log(id)
  const sql = `DELETE FROM motivo WHERE motivo.id = ${id}`

  await conn.query(sql, (err) => {
    if(err) return console.log("Error in query SQL: ", err.message)

    console.log(`Accessed route: ${id} - method: POST`)
    console.log(`Motivo: ${id} deleted with successfully!`)
    res.end()
  })
}

module.exports = {
  get,
  post,
  del
}