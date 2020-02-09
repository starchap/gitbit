import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './tree/tree.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([
    {
      path: '',
      pathMatch: 'full',
      component: TreeComponent
    }
  ])],
  declarations: [TreeComponent]
})
export class GitbitTreeFeatureModule {}
