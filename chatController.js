const Chats = require('./chatModel')


const chatController = {

   
    loadChats: async (req, res) => {

        const{name,message} = req.body
        //messages.push(req.body)
        const newChat = new Chats({name,message})
        res.status(200).send({response: await newChat.save()})
    },
    listChats: async (req, res) => {
        
        //const{message} = req.body
        //messages.push(req.body)
        //res.send(message)
 
         
     },

}

module.exports = chatController