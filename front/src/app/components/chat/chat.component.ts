import { UpperCasePipe, AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Message } from 'app/models/message.model';
import { SocketService } from 'app/services/socket.service';
import { AutoFocusModule } from 'primeng/autofocus';
import { InputTextModule } from 'primeng/inputtext';
import _ from 'lodash';
import { ButtonModule } from 'primeng/button';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ChatMessageComponent } from './chat-message/chat-message.component';

@Component({
  selector: 'dh-chat',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, AsyncPipe, CommonModule, JsonPipe, AutoFocusModule, ButtonModule, InputTextModule, ScrollPanelModule, ChatMessageComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
  providers: []
})
export class ChatComponent implements OnInit {

  @Input()
  public userName: string = '';


  public messages: Message[] = [];
  public messageInput = '';

  constructor(private socket: SocketService) {

  }

  ngOnInit(): void {

    this.socket.receiveMessage().subscribe(msg => {
      this.messages.push(msg);

    })
  }

  public sendMessage() {
    if (_.isEmpty(this.messageInput)) {
      return;
    }
    const msg = new Message(this.messageInput);
    this.socket.sendMessage(msg);

    this.messageInput = '';

  }
}
