import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EncounterService } from 'app/services/encounter.service';
import { ButtonModule } from 'primeng/button';
import { Encounter, EncounterElem } from '../../models/encounter.model';
import { AdversaryComponent } from '../adversary/adversary.component';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { DividerModule } from 'primeng/divider';
import { GaugeComponent } from '../utils/gauge/gauge.component';
import { EncounterItemComponent } from './encounter-item/encounter-item.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { LocalStorage } from 'ngx-webstorage';

@Component({
  selector: 'dh-encounter',
  standalone: true,
  imports: [RouterLink, ButtonModule, ScrollPanelModule,
    CarouselModule, CardModule, FieldsetModule, DividerModule, GaugeComponent, EncounterItemComponent],
  templateUrl: './encounter.component.html',
  styleUrl: './encounter.component.scss'
})
export class EncounterComponent {

  @LocalStorage('encounterSize', 4)
  public size!: number;

  constructor(public service: EncounterService) {

  }



  get elements(): EncounterElem[] {
    return Object.values(this.service.getCurrent().elements)
  }
}
