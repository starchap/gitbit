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
    component: TempComponent1
  },
  {
    path: 'tree',
    loadChildren: () => import('@gitbit/gitbit/tree/feature').then(module => module.GitbitTreeFeatureModule)
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes), BrowserAnimationsModule],
  exports: [RouterModule],
  declarations: [TempComponent1, TempComponent2]
})
export class GitbitRoutingModule {}
