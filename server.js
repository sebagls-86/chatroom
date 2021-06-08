let express = require("express")
const db = require('mongoose');
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


var Message = db.model('chat', new db.Schema ({

name: String,
message: String

}))

app.get('/messages', (req, res) => {

    res.send(messages)

})


app.post('/messages', (req, res) => {

    var message = new Message(req.body)
    message.save((err) => {

        if(err) sendStatus(500)
    
    
    messages.push(req.body)


    io.emit('message', req.body)
    res.sendStatus(200)

    })

})

io.on('connection', (socket) => {

    console.log('user connected')


})


let server = http.listen(3010, () => {


    console.log("Server listening on port ", server.address().port)

})

const dbUrl = 'mongodb+srv://sr_sebastian:Sebastiang1103.@cluster0.bg8qj.mongodb.net/chatroom?retryWrites=true&w=majority'

async function connect() {
    await db.connect(dbUrl, {
        useNewUrlParser: true
    });
    console.log('[DataBase] Conectada con exito!!', dbUrl)
}

connect()