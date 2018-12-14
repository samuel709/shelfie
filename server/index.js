const express = require('express')
const massive = require('massive')
const bodyParser = require('body-parser')
require('dotenv').config()
const controller = require('./controller')
const {PORT, CONNECTION_STRING} = process.env;

const app = express()
app.use(bodyParser.json());

app.get('/api/inventory', controller.getInventory)
app.post('/api/product', controller.addProduct)

massive(CONNECTION_STRING).then(connection => {
    app.set('db', connection)
    app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)})
}).catch(err => {console.log(err)})
