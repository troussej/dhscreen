import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

import { User } from 'app/models/user.model';
import { Message } from 'app/models/message.model';
import { RollRequest } from 'app/models/roll.model';
import { TrackingInfo } from 'app/models/tracker.model';

@Injectable({
    providedIn: 'root',
})
export class SocketService {
    constructor(private socket: Socket) { }

    emitUser(user: User): void {
        this.socket.emit('add-user', user);
    }

    emitExit(): void {
        this.socket.emit('exit');
    }

    getClientId(): Observable<string> {
        return this.socket.fromEvent('user-id');
    }

    getUsersOnline(): Observable<User[]> {
        return this.socket.fromEvent<User[]>('users-online');
    }

    sendMessage(msg: Message): void {
        this.socket.emit('send-message', msg);
    }

    sendRoll(ask: RollRequest): void {
        this.socket.emit('send-roll', ask);
    }


    receiveMessage(): Observable<Message> {
        return this.socket.fromEvent('receive-message');
    }

    addFear(): void {
        this.socket.emit('add-fear');
    }
    rmFear(): void {
        this.socket.emit('rm-fear');
    }
    addActionToken(): void {
        this.socket.emit('add-action-token');
    }
    rmActionToken(): void {
        this.socket.emit('rm-action-token');
    }
    clearTracker(): void {
        this.socket.emit('clear-tracker');
    }
    convertToFear(): void {
        this.socket.emit('convert-to-fear');
    }

    getTrackerInfo(): void {
        this.socket.emit('get-tracker-info');
    }

    receiveTrackerInfo(): Observable<TrackingInfo> {
        return this.socket.fromEvent('receive-tracker-info');
    }
}