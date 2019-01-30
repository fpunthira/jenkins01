const express = require('express')
var app = express()
const DB = require('./hello')

//let DB01 = new DB()

//DB01.getData(DB01.pool)

app.get('/', (req,res) => {
    res.send('Hello Express')
})

app.listen(3000)
