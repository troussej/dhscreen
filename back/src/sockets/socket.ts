import socketIO, { Socket } from 'socket.io';
import { UserService } from '../services/user';

import { RollRequest, RollResult } from '../models/dice.model';
import { DiceRollService } from '../services/diceroll.service';

export const disconnectClient = (client: Socket, io: socketIO.Server) => {
    client.on('disconnect', () => {
        UserService.removeUser(client.id);
        io.emit('users-online', UserService.getUserList());
    });
};

export const addUserOnline = (client: Socket, io: socketIO.Server) => {
    client.on('add-user', (payload) => {
        payload.id = client.id;
        UserService.addUser(payload);
        io.to(client.id).emit('user-id', client.id);
        io.emit('users-online', UserService.getUserList());
    });
};
export const removeUserOnline = (client: Socket, io: socketIO.Server) => {
    client.on('exit', () => {
        UserService.removeUser(client.id);
        io.emit('users-online', UserService.getUserList());
    });
};

export const sendMessage = (client: Socket, io: socketIO.Server) => {
    client.on('send-message', (payload) => {
        payload.senderId = client.id;
        payload.sender = UserService.getUserName(client.id);
        payload.date = new Date();
        io.emit('receive-message', payload);
    });
};

export const rollDice = (client: Socket, io: socketIO.Server) => {
    client.on('send-roll', (payload: RollRequest) => {
        const roll = DiceRollService.roll(client.id, payload);
        io.emit('receive-roll', roll);
    });

};