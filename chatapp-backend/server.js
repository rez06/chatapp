const express = require('express');
const app = express();
const  userRoutes = require('./routes/userRoutes')
//chat rooms
const rooms = ['general', 'tech', 'finance', 'groups'];
const cors = require('cors');

//this will allow the backend and frontend communication
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/users', userRoutes)
//connection the connection.js
require('./connection');

//creating server
const server = require('http').createServer(app);
const PORT = 5001;
//the socket.io is used to be able to communicate between the server and the client
const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
})

server.listen(PORT, () => {
    console.log('listening to port', PORT)
})


