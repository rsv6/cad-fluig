require('dotenv/config')
// const conn = require(process.env.PTH_CONN)

const del = async (req, res) => {

  console.log(`Accessed route: ${req.url}`)
  res.send("<h1><center>Hello, <span style='color:blue'>route for delete item!</span> We are in development!</center></h1>")
}

module.exports = del