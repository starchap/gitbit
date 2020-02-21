import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallTerminalComponent } from './small-terminal/small-terminal.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SmallTerminalComponent],
  exports: [SmallTerminalComponent]
})
export class GitbitTerminalLibraryModule {}
