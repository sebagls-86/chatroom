const express = require('express')

const chatController = require('./chatController')

const router = express.Router()



router.get('/messages', function (req, res) {
    
    console.log("get")

    chatController.listChats().then((messages) => {

        res.send(messages)
    })

    
})


router.post('/messages', function (req, res) {
    
    console.log("post")
    chatController.addChat(req.body)
    
})



module.exports=router