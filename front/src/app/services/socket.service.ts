import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

import { User } from 'app/models/user.model';

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

}