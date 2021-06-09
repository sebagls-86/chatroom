const mongoose = require('mongoose')

const chatsSchema = new mongoose.Schema({

    name: {type:String, required: true},
    message:{type:String, required: true},
    
})

const Chats = mongoose.model('chats', chatsSchema)

module.exports = Chats


