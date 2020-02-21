import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalComponent } from './terminal/terminal.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
        {
          path: '',
          pathMatch: 'full',
          component: TerminalComponent
        }])
  ],
  declarations: [TerminalComponent]
})
export class GitbitTerminalFeatureModule {}
