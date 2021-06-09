const Chats = require('./chatModel')

require('./server')
let express = require("express")
let app = express()
let http = require('http').Server(app)
let io = require('socket.io')(http)
app.use(express.static(__dirname))
app.use(express.json());
app.use(express.urlencoded({ extended: true} ));

var messages = [{ name: "Nombre", message: "Mensaje" } ]

const chatController = {
   
    loadChats: async (req, res) => {
        
        var message = new Chats(req.body)
        
        console.log(message, "tiene algo")
        
        await message.save((err)=> {
            
            messages.push(req.body)
          
            io.emit('message', req.body)
            res.sendStatus(200)

        })
    },
    listChats: async (req, res) => {

        console.log(messages, "mensajes")
          res.send(messages)
    },
}

module.exports = chatController