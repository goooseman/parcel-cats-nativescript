import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  componentDeclarations,
  providerDeclarations,
  routes,
} from './add-tracking.common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    ...componentDeclarations
  ],
  providers: [
    ...providerDeclarations
  ]
})
export class AddTrackingModule { }
