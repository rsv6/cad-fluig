require('dotenv/config')

const get = async (req, res) => {
    console.log(`Accessed route ${req.url}`)
    res.send("<h1><center>Hello, welcome to <span style='color:blue'>API-DATA-FLUIG!</span> We are in development!</center></h1>")
}
module.exports = {
  get
}