import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EncounterService } from 'app/services/encounter.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'dh-encounter',
  standalone: true,
  imports: [RouterLink, ButtonModule],
  templateUrl: './encounter.component.html',
  styleUrl: './encounter.component.scss'
})
export class EncounterComponent {

  constructor(public service: EncounterService) {

  }

  public remove(index: number): void {
    this.service.remove(index);
  }
}
