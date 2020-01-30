import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Terminal } from '@gitbit/gitbit/terminal/typings';
import { ipcRenderer, IpcRendererEvent } from 'electron';

@Injectable({
  providedIn: 'root'
})
export class TerminalService {
  async exec(command: string): Promise<Terminal> {
    return await ipcRenderer.invoke('sync', command).then((result: Terminal) => {
      return result;
    })
  }
}
