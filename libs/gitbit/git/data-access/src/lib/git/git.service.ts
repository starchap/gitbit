import { Injectable } from '@angular/core';
import { TerminalService } from '@gitbit/gitbit/terminal/data-access';
import { GitBranch, GitCommands } from '../../../../typings/src/lib/git.model';
import { Terminal } from '@gitbit/gitbit/terminal/typings';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  newline: string = '\n';

  constructor(private terminal: TerminalService) {
  }

  showAllBranches(): Observable<string[]> {
    return this.terminal.write(GitCommands.GIT_BRANCH_LOCAL).pipe(
      map((terminal: Terminal) => {
        return (terminal.stdOut as string).replace(/\'/g, '').split(this.newline);
      })
    );
  }
}
