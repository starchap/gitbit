import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentNavigation, fader } from '@gitbit/gitbit/tabmenu/typings';





@Component({
  selector: 'gb-tabmenu',
  templateUrl: './tabmenu.component.html',
  styleUrls: ['./tabmenu.component.scss'],
  animations: [fader]
})
export class TabmenuComponent implements OnInit {
  tabs: ComponentNavigation[] = [];
  constructor() {
    this.tabs = [
      {icon: 'dashboard', title: 'Dashboard', url: 'dashboard'},
      {icon: 'account_tree', title: 'Git Tree', url: 'tree'},
      {icon: 'beenhere', title: 'Commit', url: 'commit', numberIndicator: 3},
      {icon: 'save', title: 'Stashed', url: 'stashed'},
      {icon: 'call_merge', title: 'Merge', url: 'merge'},
      {icon: 'linear_scale', title: 'Rebase', url: 'rebase'},
      {icon: 'error_outline', title: 'Conflicts', url: 'conflicts', numberIndicator: 15},
      {icon: 'assignment', title: 'Assignments', url: 'assignments'},
      {icon: 'web_asset', title: 'Console', url: 'console'}
    ]
  }

  ngOnInit() {
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
