const express = require('express')
const bodyParser = require('body-parser')
const http = require('http')
const WebSocket = require('ws')
// file to save all messages
const messages = require('./messages.json')

const app = express()

// init simple http server
const server = http.createServer(app)

// init websocket server
const wss = new WebSocket.Server({ server })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// api for send message
app.post('/send', (req, res) => {
  // connect to websocket server
  const ws = new WebSocket('ws://localhost:8080/')
  
  // check if connected
  ws.on('open', () => {
    // send the message to websocket server
    ws.send(req.body.message)

    // send response 200 OK
    res.status(200).send({message: 'OK'})
  })
})

// api for read all messages
app.get('/messages', (req, res) => {
  res.send(messages)
})

wss.on('connection', (ws) => {
  // event to read incoming message
  ws.on('message', (message) => {
    // send message to all client that have opened connection
    // we can pick targeted client here, but need another parameter on message
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message)
      }
    })
    // save message to file
    messages.push(message)
  })
})

// start express app
app.listen(3000)
// start websocket server
server.listen(8080)