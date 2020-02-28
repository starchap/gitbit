import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryComponent } from './repository/repository.component';
import { RouterModule } from '@angular/router';
import { GitbitRepositoryLibraryModule } from '@gitbit/gitbit/repository/library';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: RepositoryComponent
      }]), GitbitRepositoryLibraryModule],
  declarations: [RepositoryComponent]
})
export class GitbitRepositoryFeatureModule {}
