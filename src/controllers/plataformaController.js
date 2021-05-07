require('dotenv/config')
const conn = require(process.env.PTH_CONN)

// List all PLATAFORMA:
const get = async (req, res) => {
  
  const sql = 'SELECT id, descricao FROM plataforma'
  await conn.query(sql, (err, result) => {
    if(err) return console.log(err.message)

    const data = result.recordset
    console.log(`Accessed route: ${req.url}`)
    res.json(data)
  })
}

// Create new PLATAFORMA:
const post = async (req, res) => {

  const data = req.body
  const sql = `INSERT INTO plataforma (descricao) VALUES ('${data.descricao}')`

  await conn.query(sql, (err) => {
    if(err) return console.log("Erro do banco: ",err.message)

    console.log(`Accessed route: ${data} - method: POST`)
    console.log(`Plataforma: ${data.descricao} add successfully!`)
    res.json(data)
  })
}

// Delete a single PLATAFORMA:
const del = async (req, res) => {

  const id = req.params.id
  console.log(id)
  const sql = `DELETE FROM plataforma WHERE plataforma.id = ${id}`

  await conn.query(sql, (err) => {
    if(err) return console.log("Error in query SQL: ",err.message)

    console.log(`Accessed route: ${id} - method: POST`)
    console.log(`Plataforma: ${id} deleted with successfully!`)
    res.end()
  })
}

module.exports = {
  get,
  post,
  del
}