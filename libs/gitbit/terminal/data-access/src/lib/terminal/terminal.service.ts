import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Terminal } from '@gitbit/gitbit/terminal/typings';
import { ipcRenderer, IpcRendererEvent } from 'electron';

@Injectable({
  providedIn: 'root'
})
export class TerminalService {
  write(command: string): Observable<Terminal>{
    ipcRenderer.send('exec', command);
    return (new Observable<Terminal>((subscriber:Subscriber<Terminal>) =>{
      ipcRenderer.on('execRes', (event: IpcRendererEvent, ...arg: any[]) => {
        subscriber.next(arg[0] as Terminal)
      });
    }));
  }
}
