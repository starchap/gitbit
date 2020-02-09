import { Injectable } from '@angular/core';
import { TerminalService } from '@gitbit/gitbit/terminal/data-access';
import { Terminal } from '@gitbit/gitbit/terminal/typings';
import { FlatBranch, getGitCommand, GitCommands, GitLogFormat } from '@gitbit/gitbit/git/typings';

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

  constructor(private terminal: TerminalService) {
  }

  showAllBranches(): Promise<string[]> {
    return this.terminal.exec(GitCommands.GIT_BRANCH_LOCAL).then(
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
    return this.terminal.exec(getGitCommand(GitCommands.GIT_LOG, GitLogFormat)).then(
      (terminal: Terminal) => {
        return (terminal.stdOut as string).replace(/\n/g, ',');
      }
    );
  }
}
