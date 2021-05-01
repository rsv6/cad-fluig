require('dotenv/config')
const app = require('./config')

const connection = require('./src/infra/conn/conn')

connection.connect(err => {
  if(err) {
    console.log('Connection could not be established!!!')
    throw err
  }else{
    console.log('Connection successfully established!!!')
    app()
  }
})