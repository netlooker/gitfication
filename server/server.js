const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const bodyParser = require('body-parser');
const fs = require('fs');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');

var app = express();
app.use(bodyParser.json());

app.post('/webhooks', (req, res) => {
    fs.writeFileSync(`${publicPath}/data.json`, JSON.stringify(req));
    if (req.body.operation === 'play') {
        console.log(req.body);
        io.emit('playSound');
    }
});

var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

server.listen(port, () => {
    console.log(`Server is up on port: ${port}`);
});
