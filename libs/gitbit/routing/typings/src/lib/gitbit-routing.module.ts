import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    component: TempComponent2
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes), BrowserAnimationsModule],
  exports: [RouterModule],
  declarations: [TempComponent1, TempComponent2]
})
export class GitbitRoutingModule {}
