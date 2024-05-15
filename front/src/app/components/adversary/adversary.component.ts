import { Component, Input, OnInit, input } from '@angular/core';
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
import { RatingModule } from 'primeng/rating';
import { GaugeComponent } from '../utils/gauge/gauge.component';
import { AdversaryService } from 'app/services/adversary.service';
@Component({
  selector: 'dh-adversary',
  standalone: true,
  imports: [
    CardModule, ButtonModule, RippleModule, RatingModule, FormsModule,
    FieldsetModule, PanelModule, TagModule, DividerModule,
    GaugeComponent
  ],
  providers: [MessageService],
  templateUrl: './adversary.component.html',
  styleUrl: './adversary.component.scss'
})
export class AdversaryComponent implements OnInit {


  @Input()
  adversary: Adversary | null = null;

  constructor(private route: ActivatedRoute, private service: AdversaryService) {

  }

  ngOnInit(): void {



    if (this.adversary === null) {
      this.route.data.pipe(map(({ element }) => element)).subscribe(el => {
        this.adversary = el;
      })
    }


  }

}
