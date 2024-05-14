import { AsyncPipe, CommonModule, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from 'app/models/user.model';
import { SocketService } from 'app/services/socket.service';
import { Observable, concatMap, map, of } from 'rxjs';

@Component({
  selector: 'dh-test-socket',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, AsyncPipe, CommonModule],
  templateUrl: './test-socket.component.html',
  styleUrl: './test-socket.component.scss'
})
export class TestSocketComponent {
  users$: Observable<User[]> = of([]);
  userName: string = '';
  name: string = '';
  isOnline: boolean = false;

  constructor(private socket: SocketService) { }

  ngOnInit(): void {
    this.users$ = this.socket
      .getClientId()
      .pipe(
        concatMap((clientId) =>
          this.socket
            .getUsersOnline()
            .pipe(map((users) => (users = users.filter((u) => u.id !== clientId)))
            )));
  }

  join() {
    if (!this.name) {
      return;
    }

    this.socket.emitUser({
      id: null,
      name: this.name,
    });
    this.userName = this.name;
    this.name = '';
    this.isOnline = true;
  }

  exit() {
    this.socket.emitExit();
    this.isOnline = false;
  }

}


