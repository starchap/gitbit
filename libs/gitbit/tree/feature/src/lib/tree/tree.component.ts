import { Component, OnInit } from '@angular/core';
import { GitService } from '@gitbit/gitbit/git/data-access';
import { createGitgraph } from '@gitgraph/js';
import {
  GitgraphUserApi,
  GitgraphCommitOptions
} from '@gitgraph/core/lib/user-api/gitgraph-user-api';
import { BranchUserApi } from '@gitgraph/core/lib/user-api/branch-user-api';
import { FlatBranch } from '../../../../../git/typings/src/lib/git.model';
enum GitAction {
  COMMIT = 'Committed',
  BRANCHED = 'Branched',
  MERGED = 'Merged'
}
@Component({
  selector: 'gb-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  branchPaths: Promise<string[]> = this.git.showAllBranches();

  constructor(private git: GitService) {}

  ngOnInit() {
    this.git.getGitLog().then(a => {
      this.drawTree(a);
    });
  }

  // drawing the gri tree to a specific element in the DOM using it's ID
  private drawTree(
    commits: FlatBranch[],
    elementId: string = 'graph-container'
  ): void {
    const graphContainer: HTMLElement = document.getElementById(elementId);
    const gitGraph: GitgraphUserApi<SVGElement> = createGitgraph(
      graphContainer
    );
    const branchMap: Map<string, string> = this.getBranchMap(commits);
    const history: Map<string, BranchUserApi<SVGElement>> = new Map();
    this.firstCommits(commits, history, gitGraph);
    commits.reverse().forEach((commit: FlatBranch) => {
      this.newBranch(commit, history, branchMap);
      this.merge(commit, history);
      this.commitToHistory(commit, history);
    });
  }

  private getBranchMap(commits: FlatBranch[]): Map<string, string> {
    return new Map(
      commits
        .filter((value: FlatBranch) => value.parentIds.length === 2)
        .map((value: FlatBranch) => [
          value.parentIds[0].id,
          value.parentIds[1].id
        ])
    );
  }
  // get the initial commits
  private getStartingCommits(commits: FlatBranch[]): FlatBranch[] {
    return commits.filter((value: FlatBranch) => value.parentIds[0].id === '');
  }

  // commit the initial commits
  private firstCommits(
    commits: FlatBranch[],
    history: Map<string, BranchUserApi<SVGElement>>,
    gitGraph: GitgraphUserApi<SVGElement>
  ): void {
    this.getStartingCommits(commits).forEach((commit: FlatBranch) => {
      history.set(
        commit.branchId,
        gitGraph
          .branch(commit.branchId)
          .commit(this.commitMessage(commit, GitAction.COMMIT))
      );
    });
  }

  // case of commit is in branchMap create new branch
  private newBranch(
    commit: FlatBranch,
    history: Map<string, BranchUserApi<SVGElement>>,
    branchMap: Map<string, string>
  ): boolean {
    if (
      commit.parentIds[0] &&
      branchMap.get(commit.parentIds[0].id) &&
      commit.parentIds.length < 2
    ) {
      history.set(
        commit.branchId,
        history
          .get(commit.parentIds[0].id)
          .branch(commit.branchId)
          .commit(this.commitMessage(commit, GitAction.BRANCHED))
      );
      return true;
    }
    return false;
  }

  // case where multiple parents merge index 2 into index 1
  private merge(
    commit: FlatBranch,
    history: Map<string, BranchUserApi<SVGElement>>
  ): boolean {
    if (commit.parentIds.length === 2) {
      history.set(
        commit.branchId,
        history.get(commit.parentIds[0].id).merge({
          branch: history.get(commit.parentIds[1].id),
          commitOptions: this.commitMessage(commit, GitAction.MERGED)
        })
      );
      return true;
    }
    return false;
  }

  // perform an normal commit to a given branch using the history map
  private commitToHistory(
    commit: FlatBranch,
    history: Map<string, BranchUserApi<SVGElement>>
  ): boolean {
    if (!history.get(commit.branchId) && commit.parentIds.length === 1) {
      history.set(
        commit.branchId,
        history
          .get(commit.parentIds[0].id)
          .commit(this.commitMessage(commit, GitAction.COMMIT))
      );
      return true;
    }
    return false;
  }

  // Style and make commit messages unique
  private commitMessage(
    commit: FlatBranch,
    gitAction: GitAction
  ): GitgraphCommitOptions<SVGElement> {
    return {
      hash: commit.branchId,
      subject: gitAction + ': ' + commit.message.slice(0, 50),
      body: commit.message,
      author: commit.author
    };
  }
}
