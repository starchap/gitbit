import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gb-repository-branch-list-item',
  templateUrl: './repository-branch-list-item.component.html',
  styleUrls: ['./repository-branch-list-item.component.scss']
})
export class RepositoryBranchListItemComponent implements OnInit {
  @Input() hasChildren: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
