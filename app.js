const express = require ('express')
const app = express()

const http = require('http')
const server = http.createServer(app)

app.use(express.static(__dirname+'/'));

const {Server} = require('socket.io')
const io = new Server(server)

io.on('connection', (socket) => {
    // Procedimiento 4:
   socket.on('chat', (msg) => {
        io.emit('chat', msg)
    })
})

app.get('/', (req, resp) => {
    resp.sendFile(`${__dirname}/chat_view.html`)
})

server.listen(5000,() => {
    console.log('Servidor corriendo en http://localhost:5000')
})