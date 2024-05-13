import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EncounterService } from 'app/services/encounter.service';
import { ButtonModule } from 'primeng/button';
import { Encounter, EncounterElem } from '../../models/encounter.model';
import { AdversaryComponent } from '../adversary/adversary.component';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'dh-encounter',
  standalone: true,
  imports: [RouterLink, ButtonModule, AdversaryComponent, CarouselModule],
  templateUrl: './encounter.component.html',
  styleUrl: './encounter.component.scss'
})
export class EncounterComponent {

  constructor(public service: EncounterService) {

  }

  public remove(id: string): void {
    this.service.remove(id);
  }

  get elements(): EncounterElem[] {
    return Object.values(this.service.getCurrent().elements)
  }
}
