const Chats = require('./chatModel')


const chatController = {

   
    loadChats: async (req, res) => {

        var message = new Message(req.body)
        message.save((err) => {
    
            if(err) sendStatus(500)
        
        
        messages.push(req.body)
    
    
        io.emit('message', req.body)
        res.sendStatus(200)
        })
    },
    listChats: async (req, res) => {
        
        
         
     },

}

module.exports = chatController