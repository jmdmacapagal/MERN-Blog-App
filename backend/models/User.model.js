const mongoose = require('mongoose')
const Schema = mongoose.Schema


let User = new Schema({
    username: {
        type: String,
        required: true,
        min: 6,
        max: 20
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 40
    },
    email: {
        type: String,
        required: true,
        min: 10,
        max: 50
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', User)