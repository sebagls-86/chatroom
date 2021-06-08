const chatController = require('./chatController')

const {
    Socket
} = require("dgram")
let express = require("express")
const {
    mongoose
} = require("mongoose")
let app = express()
let http = require('http').Server(app)
let io = require('socket.io')(http)
const cors = require('cors')

require('dotenv').config()
require('./database')
app.use(cors())

app.use('', require('./routerChats'))

app.use(express.static(__dirname))
app.use(express.json());
app.use(express.urlencoded({ extended: true} ));



io.on('connection', (socket) => {

    console.log('user connected')
})

let server = http.listen(3010, () => {
    console.log("Server listening on port ", server.address().port)
})