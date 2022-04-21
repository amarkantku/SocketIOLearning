const http = require('http');
const express = require('express');
const cors = require('cors');
const socketIo = require('socket.io');
const app = express();
const port = process.env.PORT || 3001;
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*",
    }
});

app.use(cors());

app.get('/', function (req, res) {
    res.send('Welcome to socket.io learning')
});

let count = 0;
io.on('connection', function (socket) {
    console.log("Connected succesfully to the socket ...");
    socket.emit('counter updated', count);
    socket.on('counter clicked', () => {
        console.log('button clicked')
        count++;
        io.emit('counter updated', count);
    });

    
    // setInterval(() => {
    //     count++;
    //     io.emit('counter updated', count);
    // }, 500);

    socket.on('disconnect', function () {
        console.log('client disconnected');
     });
});

server.listen(port, () => console.log(`Listening on port ${port}`));