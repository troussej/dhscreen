import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdversaryService } from 'app/services/adversary.service';
import { Adversary } from 'app/adversary/adversary.model';

@Component({
  selector: 'dh-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(public adversaryService: AdversaryService) {

  }
}
