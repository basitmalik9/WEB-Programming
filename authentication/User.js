const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
     name: {

     },
     email: {

     },
     phone: {

     },
     password: {

     },
}, {timestamps: true})


const User = mongoose.model('User', userSchema)

module.exports = User
