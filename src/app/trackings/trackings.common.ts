import { Routes } from '@angular/router';
import { TrackingsListComponent } from './trackings-list/trackings-list.component';
import { environment } from '@src/environments/environment';

export const componentDeclarations: any[] = [
];

export const providerDeclarations: any[] = [
];

export const routes: Routes = [
    { path: 'trackings', component: TrackingsListComponent, outlet: environment.isWeb ? undefined : "trackingsTab" },
];
