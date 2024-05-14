import { Component, Input } from '@angular/core';
import { Message } from 'app/models/message.model';
import { RollResult } from 'app/models/roll.model';
import { TagModule } from 'primeng/tag';
@Component({
  selector: 'dh-dice-result-message',
  standalone: true,
  imports: [TagModule],
  templateUrl: './dice-result-message.component.html',
  styleUrl: './dice-result-message.component.scss'
})
export class DiceResultMessageComponent {
  @Input()
  public message!: Message;
  @Input()
  public roll!: RollResult;
}
