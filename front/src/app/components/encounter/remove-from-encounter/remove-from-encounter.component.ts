import { Component, Input } from '@angular/core';
import { EncounterService } from 'app/services/encounter.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'dh-remove-from-encounter',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './remove-from-encounter.component.html',
  styleUrl: './remove-from-encounter.component.scss'
})
export class RemoveFromEncounterComponent {

  @Input()
  public name: string = '';
  @Input()
  public long: boolean = false;

  constructor(public service: EncounterService) {

  }

  public remove(): void {
    this.service.remove(this.name);
  }
}
