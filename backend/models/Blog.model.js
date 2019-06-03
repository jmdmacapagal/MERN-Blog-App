const mongoose = require('mongoose')
const Schema = mongoose.Schema

let BlogPost = new Schema({
    title: {
        type: String
    },
    body: {
        type: String
    },
    author: {
        type: String
    },
    createdAt: {
        type: Number,
        default: Date.now
    }
    // updatedAt: {
    //     type: Date
    // }
})

 module.exports = mongoose.model('BlogPost', BlogPost)