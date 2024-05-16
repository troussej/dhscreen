import { Routes } from '@angular/router';
import { TrackerComponent } from './components/tracker/tracker.component';
import { HomeComponent } from './components/home/home.component';
import { AdversaryComponent } from './components/adversary/adversary.component';
import { AdversaryResolver } from './components/adversary/adversary.resolver';
import { EncounterComponent } from './components/encounter/encounter.component';
import { TestSocketComponent } from './components/test-socket/test-socket.component';
import { AdversaryListComponent } from './components/adversary-list/adversary-list.component';

export const routes: Routes = [
    {
        path: 'tracker',
        component: TrackerComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'adversary/:id',
        component: AdversaryComponent,
        resolve: { element: AdversaryResolver }
    },
    {
        path: 'encounter',
        component: EncounterComponent
    },
    {
        path: 'socket',
        component: TestSocketComponent
    },
    {
        path: 'adversairies',
        component: AdversaryListComponent
    }
];

