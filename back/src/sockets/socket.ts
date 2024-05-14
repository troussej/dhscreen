import socketIO, { Socket } from 'socket.io';
import { UserService } from '../services/user';
import { TrackerService } from '../services/tracker.service';
import { RollRequest, RollResult } from '../models/dice.model';
import { DiceRollService } from '../services/diceroll.service';
import { Message } from '../models/message.model';

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

        const roll = DiceRollService.roll(payload);

        const msg = new Message('',
            client.id,
            UserService.getUserName(client.id),
            new Date(),
            roll
        )
        console.log('roll', roll);
        io.emit('receive-message', msg);
    });

};

export const addFear = (client: Socket, io: socketIO.Server) => {
    client.on('add-fear', () => {

        TrackerService.addFear();
        io.emit('receive-tracker-info', TrackerService.info);
    });

};

export const rmFear = (client: Socket, io: socketIO.Server) => {
    client.on('rm-fear', () => {

        TrackerService.rmFear();
        io.emit('receive-tracker-info', TrackerService.info);
    });

};



export const addActionToken = (client: Socket, io: socketIO.Server) => {
    client.on('add-action-token', () => {

        TrackerService.addActionToken();
        io.emit('receive-tracker-info', TrackerService.info);
    });

};

export const rmActionToken = (client: Socket, io: socketIO.Server) => {
    client.on('rm-action-token', () => {

        TrackerService.rmActionToken();
        io.emit('receive-tracker-info', TrackerService.info);
    });

};

export const convertToFear = (client: Socket, io: socketIO.Server) => {
    client.on('convert-to-fear', () => {

        TrackerService.convertToFear();
        io.emit('receive-tracker-info', TrackerService.info);
    });

};

export const getTrackerInfo = (client: Socket, io: socketIO.Server) => {
    client.on('get-tracker-info', () => {
        io.emit('receive-tracker-info', TrackerService.info);
    });

};

export const clearTracker = (client: Socket, io: socketIO.Server) => {
    client.on('clear-tracker', () => {
        TrackerService.clear();
        io.emit('receive-tracker-info', TrackerService.info);
    });

};