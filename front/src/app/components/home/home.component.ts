import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdversaryService } from 'app/services/adversary.service';
import { Adversary } from 'app/models/adversary.model';
import { AddToEncounterComponent } from '../encounter/add-to-encounter/add-to-encounter.component';

@Component({
  selector: 'dh-home',
  standalone: true,
  imports: [RouterLink, AddToEncounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(public adversaryService: AdversaryService) {

  }
}
