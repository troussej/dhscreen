import { UpperCasePipe, AsyncPipe, CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from 'app/models/user.model';
import { SocketService } from 'app/services/socket.service';
import { Observable, of, concatMap, map } from 'rxjs';
import { ChatComponent } from '../chat/chat.component';
import { LocalStorage } from 'ngx-webstorage';
import { ButtonModule } from 'primeng/button';
import _ from 'lodash';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'dh-sidebar',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, AsyncPipe, CommonModule, ChatComponent, ButtonModule, InputTextModule, DividerModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  users$: Observable<User[]> = of([]);

  @LocalStorage()
  userName?: string;

  isOnline: boolean = false;

  constructor(private socket: SocketService) { }

  ngOnInit(): void {
    this.users$ = this.socket
      .getClientId()
      .pipe(
        concatMap((clientId) =>
          this.socket
            .getUsersOnline()
        ))
      ;
    if (!_.isEmpty(this.userName)) {
      this.join();
    }
  }

  join() {
    if (!this.userName) {
      return;
    }

    this.socket.emitUser({
      id: null,
      name: this.userName,
    });

    this.isOnline = true;
  }

  exit() {
    this.socket.emitExit();
    this.isOnline = false;
  }
}
