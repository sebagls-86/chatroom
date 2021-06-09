const express = require('express')

const chatController = require('./chatController')

const router = express.Router()

router.route('/messages')
.post(chatController.loadChats)
.get(chatController.listChats)

module.exports=router