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

app.use(express.static(__dirname))
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))


var messages = [{
        name: "Jhon",
        message: "Hola"
    }

]


app.get('/messages', (req, res) => {

    res.send(messages)

})


app.post('/messages', (req, res) => {

    messages.push(req.body)

    io.emit('message', req.body)
    res.sendStatus(200)

})

io.on('connection', (socket) => {

    console.log('user connected')


})


let server = http.listen(3010, () => {


    console.log("Server listening on port ", server.address().port)

})