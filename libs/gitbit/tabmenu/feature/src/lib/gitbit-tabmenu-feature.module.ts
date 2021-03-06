import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabmenuComponent } from './tabmenu/tabmenu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { GitbitRoutingModule } from '@gitbit/gitbit/routing/typings';
import { GitbitTerminalLibraryModule } from '@gitbit/gitbit/terminal/library';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatBadgeModule,
    MatButtonModule,
    GitbitRoutingModule,
    GitbitTerminalLibraryModule,
    MatTooltipModule
  ],
  exports: [TabmenuComponent],
  declarations: [TabmenuComponent]
})
export class GitbitTabmenuFeatureModule {
}


