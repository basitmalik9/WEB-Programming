const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyparser = require('body-parser')

const Authroute = require('./authentication/authRoute')

mongoose.connect('mongodb://localhost:27017/web-engineering')
const db = mongoose.connection

db.on('error', (err)=>{
    console.log(err)
})

db.once('open',() => {
    console.log('Database Connection Established!')
})


const app = express()

app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extented: true}))
app.use(bodyparser.json())
app.use('./uploads', express.static('uploads'))

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log('Server is running on port ${3000}')
})

app.use('/api', Authroute)
