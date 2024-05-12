import { Component } from '@angular/core';
import { Adversary } from 'app/model/adversary.model';
import data from 'assets/adversaries.json';


@Component({
  selector: 'dh-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  items : Adversary[] = data;
}
