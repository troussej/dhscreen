import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'dh-gauge',
  standalone: true,
  imports: [RatingModule, FormsModule],
  templateUrl: './gauge.component.html',
  styleUrl: './gauge.component.scss'
})
export class GaugeComponent {

  @Input()
  max = 1;
  @Input()
  model: any = null;

  @Output()
  modelChange = new EventEmitter<string>();
}
