import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GitService } from '@gitbit/gitbit/git/data-access';
import { createGitgraph } from "@gitgraph/js";
import { GitgraphUserApi } from '@gitgraph/core/lib/user-api/gitgraph-user-api';
import {  BranchUserApi } from '@gitgraph/core/lib/user-api/branch-user-api';
@Component({
  selector: 'gb-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  branchPaths: Observable<string[]> = this.git.showAllBranches();
  constructor(private git: GitService) { }

  ngOnInit() {
    const graphContainer: HTMLElement = document.getElementById("graph-container");

// Instantiate the graph.
    const gitgraph: GitgraphUserApi<SVGElement> = createGitgraph(graphContainer);

// Simulate git commands with Gitgraph API.
    const master: BranchUserApi<SVGElement> = gitgraph.branch("master");
    master.commit("Initial commit");

    const develop: BranchUserApi<SVGElement> = gitgraph.branch("develop");
    develop.commit("Add TypeScript");

    const aFeature: BranchUserApi<SVGElement> = gitgraph.branch("a-feature");
    aFeature
      .commit("Make it work")
      .commit({ subject: "Make it right", hash: "test" })
      .commit("Make it fast");

    develop.merge(aFeature);
    develop.commit("Prepare v1");

    master.merge(develop).tag("v1.0.0");

  }

}
