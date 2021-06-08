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


//var dbUrl = 'mongodb+srv://sr_sebastian:Sebastiang1103.@cluster0.bg8qj.mongodb.net/chatroom?retryWrites=true&w=majority'

//var Message = mongoose.model('Message', {

//    name: String,
//    message: String

// })

var messages = [
{name: "Jhon", message: "Hola"}

]


app.get('/messages', (req, res) => {
//Message.find({}, (err, messages) => {

    res.send(messages)
//})
    

})


app.post('/messages', (req, res) => {

   messages.push(req.body)
   
        io.emit('message', req.body)
        res.sendStatus(200)
   
})

io.on('connection', (socket) => {

    console.log('user connected')


})

//mongoose.connect(dbUrl, ()=> {
//    console.log("Conectado")

//})



let server = http.listen(3010, () => {


    console.log("Server listening on port ", server.address().port)

})