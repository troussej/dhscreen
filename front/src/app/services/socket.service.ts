import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

import { User } from 'app/models/user.model';
import { Message } from 'app/models/message.model';
import { RollRequest, RollResult } from 'app/models/roll.model';

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

    receiveRoll(): Observable<RollRequest> {
        return this.socket.fromEvent('receive-roll');
    }

}