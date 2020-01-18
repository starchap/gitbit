import { Injectable } from '@angular/core';
import { TerminalService } from '@gitbit/gitbit/terminal/data-access';
import { GitBranch, GitCommands } from '../../../../typings/src/lib/git.model';
import { Terminal } from '@gitbit/gitbit/terminal/typings';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  newline: string = '\n';
  constructor(private terminal: TerminalService) { }

  showAllBranches():void{
    this.terminal.write(GitCommands.GIT_BRANCH_ALL).subscribe((terminal: Terminal)=>{
      console.log((terminal.stdOut as string).split(this.newline));
    })
  }
}
