import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryListComponent } from './repository-list/repository-list.component';
import { MatIconModule } from '@angular/material/icon';
import { RepositoryBranchListComponent } from './repository-branch-list/repository-branch-list.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatExpansionModule } from '@angular/material/expansion';
import { RepositoryBranchListItemComponent } from './repository-branch-list/repository-branch-list-item/repository-branch-list-item.component';

@NgModule({
  imports: [CommonModule, MatIconModule, MatTreeModule, MatExpansionModule],
  exports: [
    RepositoryListComponent,
    RepositoryBranchListComponent
  ],
  declarations: [RepositoryListComponent, RepositoryBranchListComponent, RepositoryBranchListItemComponent]
})
export class GitbitRepositoryLibraryModule {}
