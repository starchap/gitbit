import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeComponent } from '../../../../tree/feature/src/lib/tree/tree.component';
import { GitbitTreeFeatureModule } from '@gitbit/gitbit/tree/feature';

// TODO: Delete this components later as the real feature components get implemented
@Component({
  selector: 'gb-haha1',
  template: 'Hello World 1',
  styles: ['']
})
export class TempComponent1 {}
// TODO: Delete this components later as the real feature components get implemented
@Component({
  selector: 'gb-haha2',
  template: 'Hello World 2',
  styles: ['']
})
export class TempComponent2 {}

const routes: Routes = [
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () => import('@gitbit/gitbit/dashboard/feature').then(module => module.GitbitDashboardFeatureModule)
  },
  {
    path: 'tree',
    loadChildren: () => import('@gitbit/gitbit/tree/feature').then(module => module.GitbitTreeFeatureModule)
  },
  {
    path: 'merge',
    loadChildren: () => import('@gitbit/gitbit/merge/feature').then(module => module.GitbitMergeFeatureModule)
  },
  {
    path: 'commit',
    loadChildren: () => import('@gitbit/gitbit/commit/feature').then(module => module.GitbitCommitFeatureModule)
  },
  {
    path: 'conflict',
    loadChildren: () => import('@gitbit/gitbit/conflict/feature').then(module => module.GitbitConflictFeatureModule)
  },
  {
    path: 'repository',
    loadChildren: () => import('@gitbit/gitbit/repository/feature').then(module => module.GitbitRepositoryFeatureModule)
  },
  {
    path: 'terminal',
    loadChildren: () => import('@gitbit/gitbit/terminal/feature').then(module => module.GitbitTerminalFeatureModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('@gitbit/gitbit/setting/feature').then(module => module.GitbitSettingFeatureModule)
  },
  {
    path: 'stash',
    loadChildren: () => import('@gitbit/gitbit/stash/feature').then(module => module.GitbitStashFeatureModule)
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes), BrowserAnimationsModule],
  exports: [RouterModule],
  declarations: [TempComponent1, TempComponent2]
})
export class GitbitRoutingModule {}
