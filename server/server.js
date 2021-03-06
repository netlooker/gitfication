const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');

var app = express();
app.use(bodyParser.json());

var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

app.post('/webhooks', (req, res) => {
    if (req.body.commits.length > 0) {
        io.emit('playSound');
    }
});

server.listen(port, () => {
    console.log(`Server is up on port: ${port}`);
});
