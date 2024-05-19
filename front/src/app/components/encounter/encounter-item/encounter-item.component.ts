import { Component, Input, OnInit } from '@angular/core';
import { AdversaryComponent } from 'app/components/adversary/adversary.component';
import { GaugeComponent } from 'app/components/utils/gauge/gauge.component';
import { Adversary } from 'app/models/adversary.model';
import { EncounterElem } from 'app/models/encounter.model';
import { AdversaryService } from 'app/services/adversary.service';
import { EncounterService } from 'app/services/encounter.service';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
  selector: 'dh-encounter-item',
  standalone: true,
  imports: [ButtonModule, AdversaryComponent,
    CarouselModule, CardModule, FieldsetModule, DividerModule, GaugeComponent],
  templateUrl: './encounter-item.component.html',
  styleUrl: './encounter-item.component.scss'
})
export class EncounterItemComponent implements OnInit {
  @Input()
  encounter!: EncounterElem;

  adversary!: Adversary;

  @Input()
  stats = true;

  constructor(
    private encounterService: EncounterService,
    private adversaryService: AdversaryService) { }



  ngOnInit(): void {

    this.adversary = this.adversaryService.getOne(this.encounter.adversaryName)!;

  }

  public remove(id: string): void {
    this.encounterService.remove(id);
  }

  public decSize(id: string): void {
    this.encounterService.decSize(id);
  }

  public incSize(id: string): void {
    this.encounterService.incSize(id);
  }
}
