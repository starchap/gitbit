import { Component, OnInit } from '@angular/core';
import { GitService } from '../../../../../git/data-access/src/lib/git/git.service';

@Component({
  selector: 'gb-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  constructor(private git: GitService) { }

  ngOnInit() {
    this.git.showAllBranches();
  }

}
