import { Component } from '@angular/core';
import { SidebarComponent } from 'app/components/sidebar/sidebar.component';
import { MenuItem } from 'primeng/api/menuitem';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import { ChatComponent } from '../chat/chat.component';
import { LocalStorage } from 'ngx-webstorage';
@Component({
  selector: 'dh-nav',
  standalone: true,
  imports: [ButtonModule, MenubarModule, ToastModule, SidebarComponent, SidebarModule],
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
      label: 'Tracker',
      routerLink: 'tracker'
    },
    {
      label: 'Encounter',
      routerLink: 'encounter'
    }

  ];

  @LocalStorage('showSidebar', true)
  showsidebar!: boolean;
}
