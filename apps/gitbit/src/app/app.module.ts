import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { GitbitTabmenuFeatureModule } from '@gitbit/gitbit/tabmenu/feature';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    BrowserAnimationsModule,
    GitbitTabmenuFeatureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
