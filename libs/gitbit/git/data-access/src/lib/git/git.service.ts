import { Injectable } from '@angular/core';
import { TerminalService } from '@gitbit/gitbit/terminal/data-access';
import { FlatBranch, GitCommands } from '../../../../typings/src/lib/git.model';
import { Terminal } from '@gitbit/gitbit/terminal/typings';

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
        return (JSON.parse(`[${json}]`) as FlatBranch[]).map(
          (value: FlatBranch) => {
            return ({
              ...value,
              parentIds: value.parentIds[0].id.length > 0 ?
                value.parentIds[0].id.split(' ').map(value1 => ({ id: value1 })) :
                []
            });
          }
        );
      }
    );
  }

  prepareGitLog(): Promise<string> {
    return this.terminal.exec(GitCommands.GIT_LOG).then(
      (terminal: Terminal) => {
        return (terminal.stdOut as string).replace(/\n/g, ',');
      }
    );
  }

  /*
      async getGitLog(): Promise<FlatBranch[]>{
        const branches: string = await this.terminal.write(GitCommands.GIT_LOG).toPromise().then(async (terminal: Terminal) => {
          return (terminal.stdOut as string);
          });
        const branchArr: string =  branches.replace(/\n/g, ',');
        return JSON.parse(`[${branchArr}]`) as FlatBranch[];
      }
  */

}

/*
*
* FlatMap keeps order
* kør igennem flat structure fra toppen og tilføj branches
* når en branch har 2 parentIds er det et merge
* tilføj listener
* */
