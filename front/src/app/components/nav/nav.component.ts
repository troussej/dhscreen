import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { ButtonModule } from 'primeng/button';

import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
@Component({
  selector: 'dh-nav',
  standalone: true,
  imports: [ButtonModule, MenubarModule, ToastModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  items: MenuItem[] = [
    {
      label: 'Home',
      routerLink: 'home'
    },
    {
      label: 'tracker',
      routerLink: 'tracker'
    },
    {
      label: 'encounter',
      routerLink: 'encounter'
    },
    {
      label: 'Bladed Guards',
      routerLink: 'adversary/Bladed Guards'
    },
    {
      label: 'Bear',
      routerLink: 'adversary/Bear'
    }
  ];

}
