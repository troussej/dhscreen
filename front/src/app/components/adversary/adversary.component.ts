import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Adversary } from '../../models/adversary.model';
import _ from 'lodash';
import { map } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { EncounterElem, HpTracker } from 'app/models/encounter.model';
import { BadgeModule } from 'primeng/badge';
import { TagModule } from 'primeng/tag';
import { DividerModule } from 'primeng/divider';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { RatingModule } from 'primeng/rating';
@Component({
  selector: 'dh-adversary',
  standalone: true,
  imports: [
    CardModule, ButtonModule, RippleModule, RatingModule, FormsModule,
    FieldsetModule, PanelModule, TagModule, DividerModule, ScrollPanelModule
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

  trackers: HpTracker[] = [];

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {

    if (this.element === null) {
      this.route.data.pipe(map(({ element }) => element)).subscribe(el => {
        this.element = el;
      })
    }

    if (this.encounterElement) {
      this.trackers = Array(this.encounterElement.size).fill(1).map(() => { return new HpTracker() });
    } else {
      //1 seul
      this.trackers.push(new HpTracker());
    }
  }


  get header(): string {
    if (this.encounterElement === null) {
      return this.element?.name || '';
    }
    return `${this.element?.name || ''} (${this.encounterElement.size})`
  }
}
