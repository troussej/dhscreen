import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'app/models/message.model';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { DiceResultMessageComponent } from '../dice-result-message/dice-result-message.component';

@Component({
  selector: 'dh-chat-message',
  standalone: true,
  imports: [CardModule, TagModule, DiceResultMessageComponent],
  templateUrl: './chat-message.component.html',
  styleUrl: './chat-message.component.scss'
})
export class ChatMessageComponent implements OnInit {


  public critical = '';

  @Input()
  public message!: Message;

  ngOnInit(): void {
    if (this.message.roll?.critical) {
      this.critical = 'critical';
    }
  }
}
