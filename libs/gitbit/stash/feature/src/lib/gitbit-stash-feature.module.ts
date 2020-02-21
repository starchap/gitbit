import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StashComponent } from './stash/stash.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: StashComponent
      }
    ])
  ],
  declarations: [StashComponent]
})
export class GitbitStashFeatureModule {
}
