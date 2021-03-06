import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommitComponent } from './commit/commit.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: CommitComponent
      }])],
  declarations: [CommitComponent]
})
export class GitbitCommitFeatureModule {}

