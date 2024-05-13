import { Component, Input } from '@angular/core';
import { Adversary } from 'app/models/adversary.model';
import { EncounterService } from 'app/services/encounter.service';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'dh-add-to-encounter',
  standalone: true,
  imports: [ButtonModule, RippleModule],
  templateUrl: './add-to-encounter.component.html',
  styleUrl: './add-to-encounter.component.scss'
})
export class AddToEncounterComponent {

  @Input()
  element!: Adversary

  constructor(
    private encounterService: EncounterService) {

  }

  public add(): void {
    this.encounterService.add(this.element!);
  }
}
