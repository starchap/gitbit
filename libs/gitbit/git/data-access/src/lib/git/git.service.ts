import { Injectable } from '@angular/core';
import { FlatBranch, getGitCommand, GitCommands, GitLogFormat } from '@gitbit/gitbit/git/typings';
import { SystemService } from '@gitbit/gitbit/system/data-access';
import { Terminal } from '@gitbit/gitbit/system/typings';

export type JSONFlatBranch = {
  branchName: string,
  branchId: string,
  parentIds: string,
  time: string,
  author: string,
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class GitService {
  newline: string = '\n';

  constructor(private systemService: SystemService) {
  }

  showAllBranches(): Promise<string[]> {
    return this.systemService.terminal(GitCommands.GIT_BRANCH_LOCAL).then(
      (terminal: Terminal) => {
        return (terminal.stdOut as string).replace(/\'/g, '').split(this.newline);
      }
    );
  }

  getGitLog(): Promise<FlatBranch[]> {
    return this.prepareGitLog().then(
      (json: string) => {
        return (JSON.parse(`[${json}]`) as JSONFlatBranch[]).map(
          (value: JSONFlatBranch) => {
            return ({
              ...value,
              parentIds: value.parentIds.split(' ').length > 0 ?
                value.parentIds.split(' ').map(value1 => ({ id: value1 })) :
                { id: value.parentIds }
            } as FlatBranch);
          }
        );
      }
    );
  }

  prepareGitLog(): Promise<string> {
    return this.systemService.terminal(getGitCommand(GitCommands.GIT_LOG, GitLogFormat)).then(
      (terminal: Terminal) => {
        return (terminal.stdOut as string).replace(/\n/g, ',');
      }
    );
  }
}
