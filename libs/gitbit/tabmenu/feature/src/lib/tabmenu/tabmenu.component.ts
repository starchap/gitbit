import { Component, OnInit } from '@angular/core';

enum ComponentType {
  Dashboard,
  Tree,
  Commit,
  Stashed,
  Merge,
  Rebase,
  Conflicts,
  Assignments,
  Console

}
type ComponentNavigation = {
  icon: string;
  title: string;
  component: ComponentType;
  numberIndicator?: number|0;
}

@Component({
  selector: 'gb-tabmenu',
  templateUrl: './tabmenu.component.html',
  styleUrls: ['./tabmenu.component.scss']
})
export class TabmenuComponent implements OnInit {
  tabs: ComponentNavigation[] = [];
  constructor() {
    this.tabs = [
      {icon: 'dashboard', title: 'Dashboard', component: ComponentType.Dashboard},
      {icon: 'account_tree', title: 'Git Tree', component: ComponentType.Dashboard},
      {icon: 'beenhere', title: 'Commit', component: ComponentType.Dashboard, numberIndicator: 3},
      {icon: 'save', title: 'Stashed', component: ComponentType.Dashboard},
      {icon: 'call_merge', title: 'Merge', component: ComponentType.Dashboard},
      {icon: 'linear_scale', title: 'Rebase', component: ComponentType.Dashboard},
      {icon: 'error_outline', title: 'Confilicts', component: ComponentType.Dashboard, numberIndicator: 15},
      {icon: 'assignment', title: 'Assignments', component: ComponentType.Dashboard},
      {icon: 'web_asset', title: 'Console', component: ComponentType.Dashboard}
    ]
  }

  ngOnInit() {
  }
}
