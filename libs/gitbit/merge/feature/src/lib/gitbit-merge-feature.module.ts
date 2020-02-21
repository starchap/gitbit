import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MergeComponent } from './merge/merge.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: MergeComponent
      }])],
  declarations: [MergeComponent]
})
export class GitbitMergeFeatureModule {}
