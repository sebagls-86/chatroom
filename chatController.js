const Chats = require('./chatModel')

require('./server')
let express = require("express")
let app = express()
let http = require('http').Server(app)
let io = require('socket.io')(http)
app.use(express.static(__dirname))
app.use(express.json());
app.use(express.urlencoded({ extended: true} ));

var messages = [{}]

const addChat = async (message) => {
        
    let newMessage = new Chats(message)
    
    await newMessage.save((err)=> {
        
        messages.push(newMessage)
      
        console.log("pushea", messages)

        io.emit('message', newMessage)
        return "ok"

    })
}
    


const listChats = async () => {

        console.log("ESTOY ACA")


        const messages = await Chats.find()
        console.log("mensajes", messages)
          return messages
}


module.exports = {listChats, addChat}