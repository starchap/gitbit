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
      {icon: 'list', title: 'Repositories', url: 'projects', toolTip: 'Pick or add repository'},
      {icon: 'dashboard', title: 'Dashboard', url: 'dashboard', toolTip: 'Quick commands and information'},
      {icon: 'account_tree', title: 'Git Tree', url: 'tree', toolTip: 'See repository history'},
      {icon: 'beenhere', title: 'Commit', url: 'commit', numberIndicator: 3, toolTip: 'Commit to current work'},
      {icon: 'save', title: 'Stashed', url: 'stash', toolTip: 'Stash or revert stashed changes'},
      {icon: 'call_merge', title: 'Merge', url: 'merge', toolTip: 'Merge branch into current'},
      {icon: 'error_outline', title: 'Conflicts', url: 'conflict', numberIndicator: 15, toolTip: 'List all conflicts with target branch'},
      {icon: 'web_asset', title: 'Terminal', url: 'terminal', toolTip: 'Access you terminal'}
    ]
  }

  ngOnInit() {
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
