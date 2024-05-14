import { Component, Input } from '@angular/core';
import { Message } from 'app/models/message.model';

import { CardModule } from 'primeng/card';

@Component({
  selector: 'dh-chat-message',
  standalone: true,
  imports: [CardModule],
  templateUrl: './chat-message.component.html',
  styleUrl: './chat-message.component.scss'
})
export class ChatMessageComponent {


  @Input()
  public message!: Message;
}
