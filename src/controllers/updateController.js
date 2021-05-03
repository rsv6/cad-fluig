require('dotenv/config')
const conn = require(process.env.PTH_CONN)

const put = async (req, res) => {
  // Get data request post via fetch or axios by client:
  const data = {
    item: req.body.item,
    id: req.body.id
  }

  const sql = `UPDATE servico SET  servico.nome_servico = ${data.item} WHERE servico.id_serv = ${data.id}`
  await conn.query(sql, (err) => {
    if(err) return console.log(err.message, data.item)

    console.log(`Accessed route: ${req.url}`)
    console.log('Item Updated Successfully!')
    res.json({ msg: 'Item Updated Successfully!'})
  })
}

module.exports = { 
  put
}
