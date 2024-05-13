import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Adversary } from './adversary.model';
import { AdversaryService } from 'app/services/adversary.service';
import _ from 'lodash';
import { Observable, map, of } from 'rxjs';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { EncounterService } from 'app/services/encounter.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';
@Component({
  selector: 'dh-adversary',
  standalone: true,
  imports: [CardModule, ButtonModule, ToastModule, RippleModule],
  providers: [MessageService],
  templateUrl: './adversary.component.html',
  styleUrl: './adversary.component.scss'
})
export class AdversaryComponent implements OnInit {



  @Input()
  element: Adversary | null = null;

  constructor(private route: ActivatedRoute,
    private adversaryService: AdversaryService,
    private encounterService: EncounterService,
    private messageService: MessageService) {

  }

  ngOnInit(): void {

    this.route.data.pipe(map(({ element }) => element)).subscribe(el => {
      this.element = el;
    })

  }

  public add(): void {
    console.log("add")
    this.encounterService.add(this.element!);
    this.messageService.add({ summary: "Added" })
  }
}
