const express = require('express')

const chatController = require('./chatController')

const router = express.Router()



router.get('/messages', function (req, res) {
    
    chatController.listChats

    console.log("get")
})


router.post('/messages', function (req, res) {
    
    console.log("post")
    chatController.loadChats
})



module.exports=router