const express = require('express')
const chat = require('./routerChats')

const routes = function(server){

    server.use('/chat', chat)

}

module.exports = routes