import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConflictComponent } from './conflict/conflict.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ConflictComponent
      }])],
  declarations: [ConflictComponent]
})
export class GitbitConflictFeatureModule {}
