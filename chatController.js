const Chats = require('./chatModel')

require('./server')
let express = require("express")
let app = express()
let http = require('http').Server(app)
let io = require('socket.io')(http)
app.use(express.static(__dirname))
app.use(express.json());
app.use(express.urlencoded({ extended: true} ));

const chatController = {
   
    loadChats: async (req, res) => {

        var messages = [{ name: "Nombre", message: "Mensaje" } ]

        var message = new Chats(req.body)
        message.save
        messages.push(req.body)
    
        io.emit('message', req.body)
        res.sendStatus(200)
        
    },
    listChats: async (req, res) => {
        
        var messages = [{ name: "Nombre", message: "Mensaje"} ]
        res.send(messages)
         
     },

}

module.exports = chatController