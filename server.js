
let express = require("express")
let app = express()
let http = require('http').Server(app)
const socket = require('./socket')
const cors = require('cors')

require('dotenv').config()
require('./database')
const router = require('./routes')
app.use(cors())

app.use(express.static(__dirname))
app.use(express.json());
app.use(express.urlencoded({ extended: true} ));

socket.connect(http)
router(app)



let server = http.listen(3010, () => {
    console.log("Server listening on port ", server.address().port)
})



