import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Adversary } from 'app/models/adversary.model';
import { EncounterElem } from 'app/models/encounter.model';
import { AdversaryService } from 'app/services/adversary.service';
import { EncounterService } from 'app/services/encounter.service';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { RemoveFromEncounterComponent } from '../remove-from-encounter/remove-from-encounter.component';
import { AdversaryListComponent } from 'app/components/adversary-list/adversary-list.component';
import { DividerModule } from 'primeng/divider';
import { ButtonGroupModule } from 'primeng/buttongroup'

@Component({
  selector: 'dh-encounter-editor',
  standalone: true,
  imports: [DataViewModule, ButtonModule, ButtonGroupModule, CommonModule, TagModule, RemoveFromEncounterComponent, AdversaryListComponent, DividerModule],
  templateUrl: './encounter-editor.component.html',
  styleUrl: './encounter-editor.component.scss'
})
export class EncounterEditorComponent {


  constructor(private encounterService: EncounterService, private adversaryService: AdversaryService) {

  }

  get elements(): EncounterElem[] {
    return Object.values(this.encounterService.getCurrent().elements)
  }

  public getAdversary(name: string): Adversary {
    return this.adversaryService.getOne(name)! //lazy
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
