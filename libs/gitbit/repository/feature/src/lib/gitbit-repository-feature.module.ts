import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryComponent } from './repository/repository.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
    {
      path: '',
      pathMatch: 'full',
      component: RepositoryComponent
    }])],
  declarations: [RepositoryComponent]
})
export class GitbitRepositoryFeatureModule {}
