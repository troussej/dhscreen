import { UpperCasePipe, AsyncPipe, CommonModule, JsonPipe, ViewportScroller } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Message } from 'app/models/message.model';
import { SocketService } from 'app/services/socket.service';
import { AutoFocusModule } from 'primeng/autofocus';
import { InputTextModule } from 'primeng/inputtext';
import _ from 'lodash';
import { ButtonModule } from 'primeng/button';
import { ScrollPanel, ScrollPanelModule } from 'primeng/scrollpanel';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { DiceType, RollRequest } from 'app/models/roll.model';
import { InputNumberModule } from 'primeng/inputnumber';
import { DividerModule } from 'primeng/divider';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';

@Component({
  selector: 'dh-chat',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, AsyncPipe, CommonModule, JsonPipe, AutoFocusModule, ButtonModule,
    InputTextModule, ScrollPanelModule, ChatMessageComponent, InputNumberModule,
    ReactiveFormsModule, DividerModule, InputGroupModule, InputGroupAddonModule, TriStateCheckboxModule
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
  providers: []
})
export class ChatComponent implements OnInit {

  @Input()
  public userName: string = '';

  @ViewChild(ScrollPanel)
  scrollPanel?: ScrollPanel;

  public messages: Message[] = [];
  public messageInput = '';

  public diceForm?: FormGroup;

  constructor(private socket: SocketService, private fb: FormBuilder

  ) {

  }

  ngOnInit(): void {

    this.socket.receiveMessage().subscribe(msg => {
      this.messages.push(msg);

      setTimeout(() => {
        this.scrollPanel?.scrollTop(Number.MAX_VALUE);
      }, 50

      )
      // this.scrollPanel?.refresh();
    })

    this.diceForm = this.fb.group({

      'modifier': this.fb.control(0, Validators.required),
      'advantage': this.fb.control(null, Validators.required)
    }
    )
  }



  public sendMessage() {
    if (_.isEmpty(this.messageInput)) {
      return;
    }
    const msg = new Message(this.messageInput);
    this.socket.sendMessage(msg);

    this.messageInput = '';

  }

  public sendDH12Roll() {

    const msg = new RollRequest(
      DiceType.DH_12,
      this.diceForm?.controls['modifier'].value,
      this.diceForm?.controls['advantage'].value === true,
      this.diceForm?.controls['advantage'].value === false
    );
    this.socket.sendRoll(msg);

  }

  public sendD20Roll() {
    const msg = new RollRequest(
      DiceType.D20,
      this.diceForm?.controls['modifier'].value,
      this.diceForm?.controls['advantage'].value === true,
      this.diceForm?.controls['advantage'].value === false
    );
    this.socket.sendRoll(msg);
  }


}
