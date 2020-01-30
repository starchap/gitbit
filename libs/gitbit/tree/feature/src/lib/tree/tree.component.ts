import { Component, OnInit } from '@angular/core';
import { GitService } from '@gitbit/gitbit/git/data-access';
import { createGitgraph } from '@gitgraph/js';
import { GitgraphUserApi, GitgraphCommitOptions } from '@gitgraph/core/lib/user-api/gitgraph-user-api';
import { BranchUserApi } from '@gitgraph/core/lib/user-api/branch-user-api';
import { FlatBranch } from '../../../../../git/typings/src/lib/git.model';
enum GitAction {
  COMMIT= 'Committed',
  BRANCHED = 'Branched',
  MERGED= 'Merged'
}
@Component({
  selector: 'gb-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  branchPaths: Promise<string[]> = this.git.showAllBranches();

  constructor(private git: GitService) {
  }

  ngOnInit() {
    this.git.getGitLog().then((a) => {
      console.log(a);
      console.log(this.getAllBranchPoints(a));
      this.drawTree(a);
    });
    /*    const graphContainer: HTMLElement = document.getElementById("graph-container");

    // Instantiate the graph.
        const gitgraph: GitgraphUserApi<SVGElement> = createGitgraph(graphContainer);

    // Simulate git commands with Gitgraph API.
        const master: BranchUserApi<SVGElement> = gitgraph.branch("master");
        master.commit("Initial commit");

        const develop: BranchUserApi<SVGElement> = gitgraph.branch("develop");
        develop.commit("Add TypeScript");
        develop.commit("Add TypeScript");

        const aFeature: BranchUserApi<SVGElement> = master.branch("a-feature");
        develop.commit("Add TypeScript");
        aFeature
          .commit("Make it work")
          .commit({ subject: "Make it right", hash: "test" })
          .commit("Make it fast");

        master.merge(aFeature);
        develop.commit("Prepare v1");

        master.merge(develop).tag("v1.0.0");*/

  }


  getAllBranchPoints(commits: FlatBranch[], elementId: string = 'graph-container'): Map<string, string[]> {
    const makeBranchesAt: Map<string, string[]> = new Map();
    commits.forEach((commit: FlatBranch) => {
      if (commit.parentIds.length === 2) { // a merge has occurred
        if (makeBranchesAt.get(commit.parentIds[0].id)) { // multiple branched from commit
          makeBranchesAt.get(commit.parentIds[0].id).push(commit.parentIds[1].id);
        } else { // first branch to branch from commit
          makeBranchesAt.set(commit.parentIds[0].id, [commit.parentIds[1].id]);
        }
      }
    });
    return makeBranchesAt;
  }

  drawTree(commits: FlatBranch[], elementId: string = 'graph-container'): void {
    const graphContainer: HTMLElement = document.getElementById(elementId);
    const gitgraph: GitgraphUserApi<SVGElement> = createGitgraph(graphContainer);
    const branchPoints: Map<string, string[]> = this.getAllBranchPoints(commits);
    const parents: Map<string, BranchUserApi<SVGElement>> = new Map();
    commits.reverse().forEach((commit: FlatBranch) => {
      if (commit.parentIds.length === 0) { //first commit
        parents.set(commit.branchId, gitgraph.branch(commit.branchId)
          .commit(this.getCommitMessage(commit, GitAction.COMMIT))
        );
        commit.parentIds.push({ id: commit.branchId });
        return;
      }
      if (commit.parentIds.length === 2) { // merge
        parents.set(commit.branchId, parents.get(commit.parentIds[0].id)
          .merge({branch: parents.get(commit.parentIds[1].id), commitOptions: this.getCommitMessage(commit, GitAction.MERGED)}));
        return;
      }
      if (branchPoints.get(commit.parentIds[0].id)) { // time to make branch
        parents.set(commit.branchId, parents.get(commit.parentIds[0].id)
          .branch(commit.branchId)
          .commit(this.getCommitMessage(commit, GitAction.BRANCHED)));
        return;
      }
      parents.set(commit.branchId, parents.get(commit.parentIds[0].id)
        .commit(this.getCommitMessage(commit, GitAction.COMMIT)));

    });
  }


  private getCommitMessage(commit: FlatBranch, gitAction: GitAction): GitgraphCommitOptions<SVGElement> {
    return { hash: commit.branchId,
      subject: gitAction+': '+commit.message.slice(0,50),
      body: commit.message,
      author: commit.author
    }
  }

}


