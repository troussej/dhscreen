import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import * as socket from './src/sockets/socket';
import { UserService } from './src/services/user';

const PORT = 5000;
const app = express();
const httpServer = new http.Server(app);
const io = new Server(httpServer, { cors: { origin: '*' } });

io.on('connection', (client: any) => {
    io.emit('users-online', UserService.getUserList());

    socket.disconnectClient(client, io);
    socket.addUserOnline(client, io);
    socket.removeUserOnline(client, io);
    socket.sendMessage(client, io);
    socket.rollDice(client, io);
});

httpServer.listen(PORT, () => {
    console.log(`Server listen on port ${PORT}`);
});