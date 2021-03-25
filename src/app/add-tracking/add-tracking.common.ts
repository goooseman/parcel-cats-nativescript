import { Routes } from '@angular/router';
import { AddTrackingComponent } from '@src/app/add-tracking/add-tracking/add-tracking.component';
import { environment } from '@src/environments/environment';

export const componentDeclarations: any[] = [
];

export const providerDeclarations: any[] = [
];

export const routes: Routes = [
    { path: 'add', component: AddTrackingComponent, outlet: environment.isWeb ? undefined : "addTab" },
];
