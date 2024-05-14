import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TrackingInfo } from 'app/models/tracker.model';
import { SocketService } from 'app/services/socket.service';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'dh-tracker',
  standalone: true,
  imports: [CardModule, FormsModule, AsyncPipe, JsonPipe, ButtonModule, InputGroupModule, InputGroupAddonModule],
  templateUrl: './tracker.component.html',
  styleUrl: './tracker.component.scss'
})
export class TrackerComponent implements OnInit {

  public data$: Observable<TrackingInfo> = of(new TrackingInfo());

  constructor(private socket: SocketService) {

  }

  ngOnInit(): void {
    this.data$ = this.socket.receiveTrackerInfo();
    this.socket.getTrackerInfo();
  }

  public addFear() {
    this.socket.addFear();
  }
  public rmFear() {
    this.socket.rmFear();
  }
  public addActionToken() {
    this.socket.addActionToken();
  }
  public rmActionToken() {
    this.socket.rmActionToken();
  }
  public convertToFear() {
    this.socket.convertToFear();
  }
  public clear() {
    this.socket.clearTracker();
  }
}
