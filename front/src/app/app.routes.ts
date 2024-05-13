import { Routes } from '@angular/router';
import { TrackerComponent } from './tracker/tracker.component';
import { HomeComponent } from './home/home.component';
import { AdversaryComponent } from './adversary/adversary.component';
import { AdversaryResolver } from './adversary/adversary.resolver';
import { EncounterComponent } from './encounter/encounter.component';

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
    }
];
