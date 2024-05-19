import { Component, Input } from '@angular/core';
import { DamageThresholds } from 'app/models/adversary.model';
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'dh-damage-thresholds',
  standalone: true,
  imports: [ButtonGroupModule, ButtonModule, TagModule],
  templateUrl: './damage-thresholds.component.html',
  styleUrl: './damage-thresholds.component.scss'
})
export class DamageThresholdsComponent {

  @Input()
  element!: DamageThresholds;
}
