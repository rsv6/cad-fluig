require('dotenv/config')
const conn = require(process.env.PTH_CONN)

// List all SERVICO:
const get = async (req, res) => {
  const sql = `SELECT id, descricao FROM servico`

  await conn.query(sql,(err, result) => {
    if(err) return console.log(err.message)
    
    const data = result.recordset
    console.log(`Accessed route: ${req.url}`)
    res.json(data)
  })

}

// Create new SERVICO:
const post = async (req, res) => {

  const data = req.body
  console.log(data.descrica)
  const sql = `INSERT INTO servico (id_platf, descricao)
    VALUES (${data.id}, ${data.descricao})`
  
    await conn.query(sql, (err) => {
      if(err) return console.log(err.message)

      console.log(`Accessed route: ${data} - method: POST`)
      console.log(`Servico: ${data.descricao} add successfully!`)
      res.end()
    })
}

// Delete a single SERVICO:
const del = async (req, res) =>{

  const id = req.params.id
  console.log(id)
  const sql = `DELETE FROM servico WHERE servico.id = ${id}`
  
  await conn.query(sql, (err) => {
    if(err) return console.log("Error in query SQL: ", err.message)

    console.log(`Accessed route: ${id} - method: POST`)
    console.log(`Servico ${id} deleted with successfully!`)
    res.end()
  })
}

// const put = async (req, res) => {
//   // Get data request post via fetch or axios by client:
//   const data = {
//     item: req.body.item,
//     id: req.body.id
//   }

//   const sql = `UPDATE servico SET servico.descricao = ${data.item} WHERE servico.id = ${data.id}`
//   await conn.query(sql, (err) => {
//     if(err) return console.log(err.message, data.item)

//     console.log(`Accessed route: ${req.url}`)
//     console.log('Item Updated Successfully!')
//     res.json({ msg: 'Item Updated Successfully!'})
//   })
// }

module.exports = { 
  get,
  post,
  del
}
