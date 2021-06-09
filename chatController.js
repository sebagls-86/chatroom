const Chats = require('./chatModel')

require('./server')

const {socket} = require('./socket')

var messages = [{}]

const addChat = async (message) => {
        
    let newMessage = new Chats(message)
    
    await newMessage.save((err)=> {
        
        messages.push(newMessage)
      
        console.log("pushea", messages)

        socket.io.emit('message', newMessage)
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