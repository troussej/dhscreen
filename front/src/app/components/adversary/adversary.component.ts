import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Adversary } from '../../models/adversary.model';
import { AdversaryService } from 'app/services/adversary.service';
import _ from 'lodash';
import { Observable, map, of } from 'rxjs';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { EncounterService } from 'app/services/encounter.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { EncounterElem } from 'app/models/encounter.model';

@Component({
  selector: 'dh-adversary',
  standalone: true,
  imports: [
    CardModule, ButtonModule, RippleModule,
    FieldsetModule, PanelModule
  ],
  providers: [MessageService],
  templateUrl: './adversary.component.html',
  styleUrl: './adversary.component.scss'
})
export class AdversaryComponent implements OnInit {



  @Input()
  element: Adversary | null = null;

  @Input()
  encounterElement: EncounterElem | null = null;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {

    if (this.element === null) {
      this.route.data.pipe(map(({ element }) => element)).subscribe(el => {
        this.element = el;
      })
    }

  }


  get header(): string {
    if (this.encounterElement === null) {
      return this.element?.name || '';
    }
    return `${this.element?.name || ''} (${this.encounterElement.size})`
  }
}
